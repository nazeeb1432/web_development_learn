import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import env from "dotenv";
  
const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
  secret:process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized:true ,
  cookie:{
    maxAge: 1000*60*60*24
  }
}))

app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
  user:process.env.POSTGRES_USER,
  host: process.env.PG_HOST,
  database:process.env.PG_DATABASE ,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTTGRES_PORT,
});
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/secrets",(req,res)=>{
  console.log(req.user);
  if(req.isAuthenticated()){
    res.render("secrets.ejs");
  }else{
    res.redirect("/login");
  }
})

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      //hashing the password and saving it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed Password:", hash);
          const result=await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, hash]
          );
          const user=result.rows[0];
          req.login(user,(err)=>{//passport method
            console.log(err);
            res.redirect("/secrets");

          })
          // res.render("secrets.ejs");
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login",passport.authenticate("local",
  {
  successRedirect: "/secrets",
  failureRedirect: "/login"  //if user is not authenticated, he will be redirected to login page.
}))

passport.use(new Strategy(async function verify(username,password,cb){
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;
      bcrypt.compare(password, storedHashedPassword, (err, result) => {//result is boolean
        if (err) {
          return cb(err);
        } else {
          if (result) {
            // res.render("secrets.ejs");
            return cb(null,user);
          } else {
            // res.send("Incorrect Password");
            return cb(null,false);//kono error nai,user bhul pass dise , so he is a fraud(false).
          }
        }
      });
    } else {
      return cb("User not found");
    }
  } catch (err) {
    return cb(err);
  }
}))

passport.serializeUser((user,cb)=>{
  cb(null,user);
});

passport.deserializeUser((user,cb)=>{
  cb(null,user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

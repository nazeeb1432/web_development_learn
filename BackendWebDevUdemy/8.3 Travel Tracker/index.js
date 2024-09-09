import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db=new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"world",
  password:"nazeeb",
  port:5432,
})

db.connect();

async function checkVisited(){
  const result=await db.query("SELECT country_code FROM visited_countries");
  let countries=[];
  result.rows.forEach((row)=>{
    countries.push(row.country_code);
  })
  return countries;
}

app.get("/", async (req, res) => {
  const countries=await checkVisited();//countries has all the codes
  res.render("index.ejs",{countries: countries, total:countries.length});
});

app.post("/add",async(req, res) => {
  const input = req.body["country"];
  // const response=await db.query("SELECT country_code FROM countries WHERE country_name=$1",[input]);
  // if(response.rows.length>0){
  //   await db.query("INSERT into visited_countries (country_code) VALUES ($1)",[response.rows[0].country_code]);
  //   res.redirect('/');
  // }
  try{
    const response=await db.query("SELECT country_code from countries WHERE LOWER(country_name) LIKE '%' || $1 || '%' ;",[input.toLowerCase()]);
    const data=response.rows[0];
    const countryCode=data.country_code;

    try{
      await db.query("INSERT into visited_countries (country_code) VALUES ($1)",[countryCode]);
      res.redirect('/');
    }catch(err){
        console.log(err);
        const countries=await checkVisited();
        res.render("index.ejs",{
          countries:countries,
          total:countries.length,
          error: "Country already visited, please choose a different one."
        })
    }
  }
  catch(err){
    console.log(err);
    const countries=await checkVisited();
    res.render("index.ejs",{
      countries:countries,
      total:countries.length,
      error: "Country not found, please try again."
    })
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "nazeeb",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];




app.get("/", async(req, res) => {
  
  try{
    const response=await db.query("SELECT * FROM items ORDER BY id ASC;");
    items=response.rows;
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  }
  catch(err){
    console.log(err);
  }
  
});

app.post("/add", async(req, res) => {
  const item = req.body.newItem;
  // items.push({ title: item });
  try{
    await db.query("INSERT into items (title) values ($1)",[item]);
    res.redirect("/");
  }catch(err){
    console.log(err);
  }

});

app.post("/edit", async(req, res) => {
  const id=req.body.updatedItemID;
  const updatedTitle=req.body.updatedItemTitle;
  try{
    await db.query("UPDATE items SET title=$1 WHERE id=$2",[updatedTitle,id]);
    res.redirect("/");
  }catch(err){
    console.log(err);
  }
});

app.post("/delete", async(req, res) => {
  const id=req.body.deleteItemID;
  try{
    await db.query("DELETE FROM items WHERE id=$1",[id]);
    res.redirect("/");
  }catch(err){
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "nazeeb";
const yourPassword = "ILOVEBASKETBALL";
const yourAPIKey = "a6337fca-0541-491e-b40d-62c36b49f53b";
const yourBearerToken = "5e811564-ff44-435e-8a7e-8c8bf5ecc9e0";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  try{
    const response = await axios.get(API_URL+'/random');
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  }
  catch(error){
    console.error("Error fetching data:", error.message);
    res.status(500).send("Error fetching data.");
  }
});

app.get("/basicAuth", async(req, res) => {
  try{
    const result= await axios.get(API_URL+'all?page=2',{
      auth: {
        username: yourUsername,
        password:  yourPassword
      }
    })
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }
  catch(error){
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async(req, res) => {
  try{
    const result=await axios.get(API_URL+'/filter',{
      params:{
        score:5,
        apiKey:yourAPIKey,
      }
    })
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }catch(error){
    res.send(404).send(error.message);
  }
});

const config={
  headers:{Authorization:`Bearer${yourBearerToken}`}
}

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/secrets/2", config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

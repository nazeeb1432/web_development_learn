import express from "express";

const app = express();
const port = 3000;

let dayT="weekday";
let adv="Its time to work harder!!" ;

app.get('/', (req, res) => {

    const date=new Date();
    const today=date.getDay();

    console.log(today);

    if(today ===5 || today ===6){
        dayT="weekend";
        adv="Its time to have some fun!!";
    }
    res.render("index.ejs",{
       dayType: dayT,
       advice:adv   
    })

});


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
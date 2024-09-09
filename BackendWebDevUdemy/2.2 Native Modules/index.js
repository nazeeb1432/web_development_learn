const fs=require("fs");

// fs.writeFile("message.txt",'Hello from node',(err)=>{
//     if(err) throw err;
//     console.log("File created!");
// })

fs.readFile("message.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})


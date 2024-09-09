// const arr=["banana","fruit","orange"];

// let text="<ul>";

// for(let i=0; i<arr.length; i++){
//     text+="<li>"+arr[i]+"</li>";
// }
// text+="</ul>";

// document.getElementById("demo").innerHTML=text;

const myObj={
    name: "Nazeeb",
    age:30,
    cars:[
        {name:"Toyota",models:["crown","harrier","vellfire"]},
        {name:"mercedes",models:["g-wagon","merc-c"]},
        {name:"hundai",models:["KK","cruiser","sports"]}
    ]
}

var x="<h1>Mycars</h1>";

for(let i in myObj.cars){
     x+="<h1>"+myObj.cars[i].name+"</h1>";
    x+="<ul>";
    for(let j in myObj.cars[i].models){
        x+="<li>"+myObj.cars[i].models[j]+"</li>";
    }
    x+="</ul>";
}

document.getElementById("demo").innerHTML=x;


// function generateRandomNumber(){
//     var random_number=Math.floor(Math.random()*6)+1;
//     return random_number;
// }

// var p1=generateRandomNumber();
// var p2=generateRandomNumber();

// var newSrc1="./images/dice"+p1;
// var newSrc2="./images/dice"+p2;

// document.querySelector(".img1").setAttribute("src",newSrc1+".png");

// document.querySelector(".img2").setAttribute("src",newSrc2+".png");

// if(p1>p2){
//     document.querySelector("h1").innerHTML="Player 1 Wins!";
// }
// else if(p1<p2){
//     document.querySelector("h1").innerHTML="Player 2 Wins!";
// }
// else document.querySelector("h1").innerHTML="Draw!";


var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImageSource1="./images/dice"+randomNumber1+".png";

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImageSource2="./images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}

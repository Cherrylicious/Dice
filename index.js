var randomNumber1 = Math.floor((Math.random()*6)+1);

var randomNumber2 = Math.floor((Math.random()*6)+1);

var imageSource1 = "images/dice"+randomNumber1+".png";
var imageSource2 = "images/dice"+randomNumber2+".png";

var image1= document.querySelectorAll("img")[0];

var image2= document.querySelectorAll("img")[1];
var player1= document.querySelectorAll("p")[0];
var player2= document.querySelectorAll("p")[1];

var headline= document.querySelector("h1");
var body= document.querySelector("body");

image1.setAttribute("src",imageSource1);
image2.setAttribute("src",imageSource2);


if (randomNumber1==randomNumber2){
  headline.innerHTML= "🚩 Draw 🚩";
  player1.style.color="#e00543";
  player2.style.color="#e00543";
} else if (randomNumber1>randomNumber2){
  headline.innerHTML= "🚩 Player 1 Wins!";
  body.style.backgroundColor = "#1f4287";
  player1.style.color="#e00543"
}else {
  headline.innerHTML= "Player 2 Wins! 🚩";
  body.style.backgroundColor = "#071e3d";
  player2.style.color="#e00543";
}

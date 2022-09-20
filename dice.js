var randomeNumber1=Math.floor(Math.random()*6)+1;
var randomeImage="images/dice"+randomeNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomeImage);

var randomeNumber2=Math.floor(Math.random()*6)+1;
var randomeImage2="images/dice"+randomeNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomeImage2);

if(randomeNumber1===randomeNumber2){
    document.querySelector("h1").innerHTML="Match Drawn"
}
else if(randomeNumber1>randomeNumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}else{
    document.querySelector("h1").innerHTML="player 2 wins the game";
}
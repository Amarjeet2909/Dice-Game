function rollDice() {
var randomNumber1;
randomNumber1= Math.random();
randomNumber1= randomNumber1*6;
randomNumber1= Math.floor(randomNumber1)+1;
var randomDiceimg= "dice"+randomNumber1+".png";
var randomImgSource= "images/"+randomDiceimg;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgSource);
var randomNumber2;
randomNumber2= Math.random();
randomNumber2= randomNumber2*6;
randomNumber2= Math.floor(randomNumber2)+1;
var randomDiceimg2= "dice"+randomNumber2+".png";
var randomImgSource2= "images/"+randomDiceimg2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImgSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "🚩 Player 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= "🚩 Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML= "Game Tied!";
}
}
if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}

var number1 = Math.floor(Math.random()*6)+1;
var number2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+number1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+number2+".png");
if(number1 > number2)
{
  document.querySelector("h1").textContent = "player1 wins";
}
if(number1 < number2)
{
  document.querySelector("h1").textContent = "player2 wins";
}
if(number1 === number2)
{
  document.querySelector("h1").textContent = "draw";
}

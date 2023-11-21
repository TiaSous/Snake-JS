import '../css/style.css';
import { PartOfSnake } from './snake';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//code ascii des flèches
const up = 38;
const down = 40;
const left = 37;
const right = 39;

//taille du serpent pour une partie (c'est un carré)
const tailleSerpent = 50;
const couleurSnake = 'white'

//variable score
let score = 0;

//variable mort
let mort = false

//objet serpent qui contient toutes les part
let Snake = {
  part: [],
  x:tailleSerpent* 2,        //x de la part qui est devant
  y:0,                       //y de la part qui est devant
}

let Apple = {
  x: tailleSerpent*5,
  y: tailleSerpent*5
}

let frame = 0;
let userInputX = tailleSerpent;
let userInputY = 0;
 
Snake.part.push(new PartOfSnake(0, 0), new PartOfSnake(tailleSerpent, 0), new PartOfSnake(tailleSerpent*2, 0));      

newApple()

//programme principale
const move = () => { 

  // Dessine la grille de jeu
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800);
  
  //va bouger le serpent
  if (frame == 50){
    
    death()
    //mange la pomme
    if (Snake.x + userInputX == Apple.x && Snake.y + userInputY == Apple.y)
    {
      addAppleInPart()
      Snake.x += userInputX;
      Snake.y += userInputY;
    }
    else
    {
      Snake.x += userInputX;
      Snake.y += userInputY;
      mouvementSnake(Snake.x, Snake.y)
    }
    //dessine le serpent
    frame = 0;
  } 
  Draw();
  drawApple();
  document.getElementById('score').innerHTML = score
  frame++; 
  if (mort == true)
  {
    alert("hello")
  }
};

setInterval(move, 1);

//dessine le serpent
function Draw(){
  ctx.fillStyle = couleurSnake;
  for(let i = 0; i < Snake.part.length; i++)
  {
    ctx.fillRect(Snake.part[i].getX(), Snake.part[i].getY(), tailleSerpent, tailleSerpent)
  }
  
}

//fait bouger le serpent
function mouvementSnake(x, y){
  Snake.part.shift();
  Snake.part.push(new PartOfSnake(x, y));
}

//recupère l'input du user
window.addEventListener("keydown", (event) => {
  if (event.keyCode == up && userInputY != 1*tailleSerpent)
  {
    userInputY = -1*tailleSerpent;
    userInputX = 0;
  }
  else if (event.keyCode == down && userInputY != -1*tailleSerpent)
  {
    userInputY = 1*tailleSerpent;
    userInputX = 0;
  }
  else if (event.keyCode == left && userInputX != 1*tailleSerpent)
  {
    userInputX = -1*tailleSerpent;
    userInputY = 0;
  }
  else if (event.keyCode == right && userInputX != -1*tailleSerpent)
  {
    userInputX = 1*tailleSerpent;
    userInputY = 0;
  }
})

function drawApple(){
  ctx.fillStyle = 'red'
  ctx.fillRect(Apple.x, Apple.y, tailleSerpent, tailleSerpent)
}

function addAppleInPart(){
  Snake.part.push(new PartOfSnake(Apple.x, Apple.y));
  newApple()
  score++;
  
}

function newApple(){
  let numberX;
  let numberY;
  let ok = true;
  do
  {
    ok = true
    numberX = Math.floor(800/tailleSerpent * Math.random())
    numberY = Math.floor(800/tailleSerpent * Math.random())
    
    for(let i = 0; i < Snake.part.length; i++)
    {
      if ((numberX*tailleSerpent == Snake.part[i].getX() && numberY*tailleSerpent == Snake.part[i].getY()) || (numberX*tailleSerpent == Apple.x && numberY*tailleSerpent == Apple.y))
      {
        ok = false
      }
    }
  
  }
  while(ok == false)

  Apple.x = numberX *tailleSerpent
  Apple.y = numberY*tailleSerpent
}

function death(){
  //s'il meurt
  if(Snake.x + userInputX < 0 || Snake.x + userInputX > 750|| Snake.y + userInputY < 0 || Snake.y + userInputY > 750)
  {
    mort = true
  }
  else
  {
    for(let i = 0; i < Snake.part.length; i++)
    {
      if (Snake.x + userInputX == Snake.part[i].getX() && Snake.y + userInputY == Snake.part[i].getY())
      {
        mort = true;
      }
    }
  }
}
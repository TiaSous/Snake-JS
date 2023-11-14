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

//objet serpent qui contient toutes les part
let Snake = {
  part: [],
  x:tailleSerpent* 2,        //x de la part qui est devant
  y:0,                       //y de la part qui est devant
}


let frame = 0;
let userInputX = tailleSerpent;
let userInputY = 0;
 
Snake.part.push(new PartOfSnake(0, 0, tailleSerpent), new PartOfSnake(tailleSerpent, 0, tailleSerpent), new PartOfSnake(tailleSerpent*2, 0, tailleSerpent));      
 
//programme principale
const move = () => { 
  
  // Dessine la grille de jeu
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800);

  //dessine le serpent
  Draw();

  //va bouger le serpent
  if (frame == 70){
    Snake.x += userInputX;
    Snake.y += userInputY;
    mouvementSnake(Snake.x, Snake.y)
    frame = 0;
  } 
   
  frame++; 
};

setInterval(move, 1);

//dessine le serpent
function Draw(){
  ctx.fillStyle = 'green';
  for(let i = 0; i < Snake.part.length; i++)
  {
    ctx.fillRect(Snake.part[i].getX(), Snake.part[i].getY(), tailleSerpent, tailleSerpent)
  }
  
}

//fait bouger le serpent
function mouvementSnake(x, y){
  Snake.part.shift();
  Snake.part.push(new PartOfSnake(x, y, tailleSerpent));
}

window.addEventListener("keydown", (event) => {
  if (event.keyCode == up)
  {
    userInputY = -1*tailleSerpent;
    userInputX = 0;
  }
  else if (event.keyCode == down)
  {
    userInputY = 1*tailleSerpent;
    userInputX = 0;
  }
  else if (event.keyCode == left)
  {
    userInputX = -1*tailleSerpent;
    userInputY = 0;
  }
  else if (event.keyCode == right)
  {
    userInputX = 1*tailleSerpent;
    userInputY = 0;
  }
})

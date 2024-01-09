import '../css/style.css';
import { PartOfSnake } from './snake';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//mouvement selon la touche
const up = "ArrowUp";
const down = "ArrowDown";
const left = "ArrowLeft";
const right = "ArrowRight";

//taille du serpent pour une partie (c'est un carré)
const tailleSerpent = 50;
const couleurSnake = 'white'

//objet serpent qui contient toutes les part
let Snake = {
  part: [],
  x:tailleSerpent* 2,        //x de la part qui est devant
  y:0,                       //y de la part qui est devant
}

//objet pomme
let Apple = {
  x: tailleSerpent*5,
  y: tailleSerpent*5
}

let frame = 0;                    //nombre de frame 
let userInputX = tailleSerpent;   //direction serpent axe x, le serpent va automatiquement aller à droite
let userInputY = 0;               //direction serpent axe y
let firstTime = true;             //pour afficher les différents écran de fin
let score = 0;                    //variable score


////////Début/////
//rajoute 3 partie au snake
Snake.part.push(new PartOfSnake(0, 0), new PartOfSnake(tailleSerpent, 0), new PartOfSnake(tailleSerpent*2, 0));    

//écran de fin invisible
document.getElementById('gameOver').style.display = 'none';

//fait apparître une pomme
newApple();

//programme principale
const move = () => { 
  // Dessine la grille de jeu
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800);
  
  //va bouger le serpent
  if (frame == 10){
    //s'il meurt
    death();

    //mange la pomme ou mouvement
    Snake.x + userInputX == Apple.x && Snake.y + userInputY == Apple.y ? addAppleInPart() 
    : mouvementSnake(Snake.x + userInputX, Snake.y + userInputY);
    
    Snake.x += userInputX;
    Snake.y += userInputY;

    frame = 0;
  } 
  //dessine
  draw();
  drawApple();
  document.getElementById('score').innerHTML = score

  frame++; 
};

setInterval(move, 1);

//dessine le serpent
function draw(){
  ctx.fillStyle = couleurSnake;
  Snake.part.forEach((element) => {
    ctx.fillRect(element.getX(), element.getY(), tailleSerpent, tailleSerpent)
  });
}

//fait bouger le serpent
function mouvementSnake(x, y){
  Snake.part.shift();
  Snake.part.push(new PartOfSnake(x, y));
}

//recupère l'input du user
window.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key == up && userInputY != 1*tailleSerpent)
  {
    userInputY = -1*tailleSerpent;
    userInputX = 0;
  }
  else if (event.key == down && userInputY != -1*tailleSerpent)
  {
    userInputY = 1*tailleSerpent;
    userInputX = 0;
  }
  else if (event.key == left && userInputX != 1*tailleSerpent)
  {
    userInputX = -1*tailleSerpent;
    userInputY = 0;
  }
  else if (event.key == right && userInputX != -1*tailleSerpent)
  {
    userInputX = 1*tailleSerpent;
    userInputY = 0;
  }
})

//dessine la pomme
function drawApple(){
  ctx.fillStyle = 'red'
  ctx.fillRect(Apple.x, Apple.y, tailleSerpent, tailleSerpent)
}

//lorsque le joueur mange une pomme
function addAppleInPart(){
  Snake.part.push(new PartOfSnake(Apple.x, Apple.y));
  newApple();
  score++; 
}

//nouvelle pomme
function newApple(){
  let numberX;
  let numberY;
  let ok = true;

  //contrôle si la pomme n'apparaît pas sur le serpent
  do
  {
    ok = true                                                     //varibale pour savoir si les nombré généré
    numberX = Math.floor(800/tailleSerpent * Math.random())
    numberY = Math.floor(800/tailleSerpent * Math.random())
    
    if (Snake.part.some((n1) => (n1.getX() == numberX*tailleSerpent && numberY*tailleSerpent == n1.getY())))
    {
      ok=false;
    }
  }
  while(!ok)

  Apple.x = numberX*tailleSerpent
  Apple.y = numberY*tailleSerpent
}

//contrôle si mort
function death(){
  //s'il meurt
  if (Snake.x + userInputX < 0 || Snake.x + userInputX > 800 - tailleSerpent || Snake.y + userInputY < 0 || Snake.y + userInputY > 800 - tailleSerpent ||
      Snake.part.some((n1) => (n1.getX() == Snake.x + userInputX && Snake.y + userInputY == n1.getY())))
  {
    //fait disparaitre écran jeu et fait apparaitre game over
    document.getElementById('app').style.display = 'none';
    document.getElementById('gameOver').style.display = 'block';

    //affiche différent écran
    if(firstTime)
    {
      firstTime = false;
      document.getElementById('gameOver').innerHTML = "Vous etes mort!";
    }
    
    setTimeout(() => {
      document.getElementById('gameOver').innerHTML = "Score : " + score;
    }, 2000);

    setTimeout(() => {
      document.location.href="index.html"
    }, 4000);
  }
}


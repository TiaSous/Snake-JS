/*import '../css/style.css';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const move = () => {

  // Dessine la grille de jeu
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800);

  // Rafraichit à chaque seconde
  setTimeout(() => {
    requestAnimationFrame(move);
  }, 1000);
  
};

requestAnimationFrame(move);*/

alert("Hello world");
let num1 = 5;
const SALUT = 'coucou';

//permet de demander une valeur
result = prompt(SALUT, '');

// une variable encapsulée
alert( `Hello, ${num1}!` ); // Hello, 5!

//permet de rnvoyer le type
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"

//confirm
let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true si OK est pressé

//conversion
//string
let value = true;
alert(typeof value); // boolean

value = String(value); // maintenant la valeur est une chaîne de caractères "true"
alert(typeof value); // string

//number
let str = "123";
alert(typeof str); // string
let num = Number(str); // devient un nombre 123
alert(typeof num); // nombre

//conversion impossible
let age = Number("une chaîne de caractères arbitraire au lieu d'un nombre");
alert(age); // NaN, la conversion a échoué

/*Un opérande est ce à quoi les opérateurs sont appliqués. 
Par exemple, dans la multiplication 5 * 2, il y a deux opérandes : 
l’opérande gauche est 5 et l’opérande droit est 2. Parfois, les gens disent “arguments” au lieu de “opérandes”.

- Un opérateur est unaire s’il a un seul opérande. Par exemple, la négation unaire - inverse le signe du nombre 
- Un opérateur est binaire s’il a deux opérandes. La même négation existe également dans la forme binaire 

** = L’opérateur d’exponentiation a ** b multiplie a par lui-même b fois. En mathématiques à l’école, nous écrivons cela ab

-----------Concaténation---------------
+
alert(2 + 2 + '1' ); // "41" et non "221"
alert('1' + 2 + 2); // "122" and not "14"

-
alert( 6 - '2' ); // 4, convertit '2' en nombre
alert( '6' / '2' ); // 3, convertit les deux opérandes en nombres

------comparaison--------
La valeur undefined ne doit pas du tout participer aux comparaisons 
alert( undefined > 0 );  // false (1)
alert( undefined < 0 );  // false (2)
alert( undefined == 0 ); // false (3)
 ------Opérateur ternaire ‘?’----------
let accessAllowed = (age > 18) ? true : false;

L’appel de l’alert ne renvoie pas de valeur. Ou, en d’autres termes, il retourne undefined

----------L'opérateur de coalescence des nuls '??'----------------
Le résultat de a ?? b est :

    si a est défini, alors a,
    si a n’est pas défini, alors b.

---------------for in---------------
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // valeurs pour les clés
  alert( user[key] ); // John, 30, true
}

--------function------------
function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // affiche le code de la fonction

--------foncion flêchées-------------
let sum = (a, b) => a + b;

//Cette fonction fléchée est la forme raccourcie de :
let sum = function(a, b) {
  return a + b;
};


alert( sum(1, 2) ); // 3
-------------

let sum = (a, b) => {  // Les accolades ouvre une fonction multiligne
  let result = a + b;
  return result; // si nous utilisons des accolades, nous avons besoin d'un "return" explicite
};

alert( sum(1, 2) ); // 3

-----------Debogeur------------
Nous pouvons également suspendre le code en utilisant la commande debugger, comme ceci :

function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;  // <-- le débogueur s'arrête ici

  say(phrase);
}

---------console.log()-----------
Pour afficher quelque chose sur la console depuis notre code, utilisez la fonction console.log.
*/

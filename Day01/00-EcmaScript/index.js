/*npm install [libName]

npm i [linName]

npm i create-react-app

create-react-app [AppName]

npx create-react-app [AppName]

npm-cache
*/

console.log(123);

//Default Parameter
const sayHi = (params = "Test default Data!") => {
  console.log(params);
};

sayHi();

var name = "Jhon";

//let
let x = 12;
x = 13;
if (true) {
  let x = 15;
  console.log("local", x);
}

console.log(x);

//const
const y = "AAAAA";

// X y = "BBBB";

// Spread Operator ...

let cities = ["Ankara", "İstanbul"];

console.log(...cities,...CTS2);

// FOREACH - ARRAY MAP
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

// ARRAY FILTER 
const numbers2 = [1, 2, 3, 4];
const filtered = numbers.map(item => item == 2);
console.log(doubled); // [2, 4, 6, 8]



// ARRAY MAP
const array1 = [1, 4, 9, 16];

array1.map()
//std function

function(item,index,array)
{
return item;
}

//arrow function
(item,index,array)=> item;



//LOOP ONE
item=1
index=0
array=[1, 4, 9, 16]

//LOOP TWO
item=4
index=1
array=[1, 4, 9, 16]

//LOOP THREE
item=9
index=2
array=[1, 4, 9, 16]






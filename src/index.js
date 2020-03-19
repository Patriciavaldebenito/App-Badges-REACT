import React from "react";
import ReactDOM from "react-dom";

const name = 'Patty valdebenito';

// function add(){
//     return 10;
// }

const jsx = <h1>Hola, soy {name} {29+1}</h1>;
//const jsx1 = <h3>{add()}</h3>

const container = document.getElementById("app");
ReactDOM.render(jsx, container);
//ReactDOM.render(jsx1, container);


/* //1
const element = document.createElement('h1');
element.innerText = 'Hello';
//where
const container = document.getElementById('app');
container.appendChild(element);
*/

/* // 2
const element = <h1>Hello, BADGES!</h1>;
const container = document.getElementById('app');
ReactDOM.render(element,container);
*/

/*  //3
const element = React.createElement("a", { href:'https://portafolio-1-54bf1.firebaseapp.com/'}, "ir a portafolio");
const container = document.getElementById("app");
ReactDOM.render(element, container);
 */
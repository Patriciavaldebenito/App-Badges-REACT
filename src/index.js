import React from "react";
import ReactDOM from "react-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import '../src/global.css';
//import avatarMe from './images/avatar_me.jpg';
import BadgeNew from './pages/BadgeNew.js';


const container = document.getElementById('app');
ReactDOM.render(<BadgeNew/>
,container);
































// 5
/*
const jsx = (
<div>
    <h1>New App Badges</h1>
    <p>Crea tu perfil ! jeje</p>
</div>
);

const constainer = document.getElementById('app');
ReactDOM.render(jsx,constainer);


const element = React.createElement(
    'div',
    {},
    React.createElement('h1',{},'New App Badges'),
    React.createElement('p',{},'crea tu perfil!, 2 jeje')
);
ReactDOM.render(element,constainer);

*/

// 4
//const name = 'Patty valdebenito';
/*function add(){
     return 10;}
*/ 

//const jsx = <h1>Hola, soy {name} {29+1}</h1>;
//const jsx1 = <h3>{add()}</h3>

//const container = document.getElementById("app");
//ReactDOM.render(jsx, container);
//ReactDOM.render(jsx1, container);

/*  //3
const element = React.createElement("a", { href:'https://portafolio-1-54bf1.firebaseapp.com/'}, "ir a portafolio");
const container = document.getElementById("app");
ReactDOM.render(element, container);
 */


/* // 2
const element = <h1>Hello, BADGES!</h1>;
const container = document.getElementById('app');
ReactDOM.render(element,container);
*/


/* //1
const element = document.createElement('h1');
element.innerText = 'Hello';
//where
const container = document.getElementById('app');
container.appendChild(element);
*/


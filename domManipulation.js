// let body1 = document.body;
// body.style.fontSize='3em';

// 1. adding elements to the page
// 2 ways

const body = document.body;
body.append('hello world');

// body.appendChild() // less preferred


const div1 = document.createElement('div');
div1.innerText = 'hello world2';


body.append(div1);


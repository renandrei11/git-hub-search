// //log to console
// console.log('hello world!'); //strings
// console.log(123); //integer
// console.log(true); //boolean
// var greeting ="hello" //variables


// console.log(greeting);
// console.log(1,2,3,4);
// console.log('{ a: 1, b: 2}'); // objects property






// var name = 'Junny boy';
//     name = ' Junny';
//         console.log(name);

// // Init var
//     var greeting 
//         console.log(greeting);

//             greeting ='hello';
//             console.log(greeting);

// // letter, number,_$
// // Can not start w/ number

// // Multi wars or vars
// var firstname = 'Junny'; // camel case
// var first_name = 'Sara';
// var firstname = 'Tom';




// // Let
// 1st name;
// name = 'Junny boy';
// console.log(name);
// name = 'Smit';
// console.log(name);

// // Const
// console name = 'junny';
// aconsole.log(name);

// const person = {
//     name: 'Junny';
//     age: '24';
// }

// person.name = 'sara';
// console.log('person');

// const numbers =(1,2,3,4,5);
// numbers.log(number);

// 1st val;
// //
// val = string(5555);
// val = string(5+5);

// //split
// val =str.split('');
// val = tags.split('');

//
// const name = 'Junny';
// const age = 24;
// const job = 'web dev';
// const city = 'Quezon City';
// 1st html;

// //
// html ='<ul><li>Name: ' + name +
//     '</ul></li>Age: ' + age +
//     '</li>' + '</ul>';

// //
// html = `<ul>
//             <li>Name: ${Name}</li>
//             <li>age ${age}</li>
//             <li>job$(job)</li>
//             <li>city$(city)</li>
//         </ul>


// const person = {
//     fistname: 'steve',
//     lastname: 'smith',
//     age: 20,
//     email: 'stevoneto@gmail.com',
//     hobbies: ['music', 'sports'],
//     address:{
//         city: 'Manila',
//         state: 'Phil',
//     },
//     getBirthYear: function() {
//         return 2019 - this.age;
//     }
// };

// let val;

// val = person.getBirthYear();
// val = person.address['state'];
// val = person['email'];
// val = person['hobbies'];
// val = person['age'];

// // console.log(val);

// // loop
// const people = [{name: 'junny', age: '24'}, {name: 'edwil', age: '26'}];

//     for(let i = 0; i < people.length; i++ ) {
//         console.log(people[i].name);
//     }

//


// if(something){
//     //do something daw pre
// } else{
//     //do something ulit par
// }



// const id = 100;
// // equal 
// if(id == 100){
//     console.log('correct to');
// }else{
//     console.log('mali ka');
// }


// if(id != 100){
//     console.log('correct to');
// }else{
//     console.log('mali ka');
// }

// if(id !== 100){
//     console.log('correct to');
// }else{
//     console.log('mali ka');
// }



// function greet(firstname = 'junny', lastname = 'boy'){
//     if(typeof firstname === 'undefined'){
//         firstname = 'junny';

//     }
//     if(typeof lastname === 'undefined'){
//         lastname = 'boy';

//     }
//     return 'hello' + firstname + ' ' + lastname; 


// }

// console.log(greet());

// // function
// const square = function(x = 3) {
//     return x * x;
// }

// console.log(square());

// (function(){
//     console.log('hindi tumatakbo..');
// })();

// // property methods

// const todo = {
//     add: function(){
//         console.log('add to do..');
//     },
//     edit: function(id){
//         console.log(`edit to do ${id}`)
//     }

// }

// todo.delete = function() {
//     console.log('delete to do..');
// }

// todo.add();
// todo.edit(24);
// todo.delete();


// for(let i = 0; i < 10; i++) {
//     if(i === 2) {
//         console.log('2 is my favorite number.');
//     }

//     if (i === 5) {
//         console.log('stop the loop');
//         break;
//     }


//     console.log(`number ${i}`);
// }

// while loop

// let i = 0;
// while(i x < 10); {
//     console.log('number ' + i);
//     i++

// }

// do while loop
// let i = 0;
// do {
//     console.log('number' + i);
//     i++
// }

// while( i < 10);

// loop through array

// const cars = ['ford','cherry','honda','toyota'];
// for(let i = 0; i < cars.lenght; i++) {
//     console.log(cars[i]);

// }


//foreach
// cars.forEach(function(car, index, array){
//     console.log('${index} : ${car}');
//     console.log(array);

// });

// map

// const users = [ {id: 1, name: 'john'}, {id: 2, name: 'sara'}, {id: 3, name: 'karen'}, {id: 4, name: 'loopy'} ];

// const ids = users.map(function(user) {
//     return user.name;

// });

//  console.log(ids);
 
//for in  loop
// const user = {
//     fistname: 'junny',
//     lastname: 'boy',
//     age: 23
// }

// for (let x in user) {
//     console.log(`${x} : ${user[x]}`);
// }

// let val;
// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.url;
// val = document.characterSet;
// val = document.contentType;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.form[0].method;
// val = document.form[0].action;

// val = document.link;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList;


// val = document.images;
// val = document.scripts;
// val = document.scripts[1];
// val = document.scripts[1].getAttribute(`src`);

// let scripts = document.scripts;

// let scripts = Array.from(scripts);

// scriptArr.foreach(function(script) {
//     console.log(script.getAttribute(`scr`));

// });

//
//  document.getElementById('task-title')

// console.log(document.getElementById(`task=title`).id);
// console.log(document.getElementById(`task=title`)
// .className);

// const taskTitle = document.getElementById(`task -title`);

// // change style
// taskTitle.style.background = 'red';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';

// // change content
// taskTitle.style.textContent = 'Task list';
// taskTitle.style.innerText = 'My task';
// taskTitle.style.innerHTML = '<span style="color: blue">Task List...</span>';


// document.querySelector('li').style.color = `red`;
// document.querySelector('ul li').style.color = `green`;

// document.querySelector('li:last-child').style.color ='red';
// document.querySelector('li:nth-child(3)').style.color ='yellow';
// document.querySelector('li:nth-child(odd)').style.color ='green';

// const clearBtn = document.querySelector('.clear-task');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// //Click
// card.addEventListener('mousemove', runEvent);


// function runEvent(e) {
//     console.log(`EVENT TYPE: ${e.type}`);
//     heading.textContent = `MouseX: ${e.offsetX} Mouse: ${e.offsetX}`;

//     e.preventDefault();

//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX}, 40)`
// }
 
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('hs');
// const select = document.querySelector('select');

// // clear input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);


// taskInput.addEventListener('input', runEvent);
// select.addEventListener('change', runEvent);

// function runEvent(e) {
// console.log(`EVENT TYPE: ${e.type}`);

// console.log(e.target.value);

// heading.innerHTML = e.target.value;

// // Get input value
// console.log(taskInput.value);


//     // e.preventDefault();
// }

// EVENT BUBBLING

document.querySelector('.card-title').addEventListener('click', function(){
    console.log('card-title');
});

document.querySelector('.card-content').addEventListener('click', function(){
    console.log('card-title');
});

document.querySelector('.card').addEventListener('click', function(){
    console.log('card');
});
document.querySelector('.col').addEventListener('click', function(){
    console.log('.col');
});

// Event Deligation

const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
if(e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
    e.preventDefault();
}
}
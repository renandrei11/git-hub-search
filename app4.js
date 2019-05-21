// Person contructor
// function Person(name, age){
// this.name = 'bob';
// this.age = age;
// }


// const bob = new Person('bob');
// const john = new Person('John');

// console.log(bob);

// CONTRUCTOR AND THIS. KEYWORD
// Person constructor

// function Person(name,dob) {
//     this.name = name;
//     this.birthday = new Date(dob);
//     this.calculateAge = function() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// const bob = new Person('bob', '5-13-1983');
// console.log(bob.calculateAge());

// BUILD IN CONSTRUCTOR
// String

// const name1 = 'Jeff';
// const name2 = new String('Jeff');

// name2.foo = 'bar';

// console.log(name2);

// if(name2 === 'Jeff') {
//  console.log('Yes'); 
// } else{
//     console.log('No');
// }

// Number
// const num1 = 5;
// const num2 = new Number(5);

// console.log(num2);

// const bool1 = true;
// const bool2 = new Boolean(true);


// const getSum1 = function(x,y) {
//     return x + y;
// }

// const getSum2 = new Function('x','y', 'return 1 + 1');
// console.log(getSum2());

// Object 
// const john1 = {name: ' John'};
// const john2 = new Object ({name: ' John'});

// console.log(john2);

// Arrays
// const arr1 = [1,2,33,44];
// const arr2 = new Array(1,2,33,44);

// console.log(arr2);

// Prototype explained
// Object.prototype
// Person.prototype

// Person constructor
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = dob;
// }

// Person.prototype.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Get Full name
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// Person.prototype.getMaried = function (newLastName) {
//     this.lastName = newLastName;
// }

// const john = new Person('John','Doe','05-13-1983');
// const mary = new Person('Mary','Johnson','05-13-1980');

// console.log(mary);

// console.log(mary.getFullName());
// mary.getMaried('Smith');

// console.log(mary.getFullName());
// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));


// Prototype Inheritance
// Person constructor
// function Person(firstName, lastName){
// this.firstName = firstName;
// this.lastName = lastName;

// }

// Greeting
// Person.prototype.greeting = function () {
//         return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

// Customer constructor
// function Customer(firstName, lastName, phone, membership) {
//     Person.call(this, firstName, lastName);

//     this.phone = phone;
//     this.membership = membership;
// }

// Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// Create customer
// const customer1 = new Customer('Tom', 'Smith', '333-222-222', 'Standard');

// console.log(customer1);

// Customer greeting
// Customer.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// }

// console.log(customer1.greeting());

// Using object.create

// const personPrototype = {

//     greeting: function() {
//         return `Hello there ${this.firstName} ${this.lastName}`
//     },

//     getMarried: function(newLastName) {
//         this.lastName = newLastName;
//     }
// };

// const mary = Object.create(personPrototype);

// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarried('Thomson');

// console.log(mary.greeting());

// const bob = Object.create(personPrototype,{
//     firstName: {value: ' Bobby'},
//     lastName: {value: 'Ferer'},
//     age: {value: 26}
// });

// console.lol(bob);
// console.log(bob.greeting());

// ES6 Classes

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }
// greeting(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }

// calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// getMarried(newLastName) {
//     this.lastName = newLastName;
// }

// static addNumbers(x,y) {
//     return x + y;
// }

// }

// const mary = new Person('Mary', 'Willian', '05-13-1983');

// mary.getMarried('Thompson');

// console.log(mary);
// console.log(Person.addNumbers(1,2));

// Sub classes
// class Person {
//     constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     }

//     greeting() {
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     }

// }

// class Customer extends Person {
//     constructor(firstName, lastName, phone, membership) {
//         super(firstName, lastName);
//         this.phone = phone;
//         this.membership = membership;
//     }

//     static getMembershipCost() {
//         return 500;
//     }
// }


// const john = new Customer('John', 'Doe', '333-333-222', 'Standard');

// console.log(john.greeting());
// console.log(Customer.getMembershipCost());


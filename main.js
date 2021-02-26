//Variables
//Three ways to write variables, var, let, const. We ant to avoid using var since we have let and const
//Let allows you to change value while const doesn;t

//Data Types -> strings numbers boolean null undefined symbol

// const name = 'alex';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name); // string
// console.log(typeof age); //number
// console.log(typeof rating); //number
// console.log(typeof isCool); //boolean
// console.log(typeof x); //undefined
// console.log(typeof y); //undefined
// console.log(typeof z); //undefined



// //Concatenation
// const name = 'Alex'
// const age = 25;

// //Concatenation
// console.log('My name is' + name + 'and I am' + age);
// //Template String 
// console.log(`My name is ${name} and I am ${age}`);

// const hello = `My name is ${name} and I am ${age}`

// console.log(hello);


//String Properties and Methods

// const s = 'hello, world, testing, string, methods';
// //Properties do not have parenthsis. If it does it is considered a method
// //.length is a proprty
// //.length() would be considered a method
// console.log(s.length);
// //toUpperCase is a method. 
// //What is a method: Method is basically a function that is associated with an object
// console.log(s.toUpperCase());
// //
// console.log(s.substring(0,5).toUpperCase());

// //Split  a string into an array
// console.log(s.split(', '));


//Arrays - variables that hold multiple values
//New is a constructor
// const numbers = new Array(1,2,3,4,5);

// const fruits = ['apples', 'oranges', 'pears']
// //this is adding grapes to the array
// fruits[3] = 'grapes'
// //Arrays are zero based meaning that the first index of the array position will always be 0
// //Push adds an item to the end of the array
// fruits.push('mangos')
// //unshift adds and item to the beginning of the array
// fruits.unshift('strawberries')
// //pop removes the item from the end of the array
// fruits.pop()
// //to check if something is an array you can do this.
// console.log(Array.isArray(fruits));
// //indexOf allows you to get a certain value
// console.log(fruits.indexOf('oranges'));

// console.log(fruits);

// console.log(fruits[1]);


//Object Literals is just key value pairs
//importantt object notes
// const person = {
//     firstName: 'alex',
//     lastName: 'garcia',
//     age: 25,
//     hobbies: ['music', 'gaming', 'driving'],
//     address: { //you can make an object within an object
//         street: '22 elm street',
//         city: 'boston',
//         state: 'ma'
//     }

// }

// console.log(person);
// //to access a single value you use a dot notation by doing the following
// console.log(person.firstName, person.lastName);
// //If you want to select a specific an array in the hobbies key you need to do the following
// console.log(person.hobbies[1]);
// //If you want to access city in the address key you need to do the following
// console.log(person.address.city);
// //add properties
// person.email = 'agarcia@mail.com'
// //Array of objects
// const todos = [
//     {id:1,
//     text: 'take out trash',
//     isCompleted: true
// },
// {id:2,
//     text: 'meeting with boss',
//     isCompleted: true
// },
// {id:3,
//     text: 'taking a shower',
//     isCompleted: false
// },
// ]

// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos)
// console.log(todoJSON);


//For Loops

// for(let i = 0; i <= 10; i++){
//     console.log(`for loop number: ${i}`);
// }



//While Loops

// let i = 0;

// while (i < 10) {
//     console.log(`While loop number: ${i}`);
//     i++
// }

//Iterrate through an Array:
// for(let i = 0; i < todos.length; i++){
//     console.log(todos[i].text);
// }

// for(let todo of todos){
//     console.log(todo);
// }


//High order Array Methods, forEach, map, Filter


// todos.forEach(function(todo){
//     console.log(todo.text);
// })
// //map returns an array
// const todoText = todos.map(function(todo){
//     return todo.text
// })


//filter
// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true
// }).map(function (todo){
//     return todo.text
// })


// console.log(todoCompleted);


//Conditionals

// const x = 4;
// const y = 11;
// //double equal will not match the data types. It will match the value
// //TRiple equal will only match the data type
// if( x > 5 || y > 10) {
//     console.log('x is more than 5 or y is more than 10');
// } 


//ternary operator
// const  x = 10
// //? then 
// //: elese 
// const color = x > 10 ? 'red' : 'blue'

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break
//     case 'blue':
//         console.log('color is blue');
//         break
//     default: 
//         console.log('color is NOT red or blue');
//         break
// }


//functions

// function addNums (num1, num2) {
//     return num1 + num2
// }

// console.log(addNums(5,5));



//Object Oriented Programming

//constructor function
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }


// Person.prototype.getBirthYear = function () {
    
// }

// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
// }

//class

// class person {
//     constructor(firstName, lastName, dob) {//method
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
// }
//     getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   getFullName () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// //Instantiate Object
// const person1 = new person('John', 'Doe', '4-3-1980');
// const person2 = new person('alex', 'garcia', '6-6-1995');



//DOM




























































































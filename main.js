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

const person = {
    firstName: 'alex',
    lastName: 'garcia',
    age: 25,
    hobbies: ['music', 'gaming', 'driving'],
    address: { //you can make an object within an object
        street: '22 elm street',
        city: 'boston',
        state: 'ma'
    }

}

console.log(person);
//to access a single value you use a dot notation by doing the following
console.log(person.firstName, person.lastName);
//If you want to select a specific an array in the hobbies key you need to do the following
console.log(person.hobbies[1]);
//If you want to access city in the address key you need to do the following
console.log(person.address.city);


//Stopped at 32:52 in the video  https://www.youtube.com/watch?v=hdI2bqOjy3c&t=1s
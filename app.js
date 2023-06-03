// simple
var str='hello world'
console.log(str);

// operators
var age=20;
var age1='30';
var res=age==age1;
console.log(res);

//function
sayHello('ahmed')
function sayHello(name) {
    console.log('hello, ',name);
}

// anonymous function
var sayHello2= function (name) {
    console.log("hello, ",name);
}

sayHello2('zain');
// arrow function

var sayHello3=  (name) => {
    console.log("hello, ",name);
}
sayHello3('akbar')

// objects
var person={
    name:'ali',
    age:20,
    job:'student'
}

let obj = {"foo.Bar": 2}
obj["foo.Bar"] // valid syntax
// obj.foo.Bar //invalid syntax

// dot notation
console.log(person.name);
// bracket notation
console.log(person['age']);


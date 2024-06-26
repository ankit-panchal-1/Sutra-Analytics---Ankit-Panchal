let name = "bilal";
function greet() {
  
 console.log('Hello, my name is ' + this.name);
 }
 
 const person = {
 name: 'John',
 sayHello: greet
 };
 
 const anotherPerson = {
 name: 'Alice'
 };
 
 greet(); // Output: Hello, my name is undefined
 person.sayHello(); // Output: Hello, my name is John
 greet.call(anotherPerson); // Output: Hello, my name is Alice
 
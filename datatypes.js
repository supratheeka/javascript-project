//primitive data types in JavaScript
//number
let  num = 42;
console.log(num); 
let num2 = 3.14;
console.log(num2);
//string
let str = "Hello, World!";
console.log(str);
//boolean
let isTrue = true;
console.log(isTrue);
let isFalse = false;
console.log(isFalse);
//null
let emptyValue = null;
console.log(emptyValue);
//undefined
let notDefined; 
console.log(notDefined);
//symbol
let uniqueSymbol = Symbol('unique');
console.log(uniqueSymbol);
//bigint
let bigIntValue = BigInt(1234567890123456789012345678901234567890);
console.log(bigIntValue);
// non-primitive data types in JavaScript
//object
let person = {
    name: "srika",
    age: 24,
    isEmployed: true
};
console.log(person);
//array
let fruits = ["apple", "banana", "cherry"]; 
console.log(fruits);
//function
function greet() {
    console.log("Hello!");
}
greet(); 
//date
let currentDate = new Date();
console.log(currentDate);
//regular expression
let regex = /ab+c/;
console.log(regex);
//map
let myMap = new Map();
myMap.set('key1', 'value1');
console.log(myMap.get('key1'));
//set
let mySet = new Set();
mySet.add(1);
console.log(mySet.has(1)); // true
//weakmap
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, 'value');
console.log(weakMap.get(obj)); // 'value'
//weakset
let weakSet = new WeakSet();
let obj2 = {};
weakSet.add(obj2);
console.log(weakSet.has(obj2)); 


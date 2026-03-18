//ES6 Methods
//Arrow functions
const fuelConsumption = (fuel: number, distance: number): number => {
    return fuel / distance;
}
console.log("Fuel Consumption:", fuelConsumption(50, 500)); // Output: Fuel Consumption: 0.1
 
//Array find
const engineSize = [2.0, 1.8, 2.1, 3.0, 2.2, 1.4];
const bigEngines = engineSize.find(size => size >= 2.1); //Will return the first element that satisfies the condition
console.log("Big Engines:", bigEngines); // Output: Big Engines: 2.1

//Array find index
const bigEngineIndex = engineSize.findIndex(size => size >= 2.1); //Will return the index of the first element that satisfies the condition
console.log("Big Engine Index:", bigEngineIndex); // Output: Big Engine Index: 2

//Array includes
const hasRWD = ['BMW', 'Audi', 'Mercedes'].includes('BMW'); //Will return true if the element is in the array
console.log("Has RWD:", hasRWD); // Output: Has RWD: true

//Default parameters
const calculateConsumptionPer100km = (fuel: number, distance: number = 100): number => {
    return fuel / distance * 100;
}   
console.log("Calculate Consumption:", calculateConsumptionPer100km(50)); // Output: Calculate Consumption: 50

//Object keys and values
const car = {
    model: 'BMW',
    year: 2020, 
    isElectric: false
}
console.log("Car Keys:", Object.keys(car)); // Output: Car Keys: [ 'model', 'year', 'isElectric' ]
console.log("Car Values:", Object.values(car)); // Output: Car Values: [ 'BMW', 2020, false ]


//Map and Set
//Maps store values in key-value pairs, and we can have duplicate values but not duplicate keys
const carMap = new Map<string, number>();
carMap.set('BMW', 2020);
carMap.set('Audi', 2019);
console.log("Car Map:", carMap); // Output: Car Map: Map(2) { 'BMW' => 2020, 'Audi' => 2019 }
console.log(carMap.get('BMW')); // Output: 2020

//Sets store unique values, and we cannot have duplicate values in a set.
const carSet = new Set<string>();   
carSet.add('BMW');
carSet.add('Audi');
carSet.add('BMW'); // Will not be added because it's a set and it only allows unique values
console.log("Car Set:", carSet); // Output: Car Set: Set(2) { 'BMW', 'Audi' }
console.log(carSet.has('BMW')); // Output: true

//Difference between let, const and var

//Var
var carBrand = 'BMW';
//Var is either global scoped or function scoped
function varTest() {
    var carBrand = 'Audi';
    console.log("Inside varTest:", carBrand); // Output: Inside varTest: Audi\
    var x = 1;
}
varTest();
//console.log("x:", x); // Output: x: 1 // This will throw an error because x is function scoped and cannot be accessed outside the function
console.log("Outside varTest:", carBrand); // Output: Outside varTest: BMW


//Var can be redeclared and updated
var carBrand = 'Mercedes';
console.log("Redeclared var:", carBrand); // Output: Redeclared var: Mercedes
carBrand = 'Audi';
console.log("Updated var:", carBrand); // Output: Updated var: Audi

//Var hoisting
console.log("Hoisted var:", hoistedVar); // Output: Hoisted var: undefined // This will not throw an error because var is hoisted and initialized with undefined
var hoistedVar = 'I am hoisted';
console.log("Hoisted var after declaration:", hoistedVar); // Output: Hoisted var after declaration: I am hoisted

//Let
//Let is block scoped so
if (true) {
    let carSeries = '3 Series'; 
    console.log("Inside block:", carSeries); // Output: Inside block: 3 Series
}   
//console.log("Outside block:", carBrand); // Output: Outside block: 3 Series // This will throw an error because let is block scoped and cannot be accessed outside the block

//Let cannot be redeclared but can be updated
let engineModel = 'B58';
//let engineModel = 'N55'; // This will throw an error because let cannot be redeclared
engineModel = 'N55';
console.log("Updated enginemodel using let:", engineModel); // Output: Updated let: N55


//Let is not hoisted
//console.log("Hoisted let:", hoistedLet); // This will throw an error because let is not hoisted
let hoistedLet = 'I am not hoisted';
console.log("Hoisted let after declaration:", hoistedLet); // Output: Hoisted let after declaration: I am not hoisted


//Const
//Const is block scoped 
if (true) {
    const carType = 'Sedan';
    console.log("Inside block:", carType); // Output: Inside block: Sedan
}
//console.log("Outside block:", carType); // Output: Outside block: Sedan // This will throw an error because const is block scoped and cannot be accessed outside the block

//Const cannot be redeclared or updated
const carColor = 'Red';
//const carColor = 'Blue'; // This will throw an error because const cannot be redeclared
//carColor = 'Blue'; // This will throw an error because const cannot be updated
console.log("Const car color:", carColor); // Output: Const car color: Red

//Const is not hoisted
//console.log("Hoisted const:", hoistedConst); // This will throw an error because const is not hoisted
const hoistedConst = 'I am not hoisted';
console.log("Hoisted const after declaration:", hoistedConst); // Output: Hoisted const after declaration: I am not hoisted 








//Typescript Types and Interfaces

//Typescript Types
let carModel: string = 'BMW';
let year: number = 2020;
let isElectric: boolean = false;

//There are also other types like array, tuple,enum etc.
//Type alias is a way to connect a name to any type
type Car = {
    model: string;
    year: number;
    isElectric: boolean;
}
//or
type CarModel = string;

//Also, we can define a type with 2 or more types using union types
type CarModelOrYear = string | number;

//Typescript Interfaces
interface CarInterface {
    model: string;
    year: number;
    isElectric: boolean;
}

//For this type of example, we can use either type or interface
//A difference between type and interface is that when we need to define a primitive type
//we can only use type, not interface
type CarModelType = string;
//interface CarModelInterface = string; // This will throw an error because interfaces cannot be used to define primitive types 

//Another difference is that we can describe a value with multiple types using union type, but not with interface
type CarModelOrYearType = string | number;
//interface CarModelOrYearInterface = string | number; // This will throw an error because interfaces cannot be used to define union types

//But we can define a union type with interface using union of interfaces
interface CarModelInterface {
    model: string;
}   
interface CarYearInterface {
    year: number;
}
type CarModelOrYearInterface = CarModelInterface | CarYearInterface; 

//Type vs Interface function example
type FuelConsumptionType = (fuel: number, distance: number) => number;
interface FuelConsumptionInterface {
    (fuel: number, distance: number): number;
}   
// Both need to explicit the parameters types but the difference is the syntax


//Interface declaration merging
interface CarInterface {
    color: string;
}
const myCar: CarInterface = {
    model: 'BMW',
    year: 2020,
    isElectric: false,
    color: 'red'
}
console.log("myCar:", myCar);


//Spread operator
const car1 = {
    model: 'BMW',
    year: 2020
}
const car2 = {
    color: 'red',
    isElectric: false
}
const mergedCar = {...car1, ...car2};
console.log("Merged Car:", mergedCar); // Output: Merged Car: { model: 'BMW', year: 2020, color: 'red', isElectric: false }

//Another example of spread operator with arrays
const carModels1 = ['BMW', 'Audi'];
const carModels2 = ['Mercedes', 'Tesla'];
const mergedCarModels = [...carModels1, ...carModels2];
console.log("Merged Car Models:", mergedCarModels); // Output: Merged Car Models: [ 'BMW', 'Audi', 'Mercedes', 'Tesla' ]

//Object in JavaScript
const carObject = {
    model: 'BMW',
    year: 2020,
    isElectric: false,
}

//Defining a object with a object constructor
const carObjectConstructor = new Object();
carObjectConstructor.model = 'Audi';
carObjectConstructor.year = 2019;
carObjectConstructor.isElectric = false;
console.log("Car made using object constructor: ", carObjectConstructor); // Output: Car Object: { model: 'BMW', year: 2020, isElectric: false }


//Itterating over an object
console.log("Iterating over carObject:");
for (const key in carObject) {
        console.log(`${key}: ${carObject[key]}`);  
}

//Also we can itterate using entries
console.log("Iterating over carObject using entries:");
for (const [key, value] of Object.entries(carObject)) {
    console.log(`${key}: ${value}`);
}

//Object deep copy
const carObjectCopy = JSON.parse(JSON.stringify(carObject));
console.log("Car Object Copy:", carObjectCopy); // Output: Car Object Copy: { model: 'BMW', year: 2020, isElectric: false }


//or

const carObjectCopy2 = structuredClone(carObject);
console.log("Car Object Copy 2:", carObjectCopy2); // Output: Car Object Copy 2: { model: 'BMW', year: 2020, isElectric: false }


//Arrays in JavaScript
const carArray = ['BMW', 'Audi', 'Mercedes'];



//Itterating over an array
console.log("Iterating over carArray:");
for (const car of carArray) {
    console.log(car);
}
//Itterating over an array using forEach
console.log("Iterating over carArray using forEach:");
carArray.forEach(car => console.log(car));  
//Itterating over an array using map
console.log("Iterating over carArray using map:");
carArray.map(car => console.log(car));  
//Iterating over an array using for loop
console.log("Iterating over carArray using for loop:");
for (let i = 0; i < carArray.length; i++) {
    console.log(carArray[i]);
}




//Accessor methods
console.log("First car:", carArray[0]); // Output: First car: BMW
console.log("Last car:", carArray[carArray.length - 1]); // Output: Last car: Mercedes

//Mutator methods
carArray.push('Tesla'); // Adds an element to the end of the array
console.log("After push:", carArray);
carArray.pop(); // Removes the last element of the array
console.log("After pop:", carArray);
carArray.unshift('Volkswagen'); 
console.log("After unshift:", carArray); // Adds an element to the beginning of the array
carArray.shift();
console.log("After shift:", carArray); // Removes the first element of the array
carArray.splice(1, 1); // Removes an element at a specific index, in this case it removes the element at index 1
console.log("After splice:", carArray); // Output: After splice: [ 'BMW', 'Mercedes' ]


//Javascript callbacks
function showCarSound(car:string, callback) {
    console.log(`${car} goes vroom!`);
    callback();
}
function popsAndBangs() {
    console.log("Popopop!");
}
showCarSound('BMW', popsAndBangs); // Output: BMW goes vroom! Popopop!

//This was a synchronous callback, but we can also have asynchronous callbacks
console.log("Engine is starting...");
function showCarSoundAsync(car:string, callback) {
    setTimeout(() => {
        console.log(`${car} goes vroom!`);
        callback();
    }, 1000);
}   
console.log("Engine is warming up...");
showCarSoundAsync('Audi', popsAndBangs); // Output after 1 second: Audi goes vroom! Popopop!


//Promises
const myPromise = new Promise((resolve, reject) => {

    const isCarWorking = true; // Change this to false to see the reject case
    if (isCarWorking) {
        resolve("The car is working!");
    }
    else {
        reject("The car is not working!");
    }
});

myPromise.then((message) => {
    console.log("Promise resolved:", message); // Output: Promise resolved: The car is working!
}).catch((error) => {
    console.log("Promise rejected:", error); // Output: Promise rejected: The car is not working!
});

//Async/Await

//For this exammple, i have use the REST Countries API to fetch data about a country and show async/await in action

async function fetchCountryData(country: string) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        const data = await response.json();
        console.log("Country Data:", data);
    } catch (error) {
        console.log("Error fetching country data:", error);
    }   
}
fetchCountryData('Germany'); // Output: Country Data: [ { name: { common: 'Germany', official: 'Federal Republic of Germany', nativeName: [Object] }, ... } ]

//CLosures
//I did not use explicitly closures in my past experience, so the concept is relatively new to me

function createCarCounter() {
    let count = 0;
    return function innerFunction() {
        count++;
        console.log(`Car count: ${count}`);
    }
}
//console.log(count); // This will throw an error because count is not defined in the global scope, it's only accessible inside the createCarCounter function
const carCounter = createCarCounter();
carCounter(); // Output: Car count: 1
carCounter(); // Output: Car count: 2
carCounter(); // Output: Car count: 3
carCounter(); // Output: Car count: 4


//In this case the closure is good for making a private variable that can only be accessed and modified by the inner function

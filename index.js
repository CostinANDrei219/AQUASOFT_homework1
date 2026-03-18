var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//ES6 Methods
//Arrow functions
var fuelConsumption = function (fuel, distance) {
    return fuel / distance;
};
console.log("Fuel Consumption:", fuelConsumption(50, 500)); // Output: Fuel Consumption: 0.1
//Array find
var engineSize = [2.0, 1.8, 2.1, 3.0, 2.2, 1.4];
var bigEngines = engineSize.find(function (size) { return size >= 2.1; }); //Will return the first element that satisfies the condition
console.log("Big Engines:", bigEngines); // Output: Big Engines: 2.1
//Array find index
var bigEngineIndex = engineSize.findIndex(function (size) { return size >= 2.1; }); //Will return the index of the first element that satisfies the condition
console.log("Big Engine Index:", bigEngineIndex); // Output: Big Engine Index: 2
//Array includes
var hasRWD = ['BMW', 'Audi', 'Mercedes'].includes('BMW'); //Will return true if the element is in the array
console.log("Has RWD:", hasRWD); // Output: Has RWD: true
//Default parameters
var calculateConsumptionPer100km = function (fuel, distance) {
    if (distance === void 0) { distance = 100; }
    return fuel / distance * 100;
};
console.log("Calculate Consumption:", calculateConsumptionPer100km(50)); // Output: Calculate Consumption: 50
//Object keys and values
var car = {
    model: 'BMW',
    year: 2020,
    isElectric: false
};
console.log("Car Keys:", Object.keys(car)); // Output: Car Keys: [ 'model', 'year', 'isElectric' ]
console.log("Car Values:", Object.values(car)); // Output: Car Values: [ 'BMW', 2020, false ]
//Map and Set
//Maps store values in key-value pairs, and we can have duplicate values but not duplicate keys
var carMap = new Map();
carMap.set('BMW', 2020);
carMap.set('Audi', 2019);
console.log("Car Map:", carMap); // Output: Car Map: Map(2) { 'BMW' => 2020, 'Audi' => 2019 }
console.log(carMap.get('BMW')); // Output: 2020
//Sets store unique values, and we cannot have duplicate values in a set.
var carSet = new Set();
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
    var carSeries = '3 Series';
    console.log("Inside block:", carSeries); // Output: Inside block: 3 Series
}
//console.log("Outside block:", carBrand); // Output: Outside block: 3 Series // This will throw an error because let is block scoped and cannot be accessed outside the block
//Let cannot be redeclared but can be updated
var engineModel = 'B58';
//let engineModel = 'N55'; // This will throw an error because let cannot be redeclared
engineModel = 'N55';
console.log("Updated enginemodel using let:", engineModel); // Output: Updated let: N55
//Let is not hoisted
//console.log("Hoisted let:", hoistedLet); // This will throw an error because let is not hoisted
var hoistedLet = 'I am not hoisted';
console.log("Hoisted let after declaration:", hoistedLet); // Output: Hoisted let after declaration: I am not hoisted
//Const
//Const is block scoped 
if (true) {
    var carType = 'Sedan';
    console.log("Inside block:", carType); // Output: Inside block: Sedan
}
//console.log("Outside block:", carType); // Output: Outside block: Sedan // This will throw an error because const is block scoped and cannot be accessed outside the block
//Const cannot be redeclared or updated
var carColor = 'Red';
//const carColor = 'Blue'; // This will throw an error because const cannot be redeclared
//carColor = 'Blue'; // This will throw an error because const cannot be updated
console.log("Const car color:", carColor); // Output: Const car color: Red
//Const is not hoisted
//console.log("Hoisted const:", hoistedConst); // This will throw an error because const is not hoisted
var hoistedConst = 'I am not hoisted';
console.log("Hoisted const after declaration:", hoistedConst); // Output: Hoisted const after declaration: I am not hoisted 
//Typescript Types and Interfaces
//Typescript Types
var carModel = 'BMW';
var year = 2020;
var isElectric = false;
var myCar = {
    model: 'BMW',
    year: 2020,
    isElectric: false,
    color: 'red'
};
console.log("myCar:", myCar);
//Spread operator
var car1 = {
    model: 'BMW',
    year: 2020
};
var car2 = {
    color: 'red',
    isElectric: false
};
var mergedCar = __assign(__assign({}, car1), car2);
console.log("Merged Car:", mergedCar); // Output: Merged Car: { model: 'BMW', year: 2020, color: 'red', isElectric: false }
//Another example of spread operator with arrays
var carModels1 = ['BMW', 'Audi'];
var carModels2 = ['Mercedes', 'Tesla'];
var mergedCarModels = __spreadArray(__spreadArray([], carModels1, true), carModels2, true);
console.log("Merged Car Models:", mergedCarModels); // Output: Merged Car Models: [ 'BMW', 'Audi', 'Mercedes', 'Tesla' ]

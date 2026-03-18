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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
//Object in JavaScript
var carObject = {
    model: 'BMW',
    year: 2020,
    isElectric: false,
};
//Defining a object with a object constructor
var carObjectConstructor = new Object();
carObjectConstructor.model = 'Audi';
carObjectConstructor.year = 2019;
carObjectConstructor.isElectric = false;
console.log("Car made using object constructor: ", carObjectConstructor); // Output: Car Object: { model: 'BMW', year: 2020, isElectric: false }
//Itterating over an object
console.log("Iterating over carObject:");
for (var key in carObject) {
    console.log("".concat(key, ": ").concat(carObject[key]));
}
//Also we can itterate using entries
console.log("Iterating over carObject using entries:");
for (var _i = 0, _a = Object.entries(carObject); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    console.log("".concat(key, ": ").concat(value));
}
//Object deep copy
var carObjectCopy = JSON.parse(JSON.stringify(carObject));
console.log("Car Object Copy:", carObjectCopy); // Output: Car Object Copy: { model: 'BMW', year: 2020, isElectric: false }
//or
var carObjectCopy2 = structuredClone(carObject);
console.log("Car Object Copy 2:", carObjectCopy2); // Output: Car Object Copy 2: { model: 'BMW', year: 2020, isElectric: false }
//Arrays in JavaScript
var carArray = ['BMW', 'Audi', 'Mercedes'];
//Itterating over an array
console.log("Iterating over carArray:");
for (var _c = 0, carArray_1 = carArray; _c < carArray_1.length; _c++) {
    var car_1 = carArray_1[_c];
    console.log(car_1);
}
//Itterating over an array using forEach
console.log("Iterating over carArray using forEach:");
carArray.forEach(function (car) { return console.log(car); });
//Itterating over an array using map
console.log("Iterating over carArray using map:");
carArray.map(function (car) { return console.log(car); });
//Iterating over an array using for loop
console.log("Iterating over carArray using for loop:");
for (var i = 0; i < carArray.length; i++) {
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
function showCarSound(car, callback) {
    console.log("".concat(car, " goes vroom!"));
    callback();
}
function popsAndBangs() {
    console.log("Popopop!");
}
showCarSound('BMW', popsAndBangs); // Output: BMW goes vroom! Popopop!
//This was a synchronous callback, but we can also have asynchronous callbacks
console.log("Engine is starting...");
function showCarSoundAsync(car, callback) {
    setTimeout(function () {
        console.log("".concat(car, " goes vroom!"));
        callback();
    }, 1000);
}
console.log("Engine is warming up...");
showCarSoundAsync('Audi', popsAndBangs); // Output after 1 second: Audi goes vroom! Popopop!
//Promises
var myPromise = new Promise(function (resolve, reject) {
    var isCarWorking = true; // Change this to false to see the reject case
    if (isCarWorking) {
        resolve("The car is working!");
    }
    else {
        reject("The car is not working!");
    }
});
myPromise.then(function (message) {
    console.log("Promise resolved:", message); // Output: Promise resolved: The car is working!
}).catch(function (error) {
    console.log("Promise rejected:", error); // Output: Promise rejected: The car is not working!
});
//Async/Await
//For this exammple, i have use the REST Countries API to fetch data about a country and show async/await in action
function fetchCountryData(country) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://restcountries.com/v3.1/name/".concat(country))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("Country Data:", data);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log("Error fetching country data:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchCountryData('Germany'); // Output: Country Data: [ { name: { common: 'Germany', official: 'Federal Republic of Germany', nativeName: [Object] }, ... } ]
//CLosures
//I did not use explicitly closures in my past experience, so the concept is relatively new to me
function createCarCounter() {
    var count = 0;
    return function innerFunction() {
        count++;
        console.log("Car count: ".concat(count));
    };
}
var carCounter = createCarCounter();
carCounter(); // Output: Car count: 1
carCounter(); // Output: Car count: 2
carCounter(); // Output: Car count: 3

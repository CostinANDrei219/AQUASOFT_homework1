//ES6 Methods
//




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

    
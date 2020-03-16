/*
TypeScript pros
1. Catch potential errors earlier in the development cycle.
2. Manage large codebases .
3. Easier refactoring.
4. Make it easier to work in teams — When contracts in the code are stronger it is easier for different developers to move in and out of the codebase without unintentionally breaking things.
5. Documentation — Types inform some sort of documentation that your future self and that other developers can follow.


TypeScript cons
1. It’s something additional to learn — It’s a tradeoff between short-term slowdown and long-term improvement in efficiency and maintenance.
2. Type errors can be inconsistent.
3. Configuration drastically changes its behaviour.
*/

//TYPES

//Boolean

const arrived: boolean = true;

//Number

const normalNumber: number = 8;
const decimalNumber: number = 8.0;
const binaryNumber: number = 0b110;

//String

const fruit: string = "apple"

//Array
//Array types can be written in on of the following ways:

//Most common
let classAges: number[] = [12, 13, 15, 11, 13, 15];
//less common. Uses generic types.
let classAges2: Array<number> = [12, 13, 15, 11, 13, 15];

//the type could be an arrays of :string[]

//Tuples
//Tuple types allow you to express an organised array where the type of a fixed number of elements is known. This means that you will get an error

let personalInfo: [string, number] = ['John', 954683];
//notice the next part and how it cant be done.. 
personalInfo = ['Ana', 842903, 'extra argument']  /* Error! Type '[string, number, string]' is not assignable to type '[string, number]'. */


//Any
// ':any' is compatible with any and all types in the type system, meaning that anything can be assigned to it and it can be assigned to anything. It gives you the power to opt-out of type checking.

let variable: any = 'a string';
variable = 5;
variable = false;
/* you can assign it with anything and will not give any compile errors*/


//Void
// ':void' is the absence of having any type at all. It is commonly used as the return type of a function that do not return a value.

function sayMyName(name: string): void {
    console.log(name);
}
  
sayMyName('Heisenberg');
//I love breaking bad

//Never
//The ':never' type represents the type of values that never occur. For instance, never is the return type of a function which will always throw an exception or not reach its end point.


// throws an exception
function error(message: string): never {
    throw new Error(message);
}
  
// unreachable end point
function continuousProcess(): never {
    while (true) {
        // ...
    }
}


//Null and Undefined
//Both undefined and null actually have their own types named undefinedand null, 
//respectively. Much like void, they’re not extremely useful on their own but they become useful when used within union types (more on that in a bit)

type someProp = string | null | undefined;


// Unknown
//TypeScript 3.0 introduces the unknown type which is the type-safe counterpart of any.
//Anything is assignable to unknown, but unknown isn’t assignable to anything but itself and any. 
//No operations are permitted on an unknown without first asserting or narrowing to a more specific type.

type I1 = unknown & null;    // null
type I2 = unknown & string;  // string
type U1 = unknown | null;    // unknown
type U2 = unknown | string;  // unknown


//Type Alias
//Type alias provides names for type annotations allowing you to use it in several places. They are created using the following syntax:

type Login = string;


//Union Type
//TypeScript allows us to use more than one data type for a property. This is called union type.

type Password = string | number;

//Intersection Type
//Intersection types are types that combine properties of all of the member types.

interface PersonalInfo {
    name: string;
    age: number;
}
  
interface WorkerID {
    companyId: string;
}
  
type Employee = PersonalInfo & WorkerID;
  
const bestOfTheMonth: Employee = {
    name: 'Peter',
    age: 39,
    companyId: '123456'
}
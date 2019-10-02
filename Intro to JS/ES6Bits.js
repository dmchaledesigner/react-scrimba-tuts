/* ==========================
SCrimba JS and some ES6 Bits
===========================*/



// let = use to change a value of an existing block
// const - cannot be be changed to another value. well get error.

/* var is deprecated, now we use 'let' and 'const'.
When we want to change the value of a var we use let, for keeping the same value we use const
eg: */

let = firstNname = "David"; /* Should we want to find out what kind of datatype a 'let' holds we use typeof() IE console.log(typeof(firstName) ); */
let = secondName = "Mchale";

const fullName = `$(firstname) $(secondName)`; // ES6 concatination, called String Interpolation

console.log(fullName); 







/* ================
String Methods
====================*/

.length() // calcalutes the amount of characters in a string
.trim()   // will trim off any empty spaces within a  string
.toUppercase() // will change string to uppercase characters
.toLowerCase() // will changne string to lowercase characters
.split() // will convert a string to an array depending on perameter passed ie console.log(`${firstName} ${secondName}`.split(' ')) will find empty space and break the string. 


//example

const myArray = `${firstName} ${secondName}`.split(' '));
// David Mchale
connsole.log(myArray[0]);
// David








/* ================
Arrow Functionns
====================*/

// Normal function

	function myFunctionName(){

			// do something
	}





// Arrow Function

	myFunctionName = () => {

			// do something
	}






// sets a functio to a variable

const myFunctionName = () => {
 
 		// do something
}










/* ================
Numbers and Operators
====================*/

let myNumber = 7.77
console.log(parsInt(number)); // will show whole number, same if the number was a string value.'7.77' will become 7.77 using parseInt ot parsrFloat
console.log(toFix(5)); // will add more decimals onto the variable: 7.77000


let myNumber2 = 7
console.log(type of myNumber2) // will show its actually a 'number'.




!== // not equal to
<= // less than or equal to
>= // greater than or equal to
% // returns remainder value
|| // or operator, ie if this OR that is equal to ...
&& // and operator, if this AND that is equal to ...



//incrementation

let example = 5;
//increment bfore the variable will start at 6
console.log(++example); 

//increment bfore the variable will start at 5
console.log(exmple++); 















/* ==============
Booleans
================== */




let example1 = false;  // false
let example2 = true;   // true
let example3 = null;   // false
let example4 = undefined; //false
let example5 = ''; // false, but if we add a space it becomes a string so it becomes true
let example6 = NaN; // nont a number is false
let example7 = -5; // true All positive and negative numbers are true
let example8 = 0; // zero is always false











/* ==============
Arrays
================== */

let myArray = [3, 7, 9, 3, 6, 4];


// array methods

mayArray[0] = 2 // will overwrite the first element of an array as arrays are indexed based. result: myArray = [2, 7, 9, 3, 6, 4];
myArray.push(5); // will add 5 to the array. Result myArray = [3, 7, 9, 3, 6, 4, 5];
myArray.pop(); // will remove the last element of an array. Result myArray = [3, 7, 9, 3, 6];


// concat()
let part1 = ["Cecilie", "Lone"];
let part2 = ["Emil", "Tobias", "Linus"];
let series = part1.concat(part2); // concate() will join a second array onto the first



// filter()
let ages = [32, 33, 16, 40]; // adults of various ges

function check(age){  // function called check to return an age if greater or equal to 18
	return age >= 18
}

console.log(ages.filter(check)) // print array.filter(functionName)



// find()

let ages = [32, 33, 16, 40]; // adults of various ges

function check(age){
	return age > 18

}

console.log(ages.find(check))





// foreach ...loop over an array
let example1 = [5, 7, 6, 8 , 9];

example1.forEach((element) => {
    console.log(element)
});





let ages = [32, 33, 16, 40];
ages.join();
console.log(ages) //returns the array as a string 2, 33, 16, 40



// spread operator [...array]

// if we have an array and assign it to another variable, then push an element, the output will assign it to the first array.
// with the spread operator, it creates a new array, therefore the second array is only affected. eg...

const myArray = [3, 5, 6, 8];
const anotherArray = [...myArray];
anotherArray.push(11)

//result
//myArray = [3, 5, 6, 8];
// anotherArray = [3, 5, 6, 8, 11];













/* ================
Objects
====================*/


let example1 = {
    firstName: 'Dylan',
    lastName: 'Israel',
    address: {
        city: 'Austin',
        state: 'Texas'
    },
    age: 30,
    cats: ['Milo', 'Tito', 'Achieles']
};


// check value of lastName
console.log(example1.lastName); // result = 'Israel'

// check city
console.log(exampl1.address.city) // result = 'Austin'

// check all keys
console.log(Object.keys(example1)); // result = All keys

// check all values
console.log(Object.values(example1)); // result = All values (parent only, not nested)

//check to see if a key exists
console.log(exmple1.hasOwnProperty('firstName')); // result = true, meaning it has.





//object assign (similar to spread in arrays)....passing values from one array to another by keeping the original untouched

let myObject = {
	firstName: 'David'
}

let mySecondObject = Object.assign({}, myObject);
mySecondObject.lastName = "Mchale";

console.log(myOhject); // David
console.log(mySecondObject); //David MxHale















/* ================
Conditionals
====================*/



















	
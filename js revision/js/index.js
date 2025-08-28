
const account_Id=144533; //! value locked value assign again will give error 
let accountEmail="hitesh@gmail.com"; 
var accountPassword="12345";
accountCity="jaipur";
console.table([accountEmail,accountPassword,account_Id]);
let is_logged=""; // if this string is empty this will give false as output for below console.log and if there is something in the string then it wil give some value

console.log(Boolean(is_logged));

let x=5;
let y=x++;
console.log((x++)+(++x));

//! datatypes and there types

//^ primitive- pass by value
//string , number, null,symbol,bool,BigInt,undefined
//^ non primitive- pass by reference
//function,object,array

//! static and dynamic langauges
// In statically typed languages, data types are checked at compile-time (before the code runs)
// int x = 5;     // `x` must always be an integer
// x = "hello"; // error 

// In dynamically typed languages, data types are checked at runtime (while the code runs).
// x = 5         # x is an integer now
// x = "hello"   # x becomes a string later — ✅ No error

//! NON PRIMITIVE DATATYPES
//object = can be represented in the form of key value pair 
// let obj={
//     name:"hitesh",
//     age:22,

// }
 // function stored in a variable 
const myFunction= function () {
    console.log("hello world");
    return 1;
}
console.log(myFunction()); // this will print the value returned by the function.


//!MEMORIES IN JAVA : STACK AND HEAP 
//All primitive types of datatypes use stack memory , in case of stack memory the copy of the variable is obtained whereas in case of heap the actual variable is passed 

let userOne="sahil";
let userTwo=userOne;
userTwo="yadav";
console.log(userTwo);
console.log(userOne); // here the value is pass by value because of stack memory hence userOne will have same value

let obj={
    name:"sahil",
    email:"yadavsahil2723@gmail.com"
}

let obj1=obj;

obj1.name="SAHIL";
console.log(obj.name); // here the value is pass by reference because of heap memory being used and hence obj.name also changed
console.log(obj1.name);


//! STRING IN JAVASCRIPT

const str="hello";
console.log(str);

const str1=new String("hello world"); // this is a string object 
console.log(str1);  
console.log(str1.toUpperCase());
// several string functions are there we can use them for different tasks

//! NUMBER AND MATHS 

const score=400;
console.log(score); 
console.log(typeof score);

const score1=new Number();
console.log(score1); // specified that this is a number object even without assigning any value to the score1

const hundreds=1000000;
console.log(hundreds.toLocaleString('en-IN')); // CONVERT TO INDIAN STYLE OF NAMING CURRENCY    
console.log(Math.min(3,1,5,7)); // this is used to calculate the minimum value 
console.log(Math.round(Math.random()*10));

//! DATE AND TIME IN JS

let date= new Date(); //DATE is a object in javascript
console.log(date);
let string=date.toISOString(date); // mainly this is used to split time and date 
console.log(string);    
let parts=string.split('T');
console.log(parts);
 
console.log(`this is date ${date.getTime()}`); //time at which obj
console.log(Date.now());
let newDate=new Date("2023-1-20"); //yyyy,mm,dd this is the format hence we can say that months start with 0
console.log(newDate.toDateString()); 
console.log(newDate.getTime());
console.log(Date.now());
console.log(newDate.getMonth());
console.log(newDate.getDay()); // this will give the index of day monday=1, tuedsay=2

//! arrays in js

const arr=[1,2,3,4,5,6]

const arr1= new Array(1,2,3,4,5); // this is a array object

console.log(arr);
console.log(typeof arr1);

//array methods

arr.push(4);
console.log(arr);
arr.unshift(10); // adds this number to the first of the array
console.log(arr);
arr.shift();
console.log(arr); // removes the first number of array or the first element

let value = new Number(10);
console.log(value);
let value1=value;
value1=5;
console.log(value); // here the value will still hold the same value because we are not changing any property of the object 

const newArr=[1,3,2,4,6];

const arr_1=newArr.join(); //& this converts the array into string 
console.log(typeof arr_1);

// splice and slice in array
const myn1=newArr.slice(1,3); // returns array starting from index 0 to index 2-1; slice(a,b) means starting from index a and going till index b-1
console.log(myn1);

// in case of splice the part of array is taken out of the array for example 

console.log(newArr);
const sp_arr=newArr.splice(1,3); // in case of splice it means remove eleent starting from index 1 till next 3 element 
console.log(sp_arr);
console.log(newArr);

//! array 2

const arr_a=['a','b','c'];
const arr_b=['d','e','f'];

console.log(arr_a.concat(arr_b)); // this will add up both the arr forming new array 
arr_a.push(arr_b); //! push uses same array to push but concat uses new array for storing addition of two arrays 
console.log(arr_a);

const marvel=["thor","captain","iron-man","hulk"];
const dc=["superman","dc","wonder-women"];

const new_team=[...marvel,...dc];
console.log(new_team);

const another_array=[1,2,3,[4,5],6,7,[8,[9,10]]];
const real_another_array=another_array.flat(Infinity); // this will convert above multi dimenstional array into a single dimensional array.
console.log(real_another_array);


const ob={
    name:"sahil",
    email:"sahil@gmail.com",
    place:"jabalpur"
    };
console.log(Array.from(  //! here in this case of object we need to mention that if we want array for the keys or for the values 
    Object.keys(ob)
));



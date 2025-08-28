function sahil(number) {
    console.log('hello world');
    
}

sahil();

function loggedIn(name){
    if(name===undefined){
        console.log("enter username")   
        return ;
    }
    return `${name} just logged in`;    

}

const value=loggedIn();
console.log(value);


//! function-part 2 advanced concepts

function calculateCartPrive (...params) { // by doing this it will return all the values in form of an array 
    return params
}

console.log(calculateCartPrive(2,4,5));


function calculatePrice(num1,num2,...params) {
    console.log(num1); // this will hold 1
    console.log(num2); // this will hold 2
    console.log(params); // this will hold an array of all other elements
}

calculatePrice(1,2,3,4,5,6);

const object={
    name:"sahil",
    age:23,
}

function handleObject(anyobject){
    console.log(anyobject.name);
    console.log(anyobject.age)
    return anyobject;
}

// handleObject(object);
console.log(handleObject(object));


//!GLOBAL AND LOCAL SCOPE IN JAVASCRIPT

console.log(addOne(3));
function addOne(num) {
    return num+1;
}

// console.log(newFunc(5)); // if we call the newFunc before initializing it then it would give error here
const newFunc= function (num) {
    return num+2;
}

console.log(newFunc(5)); // this will not give an error 
 
// newFunc(5);


//! THIS AND ARROW FUNCTION IN JS 

const coursePlan={
    name:"Sahil",
    course:"js",
    price:999,
    welcomeMessage: function (course) {
        console.log(`${this.course},welcome to course`); // this.course is used in case of objects only and not arrays
    }
}

coursePlan.welcomeMessage(sahil);


//^ implicit return 

const func=(num1,num2)=>(num1+num2); // no return statement is needed in this case 
console.log(func(1,2));

//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS 

(function chai() {
    console.log("DB connected"); // for one time setup or connection , it works on local scope  

})(); // this is a iife 

// chai();

(()=>{
    console.log("DB connected 2");
})();



// this is a iife using arrow function

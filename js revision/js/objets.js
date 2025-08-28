const sym=Symbol("new symbol");
const object={
    name:"sahil",
    "full place":"jabalpur",
    sym:"new key",
    "mail company":"sahil@gmailcom"
};

console.log(object["name"]);
console.log(object.name);
console.log(object["full place"]);
console.log(object["full place"]);
console.log(object["mail company"]); // this can not bewritten in form of object.mail company

//! creating a symbol and add it to the keys of the object 
 console.log(typeof sym);
 console.log(object.sym);

 //if we want the object to become immutable then we can use freeze method 
//  Object.freeze(object);

 object.name="yadav"; // despite this the object will not change and it will remain the same  if we freeze the onject 

 object.greetings= function () {
    console.log("hello everyone");
 }
 
 console.log(object.name);
 object.greetings();


 //! advanced concepts in objects of js 

 const tinderUser={}

 tinderUser.name="sahil"
 tinderUser.id="sahil123"
 tinderUser.is_logged=false

 console.log(tinderUser);

 //! nested object

 const regularUser={
    email:"some@gmail.com",
    fullname:{
        first:"sahil",
        last:"yadav"
    }
 }

 console.log(regularUser.fullname);


const obj1={
    1:"A", 
    2:"B",
}
const obj2={
    3:"c",
    4:"d",
}

const obj3={obj1,obj2};  // here the key becomes the name of the object itself

const obj4=Object.assign(obj1,obj2) // this will make an array without making two different objects 
console.log(obj3);
console.log(obj4);

 
let arr = [1, 2, 3, 4, 5];
let arr1 = [6, 7, 8, 9, 10];

const arr3=arr.concat(arr, arr1); // this will merge the two arrays into one array
console.log(arr3);



//! singleton object - created using construcor

const tinderUser1=new Object(); // singleton object

const tinderUser2={}; // this is not a singleton object

const x1={
    name:"sahil",
    age:23,
    isLoggedIn:true,
    lastLoginDays:[1,2,3,4,5],
    greet: function() {
        console.log("hello everyone from normal function");
    }
}

const x2={
    name:"yadav",
    age:23,
    isLoggedIn:true,
    lastLoginDays:[1,4,3,4,5],
    greet:() => {
        console.log("hello everyone from arrow function");
    }
}

console.log(Object.keys(x1)); // this will give the keys of the object in an array 
const x3=Object.assign({}, x1, x2); // this will merge the two objects into one object
console.log(x3);
// const x3= {...x1, ...x2}; // this will merge the two objects into one object
// console.log(x3);

console.log(x1.hasOwnProperty("name")); // this will check if the object has the property name or not
let myHeros = ["thor", "spiderman", "ironman", "captain"];

let strin="";
let heroPower = {
  thor: "hammer",
  spiderman: "web",
  ironman: "suit",
  captain: "shield",
  getSpiderPower: function () {
    console.log("spider power is", this.spiderman);
  },
};
// //!injecting a function inside this object
// heroPower.greet=function () {
//     console.log("hello world");
// }
console.log(heroPower.thor);

// heroPower.greet(); // calling the injected function

Object.prototype.hitesh = function () {
  console.log("this is a object");
};

//! strin.hitesh(); this will also work for string as well 
//! myHeros.hitesh(); the array also passes throught the object hence this hitesh is function of array as well as object 


//* if we create a function for an array 

Array.prototype.hitesh1 = function () {
  console.log(this) // this prints according to the call if we hace called myheros.hitesh1()
  console.log("this is a array");
};

// heroPower.hitesh1(); // this will surely give an error because this function is for array and it will not go up the line to object

myHeros.hitesh1();
// strin.hitesh1(); // this wll also given an error 

//


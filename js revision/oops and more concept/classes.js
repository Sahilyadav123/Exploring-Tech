class User {
  constructor(username,email,password) {
    console.log("user created");
    this.username=username;
    this.email=email;
    this.password= password;
    // this will get called automatically without any call as this is a constructor
  }

encryptPassword(){
  return `${this.password}abc`
}
}

const user = new User("chai","@gmail.com","12345")
// console.log(user);
console.log(user.encryptPassword())


//behind the scene of class implementation 

// function user(username,email,password) {
//     this.username=username;
//     this.email=email;
//     this.password= password;
//     }

//   user.prototype.encryptPassword=function(){  // this means that user has been injected with the encryptPassword function 
//     return `${this.password}abc`
  
// }

// const teacher=

// const descriptor=Object.getOwnPropertyDescriptor(Math,"PI") //! alos this can be used to get knowledge about any property
// console.log(descriptor) // ! here we see that writable and enumerable are kept as false 

// const str=Object.getOwnPropertyDescriptor(String.prototype,"length");
// console.log(str);


const name1={
    username:"sahil",
    email:"yadavsahil2723@gmail.com"
}

console.log(name1);


const desc=Object.getOwnPropertyDescriptor(name1,"username");
console.log(desc) // this will prin the value name holds and if it is inumerable 

//! we can distrupt the properties if we want this can be done by using same object

Object.defineProperty(name1,"username",{
    enumerable:false,
    writable:false
})

const desc1=Object.getOwnPropertyDescriptor(name1,"username");
console.log(desc1) // this will pr
console.log(name1)
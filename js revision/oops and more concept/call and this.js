// const { use } = require("react");

function setUser(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  this.email = email;
  this.password = password;
  setUser.call(this, username); // this is used to call this function
  //   console.log(username); // this is not called
}

const user1 = new createUser("sahil", "@gmail.com", "12345");
console.log(user1); //! doing this will not print the username part


function sayName() {
  console.log(this.name);
}

const obj = { name: "Sahil", speak: sayName };

obj.speak(); // "Sahil"  (called by obj → this = obj)
sayName();   // undefined or window.name (called alone → this = window/global)

const obj1 = {
  name: "Sahil",
  speak: () => {
    console.log(this.name);
  }
};

obj1.speak(); // undefined (this is from outside obj, probably window)
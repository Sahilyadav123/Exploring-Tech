const user = {
  username: "sahil",
  logincount: "8",
  signedIn: true,
  getUserDetails: function () {
    console.log("got user details from the database");
    console.log(this.username); // this is used for execution contect because username is out of function and out of this function it will be empty
  },
};

// user.getUserDetails()

//!constructor function

// const promise1=new Promise() // this new is called as constructor function
// const date=new Date();

function user1(username, logincount, signedIn) {
  this.username = username;
  this.logincount = logincount;
  this.signedIn = signedIn;

  return this;
}

const User1 = new user1("hitesh", 12, true);

const User2 = new user1("sahil", 10, false);
console.log(User1); //! if we don't use the new keyword for creating a object it will override the previously created object 
// console.log(User2);


function createUser(username,score) {
    this.username=username;
    this.score=score;
    
}

createUser.prototype.increment=function(){  //! for createUser to act as a object we are using pototype 
    this.score++;
}
createUser.prototype.printMe=function(){
    console.log(this.username,"has a score of",this.score);
}

const chai=new createUser("chai",100);
const coffee=new createUser("coffee",150);

chai.increment();
chai.printMe();
coffee.increment();
coffee.printMe();


//! conclusion-
//^ the conclusion is that if we want to add a function to a function outside of it we can do it by making the first function an object and for this second function whihc is to be added should be added just like object
//^ as we do in onject 
//* object.func=function(){}
//^ here we will do func1.prototype.func=function(){}
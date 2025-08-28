//~ lexical scope and closure in js 

//* lexical scope


function outer1(){
    let a =10;
    function inner() {  //lexical scope means even though the variable has been initialized outside the inner function can access it 
        console.log(a);
    }

    inner();
}

outer1();

//! closure 

function outer() {
    const name="sahil"
    function displayName() {
        console.log(name);
    }

    return displayName;
}

const func=outer(); // here it will get reference to the displayName

func(); // this will call the func value 



//control flow 

//!short hand notation 
// balance=600;

// if (balance>500) console.log(balance) // no scope need to be defined for thi

//!switch case - can we used when we have different role and they to need to be checked 
 
let val=2;

switch(val){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        //! if we will not put break statement it will execute all stement from this case   
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default: // this is executed if any other case is not exectured or condition not met
        console.log("any other months");
}


function getDashboardLink(userRole) {
  switch (userRole) {
    case 'admin':
      return '/admin/dashboard';
    case 'editor':
      return '/editor/posts';
    case 'viewer':
      return '/dashboard/view';
    default:
      return '/login';
  }
}
console.log(getDashboardLink('admin')); // Output: /admin/dashboard


//! truth and false values 

//~ FALSE
// false,0,-0,BigInt,0n,"",null,undefined

//~TRUE


const arr=[1,2,3,4,5];

if(arr.length===0){
    console.log("empty array");
}

const object={}

if(Object.keys(object).length===0){
    console.log("empty object")
}


//ternary operator

const price=10;

price>10 ? console.log('price is greater than 10') : console.log('price is less than or equal to 10');

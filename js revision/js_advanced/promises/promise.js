const promiseOne=new Promise((resolve,reject)=>{
    //! for db calls 
    //! cryptography
    setTimeout(() => {
        console.log("async task is complete");
        resolve(); // this connects the resolve and .then 
        //! this resolve runs only afte the promise part is executed
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function (resolve,reject) {
    setTimeout(function(){
        console.log("async task 2 is complete");
        resolve();
        
    }, 1000);
}).then(function(){
    console.log("promise 2 consumed");
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async task 3 is complete");
        resolve({
            name: "sahil",
            age: 20  // this is used to contain
        });
    }, 1000);
    
}).then((user)=>{
    console.log("promise 3 consumed");
    console.log(user);
    

})


const NewPromise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        const error=true;
        if(error){
            resolve({
                name: "sahil yadav",
                age: 20  // this is used to contain
            });
        }
        else{
            console.log("there is some error in the code");
            reject({
                error:"Something went wrong",
                status:404
            });
        }
    }, 1000);
})
.then((user)=>{
    console.log(user) 
    return user.name // if there is an error than this part will not executed
})
.then((username)=>{ // this username is actually the return value of upper . then
    console.log(username);
})
.catch((error)=>{
    console.log(error);
}).finally(()=>{ // this has to be executed at last and it will be executed everyt time 
    console.log("the promise is either resolved or rejected ")
})


const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=false;
        if(error){
            resolve({
                COURSE: "JAVASCRIPT COURSE",
                DATE: "08-08-2025"  // this is used to contain
            });
        }
        else{
            reject({
                error:"Something went wrong",
                status:404
            });
        }

    }, 2000);
})

//! other way of handling promises using async 

async function Promise5Consume() {
    try {
        const response= await promiseFive;
   console.log(response);
    } catch (error) {
        console.log(error);
    }
   
}

//! this will print undeined for now 
// Promise5Consume().then((res)=>{
//     console.log(res);
// });


//! written in try catch format if we want to write in the then catch format
// async function getAllUsers() {
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users');
//     const data=await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
    

// }

// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
    return res.json(); // this will return the resolve if the request is resolved and otherwise it will send reject
}).then((data)=>{
    console.log(data);

}).catch((err)=>{

})
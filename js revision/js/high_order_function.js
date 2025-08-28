//!higher order functions

const arr = [1, 2, 3, 4, 5];

//for of loop
for (const iterator of arr) {
  console.log(iterator);
}

//maps-it contains unique value

const map = new Map();
map.set("name", "sahil");
map.set("age", 23);

console.log(map);

const object = {
  name: "sahil",
  age: 23,
  email: "sahil@gmail.com",
};

for (const key in object) {
  //! this is a for in loop used mainly to iterate object for of cannot be used for this
  console.log(key, object[key]);
}

//! for of loop is used for map whereas for in loop is used for objects
console.log(map);

for (const i of map) {
  console.log(i); // this will represent everything in array format [ 'name', 'sahil' ]
}

const arr_x=[1,2,3,4,5];

for(const i in arr_x){ // in case of array prints keys and not values directly
    console.log(i);
}

// for(const [i,j] in map){  this is never possible 
//     console.log(i,j);
// }
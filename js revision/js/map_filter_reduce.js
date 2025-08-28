const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//! the differnce between foreach and filter is that filter returns a value and for each does not return any value

//^ basically filter is used to filter out the values from the actual arrray based on some condition
const arr = nums.filter((num) => num > 5); // this will give all element greater than 6
console.log(arr);

// this can also be written by using an explicit return type

const arr1 = nums.filter((num) => {
  return num > 4;
});

console.log(arr1);

//! Array of objects for filter, map, and reduce examples
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
  { title: "Book Ten", genre: "Fiction", publish: 1987, edition: 2006 },
];

const userBooks= books.filter((book)=>book.edition>2000)

console.log(userBooks); // this will print all the books with edition >2000 



//! MAP function in js

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

const arr2=myNumbers.map((num)=> (num+10)+1).filter((num)=>num>20); // this is called method chaining
// this will return a new array with each element increased by 10  
console.log(arr2); // this will print all the values of arr2 + 10

//! REDUCE METHOD IN JS 

//* reduce can be used for shopping cart mainly
const new_array=[1,2,3,4,5,6,7,8,9,10]

const initial_value=0;

const sum=new_array.reduce((accumulator,currentValue)=> accumulator+currentValue,10)

     // this 10 shows that what should be the start value of this accumulator  

console.log(sum);


const courses = [
  { id: 1, name: 'JavaScript Course', price: 2999 },
  { id: 2, name: 'Python Course', price: 999 },
  { id: 3, name: 'Mobile Dev Course', price: 5999 },
  { id: 4, name: 'Data Science Course', price: 12999 },
  { id: 5, name: 'Web Development Bootcamp', price: 14999 },
  { id: 6, name: 'UI/UX Design Course', price: 4999 },
  { id: 7, name: 'Cybersecurity Essentials', price: 7999 },
  { id: 8, name: 'Machine Learning A-Z', price: 11999 },
  { id: 9, name: 'Cloud Computing Basics', price: 3999 },
  { id: 10, name: 'Digital Marketing Masterclass', price: 1999 }
];


console.log(courses)

const total=courses.reduce((accumulator,courses)=> accumulator+courses.price,0);
console.log(total);

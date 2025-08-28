const course={
    courseName: "JavaScript Basics",
    courseCode: "JS101",
    duration: "4 weeks",
    instructor: "John Doe",
    studentsEnrolled: 150,
    topicsCovered: ["Variables", "Functions", "Objects", "Arrays"]
};

// course.instructor

const {instructor: instructorName}= course; // this is called object destructuring and same name of variable is used as key of the object
console.log(instructorName); // now we can use instructorName variable to access the value of instructor

//!API CONCEPTS

// {
//     "name": "Sahil",
//     "age": 25,
//     "courseName": "JavaScript Basics",
//     "isEnrolled": true,
//     "price": "free"
// } 


const arr=[1,2,3,4,5,6,7]

const arr2=arr.slice(1,5);
console.log(arr2);

const arr3=arr.splice(2,2);
console.log(arr3);
console.log(arr)

const string="hello,world"
console.log(string.split(","))

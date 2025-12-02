let x = "hello world";

console.log(x);
console.log(typeof(x));

// java is a dyanamic language - we can change type of variale as well as the value of the variable 


// REFERENCE TYPES - Objects , Arrays , Functions 

let students = {
   title : "class 10th",
   description : "science project" ,
   rating : 5
};

console.log(students)

// what if i just need to select the title only 

console.log(students.title);


// we have a differnence betwwen value types and reference types 

let a = "dev";
let b = a;

a = "aradhya";

console.log(a);
console.log(b);

// this is due to the pass by value that value of both the variable has not changed 


// now we will perform the change operation with the help of pass by reference 

let p = { name : "dev"}
let q = p;

p.name = "aradhya";

console.log(p);
console.log(q);// now we can see that both the values of variable p and q has been changed 


console.log(a);
console.log(b);

let courses = ['dsa','dbms'];

console.log(courses);

function createcourse(coursename){
    console.log('creating' + coursename)
}

createcourse

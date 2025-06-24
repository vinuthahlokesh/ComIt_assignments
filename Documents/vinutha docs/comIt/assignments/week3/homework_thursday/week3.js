const studentsArray = [ { name: "Alice", grade: 85 },
  { name: "Bob", grade: 58 },
  { name: "Charlie", grade: 95 },
  { name: "David", grade: 45 },
  { name: "Eva", grade: 72 }]

  //Task 1: 
studentsArray.forEach(student => {
    console.log(`Name: ${student.name}, Grade: ${student.grade}`);
});

// Task 2:
const passedStudents = studentsArray.filter(student => student.grade >= 60);
passedStudents.forEach(student => {
    console.log(`Passed Student: ${student.name}, Grade: ${student.grade}`);
});

// Task 3:
const averageGrade = studentsArray.reduce((total, student) => total + student.grade, 0) / studentsArray.length;
console.log(`Average Grade: ${averageGrade.toFixed(2)}`);   

// Task 4:  
studentsArray.forEach(student => {
    if (student.grade > 60) {
        console.log(`Student ${student.name} passed.`);
    }
    else{
        console.log(`Student ${student.name} failed.`);
    }
})

// Task 5:
studentsArray.forEach(student => {
    console.log(`${student.name}`)
})

//Bonus Task:
function findHighestGrade(student){
    let highest = -Infinity;
    for (let i = 0; i < student.length; i++) {
        if (student[i].grade > highest) {
            highest = student[i].grade;
        }
    }
    return highest;
}

const highestGrade = findHighestGrade(studentsArray);
console.log(`Highest Grade: ${highestGrade}`);

//Inplace Task 1
studentsArray.forEach(student => {
    student.status = student.grade >= 60 ? "Passed" : "Failed";
});
console.log(`Updated Students Array: ${JSON.stringify(studentsArray)}`);

//Inplace Task 2
studentsArray.forEach(student => {
    student.grade = Math.min(student.grade + 5, 100);
});
console.log(`"Grades after curving: ${JSON.stringify(studentsArray)}`);

//JavaScript Homework: Functions and Scope
//Task 1
function greetStudents(){
    console.log("Hello, Students!");
}
greetStudents();

//Task 2
function greetAll(name){
    console.log(`Hello, ${name}!`);
}
greetAll("Alice");
greetAll("Bob");    
greetAll("Charlie");

//Task 3
function findSquare(num) {
    return num*num;
}
const result = findSquare(5);
console.log(`Square of 5 is: ${result}`);

//Task 4
//Explanation:
/*- `globalVariable` is declared in the global scope, so it is accessible anywhere in the script.
- `localVariable` is declared inside the function, so it's only accessible within that function.
- Trying to access `localVariable` outside its function will throw a ReferenceError.
*/
let globalVariable = "Global Variable";
function demoFunction(){
    let localVariable = "Local Variable"
    console.log(localVariable);
    console.log(globalVariable);
}
demoFunction();

console.log(globalVariable);
// console.log(localVariable); // This will throw an error because localVariable is not defined outside

//Task 5
function demo1Function(callback){
     console.log("This is demo1 function which accepts another function as a parameter.");
}
function callback(){
    console.log("callback function was called.");
}
demo1Function(callback);

//Task 6
function arethamiticOperation(num1, num2, operation){
    switch(operation) {
        case 'add':
            return num1+num2;
        case 'subtract':
            return num1-num2;
        case 'multiply':
            return num1*num2;
    }
}
console.log(arethamiticOperation(10, 5, 'add'));        // Output: 15
console.log(arethamiticOperation(10, 5, 'subtract'));   // Output: 5
console.log(arethamiticOperation(10, 5, 'multiply'));  // Output: 50

//Task 7
let myAnonymousFunction = function(){
 console.log("Anonymous function executed");
}
myAnonymousFunction(); 

//Task 8
let myAnonymousFunction1 = () => {
    console.log("Arrow function executed");
}
myAnonymousFunction1();
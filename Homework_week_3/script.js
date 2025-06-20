//created a object person1 with properties name and age
let person1 = {name: "Alice", age: 25};
console.log(person1);

//created a new object person2 by copying properties from person1 using spread operator
let person2 = {...person1}
console.log(person2);
person2.favoriteColor = "blue";
console.log(person2);

function introduction(name, favoriteColor) {
    console.log(`Hello, my name is ${name} and my favorite color is ${favoriteColor}.`);
}

introduction("Alice", "blue");

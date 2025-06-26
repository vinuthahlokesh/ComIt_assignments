function createCounter(){
    let counter = 0;
    function increment() {
        counter++;
    }
    function decrement() {
        counter--;
    }

    function getCurrentCounter(){
        return counter;
    }

    return {
        increment: increment,
        decrement: decrement,
        getCurrentCounter: getCurrentCounter,
        currentCounter: counter // This will not update dynamically
    };
}
const counter = createCounter();
counter.increment();
//console.log(counter.getCurrentCounter()); // 1


//recursion
function countDown(startingcount){
    // Base condition to exit the recurssion
   // console.log(startingcount);
    if(startingcount <=0){
        return 0;
    }
    startingcount--;
    countDown(startingcount);
}
countDown(10); // 5, 4, 3, 2, 1, 0      

const user = {
    name: "John",
    greet: function()  {
        const myFunc = () => {
           // console.log(`Hello I am ${this.name}`);
            
    }
    myFunc()
}
}
user.greet(); // Hello I am undefined


class Parent {
    greet() {
       // console.log("Hello from Parent");
    }
}

class Child extends Parent {
    greet() {
        super.greet(); // Call the parent class method
        //console.log("Hello from Child");
    }
}
const child = new Child();
child.greet(); // Hello from Parent, Hello from Child

// function gen(){
//     yield 1;
//     yield 2;                
// }
// const generator = gen();
//console.log(generator.next()); 




// DOM manipulation with plain JS


//COMIT TODO
const dialog = document.getElementById("dialog");
const addTodoBtn = document.getElementById("showTodoFormBtn");
const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todoForm");
const closeBtn = document.getElementById("close")

addTodoBtn.addEventListener("click", () => {
dialog.showModal(); // Show the dialog
});

closeBtn.addEventListener("click", () => {
dialog.close(); // Show the dialog
});


todoForm.addEventListener("submit", (e) => {    
    e.preventDefault(); // Prevent the default form submission behavior
    const todoElement = document.getElementById("todo");
    const newTodo = document.createElement("li");
    const text = document.createElement("p");
    const timeStamp = document.createElement("p");
    const deleteBtn = document.createElement("button");

    text.textContent = todoElement.value; // Get the value from the input field

    timeStamp.textContent = new Date().toLocaleString(); // Get the current date and time
    deleteBtn.textContent = "Delete"; // Set the text for the delete button

    deleteBtn.addEventListener("click", () => {
        newTodo.remove(); // Remove the todo item when the delete button is clicked
    });

    newTodo.append(text, timeStamp, deleteBtn); // Append the text and timestamp to the new todo item
   // newTodo.textContent = todoElement.value; // Set the text content of the new todo item
    todoList.prepend(newTodo); // Add the new todo item to the top of the list

    todoElement.value = ""; // Clear the input field   
    dialog.close(); // Close the dialog after adding the todo 
});


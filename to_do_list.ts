#! usr/bin/env node

import inquirer from "inquirer"         //import inquirer

let todos : string[]  = [];             //Array


let makeTodo = await inquirer.prompt(       //Making list
    [
        {
            type: "input",
            name: "make",
            message: "First make your list of tasks (comma-separated) ",
        }
    ]);
    
if(makeTodo.make !== ''){
 todos.push (...makeTodo.make .split(','))
       
console.log("This is your list now choose option what you want")
console.log(todos)
}
   
while(true){                                         //use while loop  

let choose = await inquirer.prompt(                // select one option
    [
        {
            type:"list",
            name:"task",
            message:"select the option",
            choices: ["Add","update","view","deleate", "Exit"]
            
        }
    ])

if (choose.task === "Add"){                       //if choose "Add"
    let addTodo=await inquirer.prompt (
        [
            {
                type:"input",
                name:"todo",
                message:"Enter your task",
            }
        ]);

 if(addTodo.todo !== ' '){
    todos.push(...addTodo.todo.split(','));

console.log("Your Task is added");
console.log(todos); 
 }    
 else{
    console.log("Please add some thing");
 }   

              
}


if (choose.task == "update"){                         //if choose "update"
     let updateTodo = await inquirer .prompt(
         [
             {
                type: "list",
                name: "todo",
                message: "update item in the list",
                choices: todos.map(item  => item )
            }
        ]);


let addTodo=await inquirer.prompt (
    [
        {
            type:'input',
            name:'todo',
            message:'add item in the list',
        }
    ]);

  
let newTodo = todos.filter(val=>val !== updateTodo.todo );
todos = [...newTodo,addTodo.todo];
console.log(todos);}
                   
    

 
 if(choose.task =="view"){                          //if choose "view"
                              
    console.log("          <<<<<<TO Do List>>>>>");
    console.log(todos);
    console.log("             *****          ")
}


if (choose.task == "deleate"){                       //if choose "deleate"
let deleateTodo = await inquirer .prompt(
    [
        {
            type: "list",
            name: "todo",
            message: "update item in the list",
            choices: todos
        }
    ]);

let newTodo = todos.filter(val=>val !== deleateTodo.todo );
todos = [...newTodo];
console.log(newTodo);


}


if(choose.task === "Exit"){             //if choose "Exit"
    break
}

}   

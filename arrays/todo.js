

//challenge 1:
//create array with 5 todos
//you have x todos
//print the first and second to last items -> Todo:walk the dog


//console.log(`You have ${todos.length} todos`)
//console.log(`Todo: ${todos[0]}`)
//console.log(`Todo: ${todos[todos.length - 2]}`)


//challenge 2:
//delete the third item
//add a new item to the end
//remove the first item from the list

/*console.log(`You have ${todos.length} todos`)
console.log(todos)

todos.splice(2, 1)
todos.push('this is a new last task')
todos.shift()

console.log(`You have ${todos.length} todos`)
console.log(todos)

//challenge 3 

//print all the items:
    //1. the first item 
    //2.the second item 

todos.forEach(function(item, index){
    console.log(`${index + 1}. ${item}`)
})*/

//const todos = ['clean', 'cook','walk the dog', 'study', 'eat' ]



//Challenge:
    //1. convert array to array of objects -> text, completed property
    //2. create function to remove a todo by text value

/*

const todos=[{
    chore: 'clean',
    state: 'completed'
}, {
    chore: 'cook',
    state: 'incomplete'
}, {
    chore: 'walk the dog',
    state: 'completed'
}, {
    chore:'study',
    state: 'incomplete'
}, {
    chore: 'eat',
    state: 'incomplete'
}]


deleteTodo = function (todos, state){

    todos.forEach (function (todo, index){
        if(todo.chore.toLowerCase() === state.toLowerCase()){
            //console.log(index)
            todos.splice(index, 1)
        }
    })
}

deleteTodo(todos, 'WALK the DOG')
console.log(todos)

*/

//correção:
/*
const todos=[{
    chore: 'clean',
    completed: true
}, {
    chore: 'cook',
    completed: false
}, {
    chore: 'walk the dog',
    completed: true
}, {
    chore:'study',
    completed: false
}, {
    chore: 'eat',
    completed: true
}]

const deleteTodoSol= function(todos, todoText){
    const index=todos.findIndex(function(todo){
        return todo.text.toLowerCase()===todoText.toLowerCase()
    })
    if(index>-1){
        todos.splice(index,1)
    }
}

deleteTodoSol(todos, 'Clean')
console.log(todos)*/




//challenge: 

    //filtering: all thats completed

    const todos=[{
        chore: 'clean',
        completed: true
    }, {
        chore: 'cook',
        completed: false
    }, {
        chore: 'walk the dog',
        completed: true
    }, {
        chore:'study',
        completed: false
    }, {
        chore: 'eat',
        completed: true
    }]

const getThingsToDo = function(todos){
    return todos.filter(function(todo){
        const isCompleted= todo.completed === true
        return isCompleted
    })
}



console.log(getThingsToDo(todos))
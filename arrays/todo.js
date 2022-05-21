//challenge 1:
//create array with 5 todos
//you have x todos
//print the first and second to last items -> Todo:walk the dog

const todos = ['clean', 'cook','walk the dog', 'study', 'eat' ]

//console.log(`You have ${todos.length} todos`)
//console.log(`Todo: ${todos[0]}`)
//console.log(`Todo: ${todos[todos.length - 2]}`)

//challenge 2:

//delete the third item
//add a new item to the end
//remove the first item from the list


console.log(`You have ${todos.length} todos`)
console.log(todos)

todos.splice(2, 1)
todos.push('this is a new last task')
todos.shift()

console.log(`You have ${todos.length} todos`)
console.log(todos)

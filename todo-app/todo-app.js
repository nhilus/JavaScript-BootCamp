const todos=[{
    text: 'clean',
    completed: true
}, {
    text: 'cook',
    completed: false
}, {
    text: 'walk the dog',
    completed: true
}, {
    text:'study',
    completed: false
}, {
    text: 'eat',
    completed: true
}]


/*
const ps = document.querySelectorAll('p')
ps.forEach(function(p){
    if(p.textContent.includes('the')){
        p.remove();
    }
})*/
//challenge
//you have 2 todos left (p element)
//add a p for each todo above


const incompleteTodos = todos.filter(function (todo){
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.body.appendChild(summary)

todos.forEach(function (todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

//challenge: button, click listener

document.querySelector('#create-todo').addEventListener('click', (event)=>{
    console.log('adding a new todo')
    event.target.textContent = 'Im adding a new todo'
})

//challenge: id, classes and target unique elements


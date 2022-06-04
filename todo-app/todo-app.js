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




const filters = {
    searchFilter: ''
}

const renderTodos=function(todos, filters) {
    const filteredTodos = todos.filter((todo)=> {
       return todo.text.toLowerCase().includes(filters.searchFilter.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter((todo)=>{
        return !todo.completed
    })

    document.querySelector('#todo-list').innerHTML=''
    
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todo-list').appendChild(summary)
    
    document.querySelector('#todo-list').innerHTML = ''

    filteredTodos.forEach((todo)=>{
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todo-list').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#create-todo').addEventListener('click', (e)=>{
    console.log('adding a new todo')
    e.target.textContent = 'Im adding a new todo'
})

document.querySelector('#new-todo').addEventListener('input', (e)=>{
    console.log(e.target.value)
})

document.querySelector('#search-todo').addEventListener('input', (e)=>{
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
const notes = [{
    title: 'My next Trip',
    body: 'I would like to go to spain',
}, {
    title: 'Habits to work on',
    body: 'Exercise',
}, {
    title:'Office modification',
    body: 'Get a new seat'
}]
/*
//DOM - document object model

//query and remove
//const p = document.querySelector('p')

//p.remove()

//query all and remove

const ps = document.querySelectorAll('p')

ps.forEach(function(p){
    p.textContent = '***************'
    //console.log(p.textContent)
    //p.remove()
})

//add a new element

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)


*/



const filters={
    searchText:''
}

const renderNotes=function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note){
        const noteEl= document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (event) =>{
    event.target.textContent = 'the button was clicked'
})
//
document.querySelector('#remove-all').addEventListener('click', (e) =>{
    document.querySelectorAll('.note').forEach( (note) =>{
        note.remove();
    });
})

document.querySelector('#search-text').addEventListener('input', (e)=>{
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})


//const notes = ['Note 1', 'Note 2', 'Note 3']

//end of array
//console.log(notes.pop())
//notes.push('My new note')

//begining of array
//console.log(notes.shift())
//notes.unshift('My first note')

//middle of array
//notes.splice(1, 1)
//notes.splice(1, 1, 'This is my new second item')

//notes[2] = 'This is the new note 3'

//console.log(notes.length)
//console.log(notes)

//looping of array
//notes.forEach(function(item, index){
    //console.log(index)
    //console.log(item)
//})

//let someObj= {};
//let otherObj= someObj;
//console.log(someObj===otherObj)

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

const findNote = function (notes, noteTitle){
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    
}

const note = findNote(notes, 'Office modification')
console.log(note)

//const index = notes.findIndex(function(note, index){
    //console.log(note)
   // return note.title === 'Habits to work on'
//})

//console.log(index)

//filtering:


const findNotes = function(notes, query){
    return notes.filter(function(note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch 
    })
}

console.log(findNotes(notes, 'ne'))
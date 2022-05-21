const notes = ['Note 1', 'Note 2', 'Note 3']

//end of array

//console.log(notes.pop())
//notes.push('My new note')

//begining of array

//console.log(notes.shift())
//notes.unshift('My first note')

//middle of array

//notes.splice(1, 1)
//notes.splice(1, 1, 'This is my new second item')

notes[2] = 'This is the new note 3'

console.log(notes.length)
console.log(notes)

//looping of array
notes.forEach(function(item, index){
    console.log(index)
    console.log(item)
})


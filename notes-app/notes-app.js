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




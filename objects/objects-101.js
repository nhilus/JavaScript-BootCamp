let myBook = {
    title: '1984',
    author: 'george orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal farm'

console.log(`${myBook.title} by ${myBook.author}`)


//challenge

//name, age, location
//increase age by one and print again

let personOne={
    name: 'António Barbosa',
    age: 33,
    location: 'Paredes'
}

console.log(`My name is ${personOne.name}, my age is ${personOne.age} and i'm in ${personOne.location}`)

personOne.age +=1

console.log(`My name is ${personOne.name}, my age is ${personOne.age} and i'm in ${personOne.location}`)

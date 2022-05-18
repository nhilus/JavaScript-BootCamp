let myBook = {
    title: '1984',
    author: 'george orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary= function(book){
    //console.log(`${book.title} by ${book.author}`)
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//challenge:


let tempConversion = function (fahrenheit){
    
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32)*5/9,
        kelvin: (fahrenheit+459.67)*5/9
    }
}

let temps= tempConversion(65)

console.log(temps)
console.log(temps.celsius)
console.log(temps.kelvin)
console.log(temps.fahrenheit)
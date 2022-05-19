let num = 192.548

console.log(num.toFixed(3))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
//0 - 0.999999
console.log(randomNum)

//challenge:
//1-5, true if correct, false if not

let personsGuess = function(guess){
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    /*if(guess==randomNum){
        return true
    }else{
        return false
    }*/

    return guess === randomNum
}

console.log(personsGuess(2))

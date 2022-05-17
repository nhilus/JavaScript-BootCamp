


let name = 'Antonio'
let age = 22
console.log(`hey, my name is ${name}! i am ${age} years old`)


let getScoreText= function(name = 'John Doe', score = 0){
    return `Name: ${name} -- Score: ${score}`
}

let scoreText = getScoreText('António', 100)
console.log(scoreText)

//Challenge:

let getTip= function(total, percentTip = 0.2){
    let totalTip= total*percentTip
    return `Total: ${total}  -Tip: ${totalTip} `
}

let tipValue= getTip(500, 0.15)
console.log(tipValue)

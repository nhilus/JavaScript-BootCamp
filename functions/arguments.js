//multiple arguments

let add = function(a,b,c){
    return a + b + c
}

let result = add(10, 1, 5)

console.log(result)

//default arguments

let getScoreText= function(name = 'John Doe', score = 0){
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 100)
console.log(scoreText)

//challenge:

let getTip= function(total, percentTip = 0.2){
    let totalTip= total*percentTip
    return 'Total: ' + total + ' -Tip: ' + totalTip
}

let tipValue= getTip(500, 0.15)
console.log(tipValue)
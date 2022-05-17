//students score, total possible score
//15/20 - you got a C(75%)
//A-90-100, B- 80-89,C- 70-79, D- 60-69, F- 0-59


let scoreCalculator=function(a, b){
    let percentage= (a/b)*100

    if(percentage>=90){
        letterGrade= 'A'
    }else if(percentage>=80){
        letterGrade= 'B'
    }else if(percentage>=70){
        letterGrade= 'C'
    }else if(percentage>=60){
        letterGrade= 'D'
    }else if(percentage<=59){
        letterGrade= 'F'
    }

    return `You got an ${letterGrade} (${percentage}%)`
}


let studentFinalScore = scoreCalculator(155, 200)
console.log(studentFinalScore)



const person = {
    age:27
}

person.age = 28

console.log(person.age)

//challenge:

const scoreCalculator=function(a, b){
    const percentage= (a/b)*100
    let letterGrade = ''

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


const studentFinalScore = scoreCalculator(155, 200)
console.log(studentFinalScore)
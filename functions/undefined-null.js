//undefined - absence of value

let name


if (name === undefined){
    console.log('please provide a name')
}else{
    console.log(name)
}

console.log(name)

//undefined for function arguments

let square = function(num){
    console.log(num)
}

let result = square()
console.log(result)//when result of function comes back as undefined(lack of return in function)

// null as assigned value

let age = 27
age = null

console.log(age)

//function - input(arguments),code, output(return value)

let greetUser = function(){
    console.log('welcome user')
}

greetUser()

let square = function(num){
    let result = num * num
    return result
}

 let value = square(3)
 let otherValue = square(10)

 console.log(value)
 console.log(otherValue)

 //challenge area: 

 let fahrenheitConverter= function(temp){
    let celsius = (temp - 32)*5/9
    return celsius
 }


 let fahrenheitToCelsius= fahrenheitConverter(50)

 console.log(fahrenheitToCelsius)
let name = ' Antonio Barbosa '

//length property

console.log(name.length)

console.log(name.toUpperCase())
console.log(name.toLowerCase())

let password = 'abc123password098'

console.log(password.includes('password'))

//trim method
console.log(name.trim())

//challenge
//isValidPassword
//length is more than 8, it doesnt contain the word password

let isValidPassword = function(password){
    if (password.includes('password')){
        return false
    }else if(password.length>8){
        return true
    }else{
        return false
    }

    //correction:
    /*if (password.length>8 && !password.includes('password'){
        return true
    }else {
        return false
    }
    
    return password.length>8 && !password.includes('password')
    
    
    
    */
}





console.log(isValidPassword('asdasd'))
console.log(isValidPassword('123ajshdg&%$321'))
console.log(isValidPassword('asdasd12password'))
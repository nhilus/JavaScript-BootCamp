let temp = 65

if (temp>=60 && temp<=90){
    console.log('it is pretty nice out')
}else if (temp<=0  || temp >= 120) {
    console.log('do not go outside')
}else{
    console.log('eh, do what you want')
}


//challenge area:

let isGuestOneVegan = true
let isGuestTwoVegan = false

if(isGuestTwoVegan && isGuestOneVegan){
    console.log('offer only vegan dishes')
}else if(isGuestTwoVegan || isGuestOneVegan){
    console.log('make sure to add some vegan options')
} else{
    console.log('offer anything on he menu')
}

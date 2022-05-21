let isAccLocked = true
let userRole = 'admin'


if (isAccLocked){
    console.log('account is locked')
}else if(userRole==='admin'){
    console.log('welcome admin')
}else {
    console.log('welcome')
}

//Challenge area: 

let temp=20

if (temp >=60){
    console.log('its too hot outside')
}else if(temp <=30){
    console.log('its freezing outside')
}else {
    console.log('its very nice outside')
}
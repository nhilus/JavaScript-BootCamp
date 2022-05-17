//global scope(convertFahrtoCels, tempOne, tempTwo)
    //local scope(farhenheit, celsius)
        //local scope (isFreezing)

let fahrenheitConverter= function(temp){
    let celsius = (temp - 32)*5/9
    
    if (celsius==0){
        let isFreezing= true
    }

    return celsius
 }


 let tempOne= fahrenheitConverter(50)
 let tempTwo= fahrenheitConverter(50)
 console.log(tempOne)
 console.log(tempTwo)




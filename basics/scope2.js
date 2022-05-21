//variable shadowing example



let name = 'antonio'

if (true){
    let name= 'mike'
    if (true){
        //let name = 'jen'
        //console.log(name)
    }
}

if (true){
    console.log(name)
}
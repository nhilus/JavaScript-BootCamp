class Person {
    #name
    #age
    constructor(name, age) {
        this.#name = name
        this.#age = age
    }

    get name() {
        return this.#name
    }

    get age() {
        return this.#age
    }

    logName() {
        console.log(this.#name)
    }

    isUnderAge() {
        return this.age < 18
    }

    static orderListOfPersonsByAge(personsList) {
        return personsList.sort((person1, person2) => {
            return person1.age > person2.age ? 1 : person1.age < person2.age ? -1 : 0
        })//.reverse()
    }

    static orderListOfPersonsByName(personsList) {
        return personsList.sort(
            (person1, person2) => {
                return person1.name > person2.name ? 1 : person1.name < person2.name ? -1 : 0
            }
        )//.reverse()
    }

    static getRandomPersonFromListOfPersons(personsList) {
        return personsList[Math.floor(Math.random() * personsList.length)]
    }

    toString(){
        return `Name : ${this.name} ---- Age: ${this.age}`
    }
}


const peopleList=[
    new Person('Miguel', 30),
    new Person('Paulo', 10),
    new Person('Silva', 20),
    new Person('Ricardo', 23),
    new Person('João', 19),
    new Person('Oliveira', 18),
    new Person('Samanbaio', 17),
    new Person('Pedro', 93),
    new Person('Julio', 85),
    new Person('Afonso', 40),
    new Person('Texugo', 31),
]

const liElem= function(peopleList){
    const newPerson = document.createElement('li')
    newPerson.textContent = peopleList.toString()
    document.querySelector('ul').appendChild(newPerson)
}

peopleList.forEach(person =>liElem(person))

console.log(Person.orderListOfPersonsByName(peopleList))





Person.orderListOfPersonsByAge(peopleList)
console.log(peopleList);

Person.orderListOfPersonsByAge(peopleList).reverse()
console.log(peopleList);






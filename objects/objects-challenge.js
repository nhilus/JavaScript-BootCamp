let myAccount={
    name:'António Barbosa',
    expenses: 0,
    income:0
}

let addIncome = function(account, income){
    account.income += income
}

let addExpense = function(account, amount){
    account.expenses= account.expenses + amount
}

let resetAccount = function(account){
    account.expenses = 0
    account.income  = 0
}

let getAccountSummary = function(account){
    let balance = account.income - account.expenses
    //console.log(`Account for ${account.name} has ${account.balance}$, ${account.income}$ in income, ${account.expenses}$ in expenses`)
    return `Account for ${account.name} has ${balance}$, ${account.income}$ in income, ${account.expenses}$ in expenses`
}

addIncome(myAccount, 2000)

addExpense(myAccount, 100)
addExpense(myAccount, 50)

let accountSummary = getAccountSummary(myAccount)
console.log(accountSummary)

resetAccount(myAccount)

accountSummary = getAccountSummary(myAccount)
console.log(accountSummary)

//add income
//reset acount
//getAccountSummary
    //Account for antonio as $900, $ in income, $100 in expense

//addIncome
//addExpense
//addExpense
//getAccountSummary
//resetAccount 
//getAccountSummary



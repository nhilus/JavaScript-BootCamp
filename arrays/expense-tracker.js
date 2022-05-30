
//challenge: expense tracker

/*expense -> description, amount
  
addExpense -> description, amount
getAccountSummary -> total up all expenses -> Antonio has 1250$ in expenses

tweak getAccountSummary

antonio has a balance of 10. 100 in income, 90 in expenses

*/

const account = {
    name : 'António Barbosa',
    expenses: [],
    income: [],
    addExpense: function(description, amount){
        this.expenses.push({
            description:description,
            amount:amount,

        })
    },

    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount,
        })

    },
    getAccountSummary: function(){
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0
        this.expenses.forEach(function(expense){
            totalExpenses += expense.amount
        })

        this.income.forEach(function(income){
            totalIncome += income.amount
        })

        accountBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of ${accountBalance}$, ${totalIncome}$ in income and ${totalExpenses}$ in expenses.`
    },

    
}






account.addExpense('Rent', 950)
account.addExpense('Coffee',2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())


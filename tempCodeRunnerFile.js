let appData = {
    budget: money,
    expenses: {}, 
    optionalExpenses: {}, 
    income: [],
    savings: true
};

function chooseOptExpenses() {

    for(i = 0; i < 3; i++) {
        let opt = prompt("Статья необязательных расходов?");
    
        if((typeof(opt)) === 'string' && (typeof(opt)) != null && opt != '') {
            appData.optionalExpenses = opt;
        } else {
            i--;
        }
        i++;
    }
}

chooseOptExpenses();
console.log(appData);
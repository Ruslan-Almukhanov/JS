let startBtn = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    
    expenses = document.getElementsByClassName('expenses-item'),

    buttonOne = document.getElementsByTagName('button')['0'],
    buttonTwo = document.getElementsByTagName('button')['1'],
    buttonThree = document.getElementsByTagName('button')['2'],

    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

    let money, time;
    buttonOne.disabled = true;
    buttonTwo.disabled = true;
    buttonThree.disabled = true;

    // start button
    startBtn.addEventListener('click',function(){
        
        buttonOne.disabled = false;
        buttonTwo.disabled = false;
        buttonThree.disabled = false;
        time = prompt("Введите дату в формате YYYY-MM-DD");
        money = +prompt("Ваш бюджет в месяц?");

        while( isNaN(money) || money == '' ||  money == null ) {
            money = +prompt("Ваш бюджет в месяц?");
        }

        appData.timeData = time;
        appData.budget = money;

        budgetValue.textContent = money.toFixed();

        dateYear = new Date(Date.parse(time)).getFullYear();
        dateMonth = new Date(Date.parse(time)).getMonth()+1;
        dateDay = new Date(Date.parse(time)).getDay();

        year.value = dateYear;
        month.value = dateMonth;
        day.value = dateDay;
        
    });

    // checkout of Expenses
    buttonOne.addEventListener('click',function() {
        let sum = 0;
        for(let i = 0; i < expenses.length; i++) {
            let a = expenses[i].value,
                b = expenses[++i].value;
        
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50  ) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
            sum += +b;
            expensesValue.textContent = sum;
        }
    });

    // checkout of optional expenses
    buttonTwo.addEventListener('click',function() {
        for(let i = 0; i < optionalExpenses.length; i++) {
            let opt = optionalExpenses[i].value;
        
            if((typeof(opt)) === 'string' && (typeof(opt)) != null && opt != '') {
                appData.optionalExpenses[i] = opt;
            } else {
                i--;
            }

            optionalExpensesValue.textContent += appData.optionalExpenses[i] += ' ';
        }
    });

    // check budjet per day
    buttonThree.addEventListener('click',function() {
        if ( appData.budget != undefined && expensesValue != '' ) {
            let sumExpenses = 0;
            for (let item in appData.expenses) {
                sumExpenses += +appData.expenses[item];
            }

            appData.moneyPerDay = ((appData.budget - sumExpenses) / 30).toFixed();
            dayBudgetValue.textContent = appData.moneyPerDay;
            

            if ( appData.moneyPerDay < 100 ) {
                levelValue.textContent = 'Низкий уровень дохода';
            } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 200 ) {
                levelValue.textContent = 'Cредний уровень дохода';
            } else if ( appData.moneyPerDay > 200 ) {
                levelValue.textContent = 'Высокий уровень дохода';
            } else {
                levelValue.textContent = 'Произошла ошибка';
            }
        } else {
            dayBudgetValue.textContent = 'Произошла ошибка';
        }
    });

    
    // input income
    chooseIncome.addEventListener('input', function() {
        let items = chooseIncome.value;
            appData.income = items.split(',');
            incomeValue.textContent = appData.income;
    });

    //checkbox
    checkSavings.addEventListener('click', function() {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    //sum
    sumValue.addEventListener('input', function() {
        if (appData.savings == true) {
            let sum = +sumValue.value,
            percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    //percent
    percentValue.addEventListener('input', function() {
        if (appData.savings == true) {
            let sum = +sumValue.value,
            percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    

let appData = {
    budget: money,
    timeData: time,
    expenses: {}, 
    optionalExpenses: {}, 
    income: [],
    savings: false
};




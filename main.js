
"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет в месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while( isNaN(money) || money == '' ||  money == null ) {
        money = +prompt("Ваш бюджет в месяц?");
    }
}

start();

function detectDayBudget() {
    let day = money / 30; 
    alert("Ваш бюджет в день: " + day);
}

detectDayBudget();

let appData = {
    budget: money,
    expenses: {}, 
    optionalExpenses: {}, 
    income: [],
    savings: true
};

function chooseOptExpenses() {

    for(let i = 0; i < 3; i++) {
        let opt = prompt("Статья необязательных расходов?");
    
        if((typeof(opt)) === 'string' && (typeof(opt)) != null && opt != '') {
            appData.optionalExpenses[i] = opt;
        } else {
            i--;
        }
    }
}

chooseOptExpenses();

function chooseExpenses() {
    for(let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50  ) {
            appData.expenses[a] = b;
        } else {
            i--;
            
        }  
    }
}

chooseExpenses();

appData.moneyPerDay = +((appData.budget / 30).toFixed());

console.log(typeof(appData.moneyPerDay));

alert("Ежедневный бюджет: " + appData.moneyPerDay);

function detectLevel() {
    if ( appData.moneyPerDay < 100 ) {
        console.log("Низкий уровень дохода");
    } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 200 ) {
        console.log("Средний уровень дохода");
    } else if ( appData.moneyPerDay > 200 ) {
        console.log("Высокий уровень дохода");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("Какога сумма накоплений?"),
            percent = +prompt("Под какой процент ?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

console.log(appData);
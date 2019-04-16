
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

let appData = {
    budget: money,
    expenses: {}, 
    optionalExpenses: {}, 
    income: [],
    savings: true,
    chooseExpenses: function() {
        for(let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
        
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50  ) {
                appData.expenses[a] = b;
            } else {
                i--;
            }  
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function() {
        if ( appData.moneyPerDay < 100 ) {
            console.log("Низкий уровень дохода");
        } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 200 ) {
            console.log("Средний уровень дохода");
        } else if ( appData.moneyPerDay > 200 ) {
            console.log("Высокий уровень дохода");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if(appData.savings == true) {
            let save = +prompt("Какога сумма накоплений?"),
                percent = +prompt("Под какой процент ?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 0; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?");
        
            if((typeof(opt)) === 'string' && (typeof(opt)) != null && opt != '') {
                appData.optionalExpenses[i] = opt;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function() {
        for(let i = 0; i < 1; i++) {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую", "");
            if( typeof(items) === 'string' && items != '' && items != null ) {
                appData.income = items.split(',');
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
            } else {
                i--;
            }
        }

        let arr = [];
        appData.income.shift();
            appData.income.forEach(function(item, i, mass) {

                arr[i] = item;
                
            });
            arr.sort();
            alert("Способы дополнительного заработка:" + arr);
    }
};
let data = [];
let i;
for( let all in appData) {
    console.log("Наша программа включает в себя данные:" + all + " - " + appData[all]);
}

appData.moneyPerDay = +((appData.budget / 30).toFixed());

alert("Ежедневный бюджет: " + appData.moneyPerDay);

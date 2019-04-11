
"use strict";

let money = +prompt("Ваш бюджет в месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    expenses: {}, 
    optionalExpenses: {}, 
    income: [],
    savings: false
};

// for(let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?");

//     if (typeof(a) === 'String' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50  ) {
//         appData.expenses[a] = b;
//     } else {
        // num--;
//     }  
// };

// second cycle

// let num = 0;
// while( num < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     b = prompt("Во сколько обойдется?");

//     if (typeof(a) === 'String' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50  ) {
//         appData.expenses[a] = b;
//     } else {
            // num--;
//     }
//     num++;
// };

// third cycle
let num = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?");

    if (typeof(a) === 'String' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50  ) {
        appData.expenses[a] = b;
    } else {
        num--;
    }
    num++;
} while( num < 2 );

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if ( appData.moneyPerDay < 100 ) {
    console.log("Низкий уровень дохода");
} else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 200 ) {
    console.log("Средний уровень дохода");
} else if ( appData.moneyPerDay > 200 ) {
    console.log("Высокий уровень дохода");
} else {
    console.log("Произошла ошибка");
}
 
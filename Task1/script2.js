'use strict';

let money = prompt ("Ваш бюджет на месяц","");
let time = prompt ("Введите дату в формате YYYY-MM-DD","");
let appData = {
    Budget : money,
    timedata : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let question2 = prompt("Во сколько обойдется?");

appData.expenses.question1 = question2;


let question3 = prompt("Введите обязательную статью расходов в этом месяце");
let question4 = prompt("Во сколько обойдется?");

appData.expenses.question3 = question4;

alert("Ваш бюджет на один день " + 
(appData.Budget - appData.expenses.question1 - appData.expenses.question3)/30);
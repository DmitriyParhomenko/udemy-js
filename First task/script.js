var money = "Ваш бюджет на месяц?";
var time = "Введите дату в формате YYYY-MM-DD";

var appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
}

appData.budget = prompt(money);
appData.timeData = prompt(time);
appData.optionalExpenses.article = prompt('Введите обязательную статью расходов в этом месяце');
appData.optionalExpenses.howMany = prompt('Во сколько обойдется?');

alert("Ваш бюджет на 1 день равняется " + appData.budget / 30);

console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.optionalExpenses.article);
console.log(appData.optionalExpenses.howMany);

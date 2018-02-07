var EUR = 33.8565,
    USD = 27.4609;
var cEUR, cUSD, cUAH_EUR, cUAH_USD;

cEUR = Number(prompt("Input count of euros:"));
cUSD = Number(prompt("Input count of dollars:"));

cUAH_EUR = EUR * cEUR;
cUAH_USD = USD * cUSD;

console.log(cEUR + " euros are equal " + cUAH_EUR.toFixed(2) +
    " UAH, " + cUSD + " dollars are equal " +
    cUAH_USD.toFixed(2) + " UAH, one euro is equal " +
    (EUR / USD).toFixed(2) + " dollars.");
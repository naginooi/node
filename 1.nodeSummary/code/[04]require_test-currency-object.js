const currency = require('./[04]require_currency-object');

console.log('50 Canadian dollars equals this amount of US dollars:');
console.log(currency.canadianToUs(50));

console.log('30 Canadian dollars equals this amount of Canadian dollars:');
console.log(currency.usToCanadian(30));

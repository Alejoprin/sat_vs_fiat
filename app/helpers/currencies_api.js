// https://api.currencyfreaks.com/

const API_KEY = "6f1acee0ad3b420b99aa1719f47ccc71"; // inactivo hasta el 18-02
const API_KEY2 = "6b7d0209ce6441b2b4dc496cfe516d2f"; // inactivo hasta el 19-02
const API_KEY3 = "bb7325925bad4228ae008782930d9523"; // inactivo hasta el 12-03
const EXAMPLE = "PKR,GBP,EUR,USD";

const DOMAIN = "https://api.currencyfreaks.com/";
const COINS_SUPPORT = `${DOMAIN}supported-currencies`;
const COINS_SYMBOL = `${DOMAIN}currency-symbols`;
const LATES_CURRENCY_EXCHANGE_RATES = `${DOMAIN}latest?apikey=${API_KEY3}`;
const EXCHANGE_RATES_OFDESIRED_CURRENCIES = `${DOMAIN}latest?apikey=${API_KEY3}&symbols=${EXAMPLE}`;

export default {
  DOMAIN,
  COINS_SUPPORT,
  COINS_SYMBOL,
  LATES_CURRENCY_EXCHANGE_RATES,
  EXCHANGE_RATES_OFDESIRED_CURRENCIES,
};

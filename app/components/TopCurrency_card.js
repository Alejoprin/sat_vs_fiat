import api from "../helpers/currencies_api.js";
import { ajax } from "../helpers/ajax.js";

export function TopCurrencyCard(nation) {
  const $card = document.createElement("article");
  const $styles = document.getElementById("dynamic-styles");

  const css = `
    .top-currencyCard {
      display: grid;
      grid-template-columns: 1fr 90px;
      grid-template-rows: repeat(2, 1fr);
      justify-content: center;
      align-items: center;
      width: 130px;
      height: 80px;
      background-color: var(--rank-background);
      border-radius: 20px;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    }

    .top-currencyCard img {
      width: 23px;
      height: 23px;
      border-radius: 50px;
      margin: auto;
      margin-left: 14px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .top-currencyCard p:nth-child(2),
    .top-currencyCard p:nth-child(4) {
      color: var(--primary-text-color);
      font-size: var(--fontSize-small);
      font-weight: 500;
    }

    .top-currencyCard p:nth-child(3) {
      color: var(--secondary-text-color);
      font-size: var(--fontSize-verySmall);
      font-weight: 300;
      text-align: end;
    }

    .loadingCard {
      background: linear-gradient(90deg, rgba(247,147,26, 0.5), rgb(40, 41, 59));
      background-size: 400% 400%;
      animation: loadingAnimation 3s ease-in-out infinite;
    }

    @keyframes loadingAnimation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `;
  $styles.insertAdjacentHTML("beforeend", css);

  $card.className = "top-currencyCard loadingCard";

  let countryCode;
  let currencyCode;

  ajax({
    url: api.COINS_SUPPORT,
    cbSuccess: (data) => {
      data.find((coinData) => {
        if (coinData.countryName === nation) {
          countryCode = coinData.countryCode;
          currencyCode = coinData.currencyCode;
        }
      });

      ajax({
        url: api.LATES_CURRENCY_EXCHANGE_RATES,
        cbSuccess: (latestRatesData) => {
          const currenciesCodeInArray = Object.keys(latestRatesData.rates);
          const currencyCodeIndex = currenciesCodeInArray.findIndex(
            (code) => code === currencyCode
          );

          const btcCurrencyCodeIndex = currenciesCodeInArray.findIndex(
            (code) => code === "BTC"
          );

          const currenciesRateInArray = Object.values(latestRatesData.rates);

          const satoshiRate = currenciesRateInArray[btcCurrencyCodeIndex];

          const currencyVsSat = (
            currenciesRateInArray[currencyCodeIndex] /
            (satoshiRate * 100000000)
          ).toFixed(4);

          $card.innerHTML = `
            <img src="https://flagcdn.com/w20/${countryCode.toLowerCase()}.png" alt="${nation} flag image">
            <p>${nation}</p>
            <p>${currencyCode}</p>
            <p>${currencyVsSat}</p>
          `;

          $card.classList.remove("loadingCard");
        },
      });
    },
  });

  return $card;
}

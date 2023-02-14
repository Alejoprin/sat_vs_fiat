import api from "../helpers/currencies_api.js";
import { ajax } from "../helpers/ajax.js";

export default function SelectCountryOptions(props) {
  const $selectCountrySection = document.createElement("section");
  const $styles = document.getElementById("dynamic-styles");

  const css = `
    .country-options {
      position: absolute;
      top: 40px;
      bottom: 0;
      left: -150px;
      right: 0;
      width: 315px;
      height: 300px;
      background-color: var(--rank-background-header);
      border: thin solid var(--primary-text-color);
      border-radius: 10px;
      overflow-y: scroll;
    }

    .country-wrapper {
      padding: 8px 0;
      border-bottom: thin solid var(--primary-text-color);
    }

    .country-wrapper:hover {
      color: var(--btc-color);
      transition: color 0.4s ease;
    }

    .loadingOptions {
      background: linear-gradient(90deg, rgb(40, 41, 59), rgb(247,147,26));
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

  $selectCountrySection.className = `country-options none loadingOptions`;
  $selectCountrySection.id = `country-options`;
  const listCountry = [];
  const currenciesCodeInArray = Object.keys(props);
  const currenciesRateInArray = Object.values(props);
  const btcCurrencyCodeIndex = currenciesCodeInArray.findIndex(
    (code) => code === "BTC"
  );
  const satoshiRate = currenciesRateInArray[btcCurrencyCodeIndex];
  let currencyVsSat = 0;
  let countryCode;
  let countryName;

  ajax({
    url: api.COINS_SUPPORT,
    cbSuccess: (data) => {
      //console.log(data);

      data.forEach((coinData) => {
        if (
          coinData.countryCode != "Crypto" &&
          coinData.countryCode != "Metal" &&
          coinData.countryCode != null &&
          coinData.currencyCode != "CLF" &&
          coinData.currencyCode != "VEF" &&
          coinData.countryCode != "CFP" &&
          coinData.countryCode != "CFA" &&
          coinData.countryCode != "UK" &&
          coinData.status != "DEPRECIATED"
        ) {
          const $countryWrapper = document.createElement("div");

          /* when click each country in Select Country button */
          $countryWrapper.addEventListener("click", (e) => {
            const $converterInputSats = document.getElementById(
              "converter-input-sats"
            );
            $converterInputSats.value = 1;
            const $converterInputFiat = document.getElementById(
              "converter-input-fiat"
            );
            const currencyCodeIndex = currenciesCodeInArray.findIndex(
              (code) => code === coinData.currencyCode
            );

            const currencyCode = currenciesCodeInArray[currencyCodeIndex];
            const currencyRate = currenciesRateInArray[currencyCodeIndex];
            currencyVsSat = (currencyRate / (satoshiRate * 100000000)).toFixed(
              5
            );
            document.getElementById(
              "converter-wrapper--fiatTitle"
            ).textContent = currencyCode;
            document.getElementById(
              "converter-input-fiat-wrapper"
            ).lastElementChild.textContent = `.${currencyCode}`;

            //first conversion
            $converterInputFiat.value = currencyVsSat;

            countryCode = coinData.countryCode;
            countryName = coinData.countryName;
          });

          $countryWrapper.className = "country-wrapper";
          $countryWrapper.innerHTML = `
            <img src="https://flagcdn.com/w20/${
              coinData.countryCode.toLowerCase()
                ? coinData.countryCode.toLowerCase()
                : "un"
            }.png" alt="${coinData.countryName} flag image">
            <span>${coinData.countryName}</span>
          `;

          listCountry.push($countryWrapper);
        }
      });

      //sort countries to A to Z
      listCountry.sort((a, b) => {
        const countryA = a.lastElementChild.innerText.toLowerCase();
        const countryB = b.lastElementChild.innerText.toLowerCase();

        if (countryA < countryB) {
          return -1;
        }
        if (countryA > countryB) {
          return 1;
        }
        return 0;
      });

      //print countries
      listCountry.forEach((country) => {
        $selectCountrySection.appendChild(country);
      });

      $selectCountrySection.classList.remove("loadingOptions");

      // Print the flag in #flagAndSelectCountryBtn-wrapper
      (function existElement() {
        if (!document.getElementById("country-options")) {
          return setTimeout(existElement);
        }

        const $converterFiatFlag =
          document.getElementById("converter-fiatFlag");
        const $countryOptions = document.getElementById("country-options");

        $countryOptions.addEventListener("click", (e) => {
          if (
            e.target.matches(".country-wrapper > *") ||
            e.target.matches(".country-wrapper")
          ) {
            $converterFiatFlag.src = `https://flagcdn.com/w40/${
              countryCode.toLowerCase() ? countryCode.toLowerCase() : "un"
            }.png`;

            $converterFiatFlag.alt = `${countryName} flag`;

            $converterFiatFlag.style.visibility = "visible";
          }
        });
      })();

      // Result of sats * fiat OR fiat / sats
      const converterResult = () => {
        const $converterInputSats = document.getElementById(
          "converter-input-sats"
        );
        const $converterInputFiat = document.getElementById(
          "converter-input-fiat"
        );
        const $converterWrapperTitle = document.getElementById(
          "converter-wrapper-title"
        );

        if ($converterWrapperTitle.children[0].textContent === "Sats") {
          $converterInputSats.addEventListener("input", (e) => {
            $converterInputFiat.value = (
              e.target.value * currencyVsSat
            ).toFixed(5);
          });
        } else {
          $converterInputFiat.addEventListener("input", (e) => {
            $converterInputSats.value = (
              e.target.value / currencyVsSat
            ).toFixed(5);
          });
        }
      };
      converterResult();

      //Click on button .satFiat-change-btn and define the type of calculation
      (function existElement() {
        if (!document.getElementById("satFiat-change-btn")) {
          return setTimeout(existElement);
        }

        const $satFiatChangeBtn = document.getElementById("satFiat-change-btn");

        $satFiatChangeBtn.addEventListener("click", (e) => {
          converterResult();
        });
      })();
    },
  });

  return $selectCountrySection;
}

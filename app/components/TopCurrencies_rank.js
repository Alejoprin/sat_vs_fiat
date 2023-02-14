import api from "../helpers/currencies_api.js";
import { ajax } from "../helpers/ajax.js";

export function TopCurrenciesRank(props) {
  const $topCurrienciesRankWrapper = document.createElement("article");
  const $styles = document.getElementById("dynamic-styles");
  let allCountriesDataList;

  const css = `
    .topCurrienciesRank-wrapper {
      width: 100%;
      background-color: var(--rank-background-header);
      margin: 25px 0 0;
      border-radius: 20px;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    }

    .topCurrienciesRank-header {
      height: 40px;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      justify-content: center;
      align-items: center;
      border-bottom: thin solid var(--secondary-text-color);
      color: var(--primary-text-color);
      font-style: var(--fontSize-small);
      font-weight: 800;
    }

    .topCurrienciesRank-header span:nth-child(1) {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      border-right: thin solid var(--secondary-text-color);
    }

    .topCurrienciesRank-header span:nth-child(2) {
      grid-column: 2 / 6;
      padding-left: 10px;
    }

    .topCurrienciesRank-header span:nth-child(3) {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      grid-column: 6 / 8;
    }

    .topCurrienciesRank-header span:nth-child(4) {
      display: flex;
      justify-content: flex-end;
      padding-right: 5px;
      align-items: center;
      grid-column: 8 / 10;
    }

    .topCurrienciesRank-header svg {
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .countryInRank-wrapper {
      height: 40px;
      display: grid;
      justify-items: center;
      align-items: center;
      grid-template-columns: repeat(10, 1fr);
      background-color: var(--rank-background);
      color: var(--primary-text-color);
      font-style: var(--fontSize-verySmall);
      font-weight: 500;
    }

    .countryInRank-wrapper span:nth-child(1) {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      border-right: thin solid var(--secondary-text-color);
    }

    .countryInRank-wrapper img {
      width: 20px;
      height: 20px;
      grid-column: 2 / 3;
      border-radius: 50px;
      margin: auto;
      margin-left: 10px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    
    .countryInRank-wrapper span:nth-child(3) {
      width: 100%;
      margin-left: 5px;
      grid-column: 3 / 5;
    }
    
    .countryInRank-wrapper svg {
      width: 100%;
      height: 100%;
      margin: auto;
      grid-column: 5 / 6;
      cursor: pointer;
    }

    .countryInRank-wrapper span:nth-child(5) {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      grid-column: 7 / 8;
    }

    .countryInRank-wrapper span:nth-child(6) {
      display: flex;
      justify-content: center;
      width: 100%;
      grid-column: 8 / 11;
    }

    .rotateSortBtn {
      transition: all 0.3s ease;
      transform: rotate(180deg);
    }

    .loadingRank {
      background: linear-gradient(90deg, rgb(40, 41, 59), rgba(247,147,26, 0.5));
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

  $topCurrienciesRankWrapper.className =
    "topCurrienciesRank-wrapper loadingRank";
  $topCurrienciesRankWrapper.innerHTML = `
    <div class="topCurrienciesRank-header">
      <span>#</span>
      <span>Country</span>
      <span>Currency</span>
      <span>Sat / Fiat</span>
      <svg id="sort-btn" width="10" height="10" viewBox="0 0 10 10" fill="#f7931a" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.854167 3.16667L1.44792 2.58333L5.02083 6.15625L8.59375 2.58333L9.1875 3.16667L5.02083 7.33333L0.854167 3.16667Z" />
      </svg>
    </div>
  `;

  const listCountryInRank = [];
  const currenciesCodeInArray = Object.keys(props);
  const currenciesRateInArray = Object.values(props);
  const btcCurrencyCodeIndex = currenciesCodeInArray.findIndex(
    (code) => code === "BTC"
  );
  const satoshiRate = currenciesRateInArray[btcCurrencyCodeIndex];

  ajax({
    url: api.COINS_SUPPORT,
    cbSuccess: (data) => {
      allCountriesDataList = data;

      let positionRank = 1;

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
          const $countryInRankWrapper = document.createElement("div");

          const currencyCodeIndex = currenciesCodeInArray.findIndex(
            (code) => code === coinData.currencyCode
          );
          const currencyVsSat = (
            currenciesRateInArray[currencyCodeIndex] /
            (satoshiRate * 100000000)
          ).toFixed(5);

          $countryInRankWrapper.className = "countryInRank-wrapper";
          $countryInRankWrapper.innerHTML = `
            <span>${positionRank}</span>
            <img src="https://flagcdn.com/w20/${
              coinData.countryCode.toLowerCase()
                ? coinData.countryCode.toLowerCase()
                : "un"
            }.png" alt="${coinData.countryName} flag image">
            <span>${coinData.countryName}</span>
            <svg fill="#525674" id="favorite-btn" class="favorite-btn" xmlns="http://www.w3.org/2000/svg" viewBox="-40 -22 100 100" height="10" width="10" ><path d="m16.15 37.75 7.85-4.7 7.85 4.75-2.1-8.9 6.9-6-9.1-.8L24 13.7l-3.55 8.35-9.1.8 6.9 6ZM11.65 44l3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55ZM24 26.25Z" /></svg>
            <span>${coinData.currencyCode}</span>
            <span id="currencyVsSatRate">${currencyVsSat}</span>
          `;

          listCountryInRank.push($countryInRankWrapper);
          positionRank++;
        }
      });

      $topCurrienciesRankWrapper.classList.remove("loadingRank");
      $topCurrienciesRankWrapper.removeAttribute("style");

      // Order from lowest to highest data
      listCountryInRank.sort((a, b) => {
        return (
          parseFloat(a.lastElementChild.innerText) -
          parseFloat(b.lastElementChild.innerText)
        );
      });

      // Indexing and printing in the DOM
      listCountryInRank.forEach((country, index) => {
        country.firstElementChild.textContent = index + 1;
        $topCurrienciesRankWrapper.appendChild(country);
      });

      // quitar classlist
    },
  });

  // Ajust rank's height when first load
  (function ajustRankWrapperHeight() {
    if (!document.querySelector(".topCurrienciesRank-wrapper")) {
      return setTimeout(ajustRankWrapperHeight);
    }

    const $topCurrienciesRankWrapperPosition =
      $topCurrienciesRankWrapper.getBoundingClientRect();
    const $windowHeight = window.innerHeight;

    $topCurrienciesRankWrapper.style.height =
      $windowHeight - $topCurrienciesRankWrapperPosition.top - 55 + "px";
  })();

  // Sort button
  (function existsElement() {
    if (!document.getElementById("sort-btn")) {
      return setTimeout(existsElement);
    }
    // when element exists
    const $sortBtn = document.getElementById("sort-btn");

    $sortBtn.addEventListener("click", (e) => {
      const firstCurrencyRate = parseFloat(
        listCountryInRank[0].lastElementChild.textContent
      );
      const lastCurrencyRate = parseFloat(
        listCountryInRank[listCountryInRank.length - 1].lastElementChild
          .textContent
      );

      if (firstCurrencyRate < lastCurrencyRate) {
        // Order from highest to lowest data
        listCountryInRank.sort((a, b) => {
          return (
            parseFloat(b.lastElementChild.innerText) -
            parseFloat(a.lastElementChild.innerText)
          );
        });
      } else {
        // Order from lowest to highest data
        listCountryInRank.sort((a, b) => {
          return (
            parseFloat(a.lastElementChild.innerText) -
            parseFloat(b.lastElementChild.innerText)
          );
        });
      }

      const allCountryInRankWrapper = document.querySelectorAll(
        ".countryInRank-wrapper"
      );

      allCountryInRankWrapper.forEach((element) => element.remove());

      listCountryInRank.forEach((country, index) => {
        country.firstElementChild.textContent = index + 1;
        $topCurrienciesRankWrapper.appendChild(country);
      });

      $sortBtn.classList.toggle("rotateSortBtn");
    });
  })();

  let favoriteCountriesList = [];
  // Get favorite countries of localStorage and load in favoriteCountriesList
  if (localStorage.getItem("favoriteCountriesList")) {
    let favoriteCountriesListInLS = localStorage.getItem(
      "favoriteCountriesList"
    );

    favoriteCountriesListInLS = JSON.parse(favoriteCountriesListInLS);

    favoriteCountriesList.push(...favoriteCountriesListInLS);
  }

  // Favorite Country button
  (function existElementFavoriteCountry() {
    if (!document.getElementById("favorite-btn")) {
      return setTimeout(existElementFavoriteCountry);
    }

    $topCurrienciesRankWrapper.addEventListener("click", (e) => {
      if (
        e.target.matches(".favorite-btn") ||
        (e.target.matches("PATH") && e.target.hasAttribute("fill"))
      ) {
        const colorBtn = e.target.getAttribute("fill");

        if (colorBtn === "#525674") {
          // Add to favorite in LocalStorage
          e.target.setAttribute("fill", "#f7931a");
          const currencyCode = e.target.parentNode.children[4].textContent;

          const countryIndex = allCountriesDataList.findIndex(
            (data) => data.currencyCode === currencyCode
          );

          let favoriteCountry = {};

          favoriteCountry.countryCode =
            allCountriesDataList[countryIndex].countryCode;
          favoriteCountry.countryName =
            allCountriesDataList[countryIndex].countryName;
          favoriteCountry.currencyCode =
            allCountriesDataList[countryIndex].currencyCode;
          favoriteCountry.currencyName =
            allCountriesDataList[countryIndex].currencyName;
          favoriteCountry.rate = e.target.parentNode.children[5].textContent;

          favoriteCountriesList.push(favoriteCountry);

          let favoriteCountriesListLS = JSON.stringify(favoriteCountriesList);

          localStorage.setItem(
            "favoriteCountriesList",
            favoriteCountriesListLS
          );
        } else {
          // Remove to favorite in LocalStorage
          e.target.setAttribute("fill", "#525674");

          const currencyCode = e.target.parentNode.children[4].textContent;

          let favoriteCountriesListInLS = localStorage.getItem(
            "favoriteCountriesList"
          );

          favoriteCountriesListInLS = JSON.parse(favoriteCountriesListInLS);

          const countryIndexInLS = favoriteCountriesListInLS.findIndex(
            (country) => country.currencyCode === currencyCode
          );

          favoriteCountriesListInLS.splice(countryIndexInLS, 1);

          let favoriteCountriesListStringify = JSON.stringify(
            favoriteCountriesListInLS
          );

          localStorage.setItem(
            "favoriteCountriesList",
            favoriteCountriesListStringify
          );
          favoriteCountriesList = favoriteCountriesListInLS;
        }
      }
    });
  })();

  return $topCurrienciesRankWrapper;
}

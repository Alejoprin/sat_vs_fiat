import api from "../helpers/currencies_api.js";
import { ajax } from "../helpers/ajax.js";
import { BtcAndSatRate } from "./BtcAndSatRate.js";
import { Title } from "./Title.js";
import { SectionTopCurrenciesCards } from "./Section_TopCurrenciesCards.js";
import { SearchInput } from "./Search_input.js";
import { TopCurrenciesRank } from "./TopCurrencies_rank.js";
import { SatoshiArticle } from "./Satoshi_article.js";
import Converter from "./Converter.js";
import { FavoriteCountries } from "./Favorite_countries.js";
import Error from "./Error.js";

export async function Router() {
  const d = document;
  const $main = d.getElementById("main");

  let { hash } = location;

  console.log(`El hash: ${hash}`);

  $main.innerHTML = null;

  // HOME
  if (!hash || hash === "#/") {
    await ajax({
      url: api.LATES_CURRENCY_EXCHANGE_RATES,
      cbSuccess: (latestRatesData) => {
        $main.appendChild(BtcAndSatRate(latestRatesData.rates));
        $main.appendChild(Title());
        $main.appendChild(SectionTopCurrenciesCards());
        $main.appendChild(SearchInput());
        $main.appendChild(TopCurrenciesRank(latestRatesData.rates));
      },
    });

    // COUNTRIES
  } else if (hash === "#/countries") {
    $main.appendChild(FavoriteCountries());

    // SATOSHI
  } else if (hash === "#/satoshi") {
    $main.appendChild(SatoshiArticle());

    // CONVERTER
  } else if (hash === "#/converter") {
    await ajax({
      url: api.LATES_CURRENCY_EXCHANGE_RATES,
      cbSuccess: (latestRatesData) => {
        $main.appendChild(Converter(latestRatesData.rates));
      },
    });

    // Satoshi's Zone
  } else {
    $main.appendChild(Error());
  }
}

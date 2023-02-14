export function Main() {
  const $main = document.createElement("main");
  const $styles = document.getElementById("dynamic-styles");

  $main.id = "main";

  const css = `
    main {
      width: 100%;
      max-width: 60rem;
      margin: 0 auto;
      padding: 10px 30px;
    }
  `;
  $styles.insertAdjacentHTML("beforeend", css);

  (function existElements() {
    if (!document.querySelector(".countryInRank-wrapper")) {
      return setTimeout(existElements);
    }

    const $countryInRankWrappers = document.querySelectorAll(
      ".countryInRank-wrapper"
    );

    if (localStorage.getItem("favoriteCountriesList")) {
      let favoriteCountriesList;
      favoriteCountriesList = localStorage.getItem("favoriteCountriesList");
      favoriteCountriesList = JSON.parse(favoriteCountriesList);

      $countryInRankWrappers.forEach((country) => {
        favoriteCountriesList.forEach((favoriteCountry) => {
          if (
            country.children[4].textContent === favoriteCountry.currencyCode
          ) {
            country.children[3].setAttribute("fill", "#f7931a");
          }
        });
      });
    }
  })();

  return $main;
}

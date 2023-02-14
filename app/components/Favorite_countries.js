export function FavoriteCountries() {
  const $article = document.createElement("article");
  const $section = document.createElement("section");
  const $styles = document.getElementById("dynamic-styles");

  const css = `
   .favoriteCountry-title {
     color: var(--primary-text-color);
     font-size: var(--fontSize-medium);
     margin: 15px 0 30px;
     text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   }

   .noFavoritesInList-warning {
     color: var(--primary-text-color);
     font-size: var(--fontSize-verySmall);
     padding: 0 30px;
   }

   .favoriteCountries-wrapper {
    display: flex;
    flex-direction: column;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
   }

   .favoriteCountry-nav {
     width: 100%;
     display: flex;
     justify-content: space-around;
     align-items: center;
     flex-grow: 1;
   }

   .previousCountry-btn {
    transform: rotate(180deg);
   }

   .previousCountry-btn,
   .nextCountry-btn {
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
   }

   .previousCountry-btn:hover,
   .nextCountry-btn:hover {
     fill: #afadd0;
     transition: fill 0.3s ease;
   }

   .country-name {
     font-size: 1.8rem;
     font-weight: 600;
     color: var(--primary-text-color);
   }

   .favoriteCountry-info {
     width: 100%;
     display: flex;
     flex-direction: column;
     justify-content: space-evenly;
     align-items: center;
     flex-grow: 3;
   }

   .favoriteCountry-info > div{
     width: 24rem;
     display: flex;
     justify-content: space-between;
   }
   
   .favoriteCountry-info > div p:first-child {
     font-size: var(--fontSize-verySmall);
     color: var(--primary-text-color);
     font-weight: bold;
     text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
     text-align: start;
    }
    
    .favoriteCountry-info > div p:last-child {
     font-size: var(--fontSize-small);
     color: var(--btc-color);
     text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
     text-align: end;
   }

   main {
    padding: 10px 0 0;
   }
  `;
  $styles.insertAdjacentHTML("beforeend", css);

  $article.innerHTML = `
    <h2 class="favoriteCountry-title">Favorite Countries</h2>
  `;

  let indexFavoriteCountryToShow = 0;
  $section.className = "favoriteCountries-wrapper";
  $section.id = "favoriteCountries-wrapper";
  const favoriteCountriesListLS = JSON.parse(
    localStorage.getItem("favoriteCountriesList")
  );

  if (!favoriteCountriesListLS || favoriteCountriesListLS.length < 1) {
    $section.innerHTML = `
      <p class="noFavoritesInList-warning">Desde el ranking de la página principal debes agregar a favoritos "⭐" al menos 1 país para que se pueda mostrar información</p>
    `;
    $article.appendChild($section);
  } else {
    function showFavoriteCountryData(list, index) {
      $section.style.backgroundImage = `linear-gradient(180deg, var(--rank-background-header) 25%, rgba(0, 0, 0, 0) 180%), url('https://flagcdn.com/w640/${list[
        index
      ].countryCode.toLowerCase()}.png')`;
      $section.innerHTML = `
        <nav class="favoriteCountry-nav">
          <svg class="previousCountry-btn" fill="#525674" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"/></svg>
          <h3 class="country-name">${list[index].countryName}</h3>
          <svg class="nextCountry-btn" fill="#525674" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"/></svg>
        </nav>
        <div class="favoriteCountry-info">
          <div>
            <p>Country Code:</p>
            <p>${list[index].countryCode}</p>
          </div>
          <div>
            <p>Currency Code:</p>
            <p>${list[index].currencyCode}</p>
          </div>
          <div>
            <p>Currency Name:</p>
            <p>${list[index].currencyName}</p>
          </div>
          <div>
            <p>Sat / ${list[index].currencyCode}:</p>
            <p>${list[index].rate}</p>
          </div>
        </div>
      `;
    }
    showFavoriteCountryData(
      favoriteCountriesListLS,
      indexFavoriteCountryToShow
    );

    // show or not next and previous Btn
    function visibilityNextAndPreviousBtn() {
      if (!document.querySelector(".previousCountry-btn")) {
        return setTimeout(visibilityNextAndPreviousBtn);
      }

      if (indexFavoriteCountryToShow === 0) {
        document.querySelector(".previousCountry-btn").style.visibility =
          "hidden";
      }

      if (indexFavoriteCountryToShow >= favoriteCountriesListLS.length - 1) {
        document.querySelector(".nextCountry-btn").style.visibility = "hidden";
      }
    }
    visibilityNextAndPreviousBtn();

    $article.className = "favoriteCountry-article";
    $article.appendChild($section);

    // switch-next favorite country
    function existNextCountryBtn() {
      if (!document.querySelector(".nextCountry-btn")) {
        return setTimeout(existNextCountryBtn);
      }

      const $nextCountryBtn = document.querySelector(".nextCountry-btn");

      $nextCountryBtn.addEventListener("click", (e) => {
        $section.innerHTML = "";
        indexFavoriteCountryToShow++;
        showFavoriteCountryData(
          favoriteCountriesListLS,
          indexFavoriteCountryToShow
        );
        setTimeout(existNextCountryBtn);
        setTimeout(existPreviousCountryBtn);
        setTimeout(visibilityNextAndPreviousBtn);
      });
    }
    existNextCountryBtn();

    // switch-previous favorite country
    function existPreviousCountryBtn() {
      if (!document.querySelector(".previousCountry-btn")) {
        return setTimeout(existPreviousCountryBtn);
      }

      const $previousCountryBtn = document.querySelector(
        ".previousCountry-btn"
      );

      $previousCountryBtn.addEventListener("click", (e) => {
        $section.innerHTML = "";
        indexFavoriteCountryToShow--;
        showFavoriteCountryData(
          favoriteCountriesListLS,
          indexFavoriteCountryToShow
        );
        setTimeout(existNextCountryBtn);
        setTimeout(existPreviousCountryBtn);
        setTimeout(visibilityNextAndPreviousBtn);
      });
    }
    existPreviousCountryBtn();
  }

  // Ajust footer on bottom
  (function adjustFooter() {
    const $footer = document.querySelector(".footer");
    const $root = document.getElementById("root");
    const rootHeight = $root.offsetHeight;
    const windowHeight = window.innerHeight;

    if (rootHeight < windowHeight) {
      $footer.style.position = "fixed";
      $footer.style.bottom = "0";
      $footer.style.left = "50%";
      $footer.style.transform = "translateX(-50%)";
    }
  })();

  // Ajust .favoriteCountries-wrapper height
  (function existElement() {
    if (!document.getElementById("favoriteCountries-wrapper")) {
      return setTimeout(existElement);
    }

    const $favoriteCountriesWrapper = document.getElementById(
      "favoriteCountries-wrapper"
    );

    const $favoriteCountriesWrapperPosition =
      $favoriteCountriesWrapper.getBoundingClientRect();

    const $windowHeight = window.innerHeight;

    $favoriteCountriesWrapper.style.height =
      $windowHeight - $favoriteCountriesWrapperPosition.top - 1 + "px";
  })();

  return $article;
}

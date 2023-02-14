export function SearchInput() {
  const $form = document.createElement("form");
  const $input = document.createElement("input");
  const $styles = document.getElementById("dynamic-styles");

  const css = `
  .search-form {
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }

  .search-form input {
    width: 95%;
    height: 35px;
    border-radius: 50px;
    padding-left: 12px;
    background-color: transparent;
    border: thin solid var(--secondary-text-color);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: var(--primary-text-color);
  }
  `;
  $styles.insertAdjacentHTML("beforeend", css);

  $form.classList.add("search-form");
  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Search...";
  $input.autocomplete = "off";
  $form.appendChild($input);

  (function existsElement() {
    if (!document.querySelector(".countryInRank-wrapper")) {
      return setTimeout(existsElement);
    }
    // when element exists
    const allCountryInRankWrapper = document.querySelectorAll(
      ".countryInRank-wrapper"
    );

    $input.addEventListener("input", (e) => {
      let inputSearchValue = e.target.value.toLowerCase();

      allCountryInRankWrapper.forEach((countryInRank) => {
        const countryInRankName =
          countryInRank.children[2].textContent.toLowerCase();

        if (!countryInRankName.includes(inputSearchValue)) {
          countryInRank.classList.add("none");
        } else {
          countryInRank.classList.remove("none");
        }
      });

      // Ajust footer on bottom
      const $footer = document.querySelector(".footer");
      const $root = document.getElementById("root");
      const rootHeight = $root.offsetHeight;
      const windowHeight = window.innerHeight;

      if (rootHeight < windowHeight) {
        $footer.style.position = "fixed";
        $footer.style.bottom = "0";
        $footer.style.left = "50%";
        $footer.style.transform = "translateX(-50%)";
      } else {
        $footer.removeAttribute("style");
      }
    });
  })();

  return $form;
}

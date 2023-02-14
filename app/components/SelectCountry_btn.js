import SelectCountryOptions from "./SelectCountry_options.js";

export default function SelectCountryBtn(props) {
  const $selectCountryWrapper = document.createElement("button");
  const $styles = document.getElementById("dynamic-styles");

  const css = `
    .selectCountry-wrapper {
      position: relative;
      width: 15rem;
      height: 3rem;
      background-color: var(--rank-background-header);
      border: thin solid var(--primary-text-color);
      color: var(--primary-text-color);
      cursor: pointer;
      font-size: var(--fontSize-small);
      font-weight: 600;
      align-self: end;
      border-radius: 10px;
    }

  `;
  $styles.insertAdjacentHTML("beforeend", css);

  $selectCountryWrapper.id = "selectCountry-wrapper";
  $selectCountryWrapper.className = "selectCountry-wrapper";
  $selectCountryWrapper.textContent = "Select Country";

  $selectCountryWrapper.appendChild(SelectCountryOptions(props));

  (function existsElement() {
    if (!document.querySelector("#country-options")) {
      return setTimeout(existsElement);
    }
    //when element exists
    const $countryOptions = document.getElementById("country-options");

    const accion = () => $countryOptions.classList.toggle("none");

    $selectCountryWrapper.addEventListener("click", accion);

    document.addEventListener("click", (e) => {
      if (!e.target.matches(".selectCountry-wrapper")) {
        $countryOptions.classList.add("none");
      }
    });
  })();

  return $selectCountryWrapper;
}

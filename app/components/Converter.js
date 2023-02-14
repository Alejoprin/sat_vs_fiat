import SelectCountryBtn from "./SelectCountry_btn.js";

export default function Converter(props) {
  const $converterSection = document.createElement("section");
  const $styles = document.getElementById("dynamic-styles");

  const css = `
    .converter-title {
      color: var(--primary-text-color);
      font-size: var(--fontSize-medium);
      margin: 15px 0 30px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .converter-wrapper {
      width: 100%;
      height: 280px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      border-radius: 20px;
      background-color: var(--rank-background);
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
      margin-bottom: 20px;
    }

    .converter-wrapper h3 > *,
    .converter-wrapper h3 {
      font-size: var(--fontSize-small);
      color: var(--primary-text-color);
      font-weight: 500;
    }

    .converter-wrapper svg {
      cursor: pointer;
    }

    .flagAndSelectCountryBtn-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .converter-fiatFlag {
      width: 40px;
      height: 25px;
      border: thin solid var(--primary-text-color);
      filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.5));
    }

    .converter-input-wrapper {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .converter-input-wrapper input {
      background-color: var(--wildcard-color);
      border: none;
      padding: 8px;
      border-radius: 10px;
      color: var(--primary-text-color);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border: thin solid var(--primary-text-color);
    }

    .converter-input-wrapper span {
      color: var(--secondary-text-color);
      font-size: var(--fontSize-small);
      margin-left: 4px;
    }

    .converter-important {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .converter-important p {
      color: var(--primary-text-color);
      text-align: left;
      font-size: var(--fontSize-verySmall);
      margin-right: 1rem;
    }

    .converter-important p span {
      font-weight: 800;
    }

    .satFiat-change-btn:hover {
      filter: drop-shadow(0 0 0.3rem var(--btc-color));
      transition: filter 0.3s ease;
    }
  `;
  $styles.insertAdjacentHTML("beforeend", css);

  $converterSection.innerHTML = `
    <h2 class='converter-title'>Converter</h2>

    <div class="converter-wrapper">
      <div id="flagAndSelectCountryBtn-wrapper" class="flagAndSelectCountryBtn-wrapper">
        <img id="converter-fiatFlag" class="converter-fiatFlag" style="visibility: hidden;" src="" alt="">
      </div>

      <h3 id="converter-wrapper-title"><span id="converter-wrapper--satsTitle">Sats</span> a <span id="converter-wrapper--fiatTitle">Fiat</span></h3>

      <div class="converter-input-wrapper" id="converter-input-sats-wrapper">
        <input id="converter-input-sats" type="number" placeholder="satoshis" value="1"><span>.sats</span>
      </div>

      <svg id="satFiat-change-btn" class="satFiat-change-btn" xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="10 10 30 35" fill="#f7931a"><path d="M16.1 25.5V9.7l-6 6L8 13.6l9.65-9.65 9.65 9.65-2.1 2.1-6.1-6.05V25.5Zm14.25 18.45-9.65-9.7 2.1-2.05 6 6V22.4h3v15.85l6.1-6.05 2.1 2.1Z"/></svg>

      <div class="converter-input-wrapper" id="converter-input-fiat-wrapper">
        <input id="converter-input-fiat" type="number" placeholder="fiat" readonly = "readonly"><span>.fiat</span>
      </div>
    </div>

    <div class="converter-important">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="10 10 30 35"><path d="M24 42q-1.45 0-2.475-1.025Q20.5 39.95 20.5 38.5q0-1.45 1.025-2.475Q22.55 35 24 35q1.45 0 2.475 1.025Q27.5 37.05 27.5 38.5q0 1.45-1.025 2.475Q25.45 42 24 42Zm-3.5-12V6h7v24Z"/></svg>
      <p><span>Important:</span> The comma separates thousands and millions, and the period separates decimals.</p>
    </div>
  `;

  //Add SelectCountry_btn in .converter-wrapper
  (function existElement() {
    if (!document.getElementById("flagAndSelectCountryBtn-wrapper")) {
      return setTimeout(existElement);
    }

    const $flagAndSelectCountryBtnWrapper = document.getElementById(
      "flagAndSelectCountryBtn-wrapper"
    );

    $flagAndSelectCountryBtnWrapper.insertAdjacentElement(
      "beforeend",
      SelectCountryBtn(props)
    );
  })();

  //Change Sats - Fiat button
  (function existElement() {
    if (!document.getElementById("satFiat-change-btn")) {
      return setTimeout(existElement);
    }

    const $satFiatChangeBtn = document.getElementById("satFiat-change-btn");

    $satFiatChangeBtn.addEventListener("click", (e) => {
      const $converterWrapperTitle = document.getElementById(
        "converter-wrapper-title"
      );
      const $converterWrapperTitleSats = document.getElementById(
        "converter-wrapper--satsTitle"
      );
      const $converterWrapperTitleFiat = document.getElementById(
        "converter-wrapper--fiatTitle"
      );
      const $converterInputSatsWrapper = document.getElementById(
        "converter-input-sats-wrapper"
      );
      const $converterInputFiatWrapper = document.getElementById(
        "converter-input-fiat-wrapper"
      );

      const $converterWrapperTitleSatsClone =
        $converterWrapperTitleSats.cloneNode();
      $converterWrapperTitleSatsClone.textContent = "Sats";
      const $converterWrapperTitleFiatClone =
        $converterWrapperTitleFiat.cloneNode();
      $converterWrapperTitleFiatClone.textContent =
        $converterWrapperTitleFiat.textContent;
      const $converterInputSatsWrapperClone =
        $converterInputSatsWrapper.cloneNode(true);
      const $converterInputFiatWrapperClone =
        $converterInputFiatWrapper.cloneNode(true);

      if ($converterWrapperTitle.children[0].textContent === "Sats") {
        $converterWrapperTitle.firstElementChild.remove();
        $converterWrapperTitle.lastElementChild.remove();
        $converterInputSatsWrapper.remove();
        $converterInputFiatWrapper.remove();

        $converterWrapperTitle.insertAdjacentElement(
          "afterbegin",
          $converterWrapperTitleFiatClone
        );
        $converterWrapperTitle.insertAdjacentElement(
          "beforeend",
          $converterWrapperTitleSatsClone
        );

        $satFiatChangeBtn.insertAdjacentElement(
          "beforebegin",
          $converterInputFiatWrapperClone
        );
        $satFiatChangeBtn.insertAdjacentElement(
          "afterend",
          $converterInputSatsWrapperClone
        );

        $converterInputSatsWrapperClone.firstElementChild.setAttribute(
          "readonly",
          "readonly"
        );
        $converterInputFiatWrapperClone.firstElementChild.removeAttribute(
          "readonly"
        );
      } else {
        $converterWrapperTitle.firstElementChild.remove();
        $converterWrapperTitle.lastElementChild.remove();
        $converterInputSatsWrapper.remove();
        $converterInputFiatWrapper.remove();

        $converterWrapperTitle.insertAdjacentElement(
          "beforeend",
          $converterWrapperTitleFiatClone
        );
        $converterWrapperTitle.insertAdjacentElement(
          "afterbegin",
          $converterWrapperTitleSatsClone
        );

        $satFiatChangeBtn.insertAdjacentElement(
          "beforebegin",
          $converterInputSatsWrapperClone
        );
        $satFiatChangeBtn.insertAdjacentElement(
          "afterend",
          $converterInputFiatWrapperClone
        );

        $converterInputFiatWrapperClone.firstElementChild.setAttribute(
          "readonly",
          "readonly"
        );
        $converterInputSatsWrapperClone.firstElementChild.removeAttribute(
          "readonly"
        );
      }
    });
  })();

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

  return $converterSection;
}

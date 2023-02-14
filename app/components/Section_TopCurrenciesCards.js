import { TopCurrencyCard } from "./TopCurrency_card.js";

export function SectionTopCurrenciesCards() {
  const $section = document.createElement("section");
  const $styles = document.getElementById("dynamic-styles");

  const css = `
    .section-topCurrenciesCards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
    }

    .section-topCurrenciesCards article:nth-child(1) {
      grid-column: span 2;
      margin: 0 auto 15px;
    }

    .section-topCurrenciesCards article:nth-child(3) {
      justify-self: end;
    }
  `;
  $styles.insertAdjacentHTML("beforeend", css);

  $section.className = "section-topCurrenciesCards";
  $section.appendChild(TopCurrencyCard("Venezuela"));
  $section.appendChild(TopCurrencyCard("Colombia"));
  $section.appendChild(TopCurrencyCard("Mexico"));

  return $section;
}

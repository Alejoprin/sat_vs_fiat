export function BtcAndSatRate(props) {
  let { BTC } = props;
  const $btcAndSatRate = document.createElement("article");
  const $styles = document.getElementById("dynamic-styles");
  const satoshiRate = new Intl.NumberFormat("de-DE").format(
    Math.trunc(BTC * 100000000)
  );
  const btcRate = new Intl.NumberFormat("de-DE").format(
    Math.trunc((1 / satoshiRate) * 100000)
  );

  const css = `
    .btcAndSatRate-wrapper {
      display: flex;
      justify-content: space-evenly;
      width: 95%;
      height: 50px;
      background-color: var(--wildcard-color);
      border-radius: 50px;
      margin: 0 auto;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .btcAndSatRate-wrapper div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .btcAndSatRate-wrapper img {
      width: 28px;
      height: auto;
    }

    .btcAndSatRate-wrapper p {
      margin: 0 4px 0 8px;
    }

    .btcAndSatRate-wrapper p,
    .btcAndSatRate-wrapper span {
      color: var(--primary-text-color);
      font-size: var(--fontSize-verySmall);
      font-weight: 800;
    }
  `;
  $styles.insertAdjacentHTML("beforeend", css);

  $btcAndSatRate.className = "btcAndSatRate-wrapper";

  $btcAndSatRate.innerHTML = `
    <div class="btcRate-wrapper">
      <img src="https://alejoprin.github.io/sat_vs_fiat/assets/btc_icon.png" alt="bitcoin logo image">
      <p>${btcRate}</p>
      <span>$/BTC</span>
    </div>

    <div class="satRate-wrapper">
      <img src="https://alejoprin.github.io/sat_vs_fiat/assets/white_satoshi-symbol.svg" alt="satoshi logo image">
      <p>${satoshiRate}</p>
      <span>SAT/$</span>
    </div>

  `;

  return $btcAndSatRate;
}

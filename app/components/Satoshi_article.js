export function SatoshiArticle() {
  const $article = document.createElement("article");
  const $styles = document.getElementById("dynamic-styles");

  const css = `
    .satoshi-title {
      color: var(--primary-text-color);
      font-size: var(--fontSize-medium);
      margin: 15px 0 30px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .satoshi-title span {
      color: var(--btc-color);
    }

    .satoshi-article p {
      color: var(--primary-text-color);
      font-size: var(--fontSize-small);
      font-weight: 500;
      margin-bottom: 12px;
      line-height: 150%;
      text-align: justify;
    }

    .satoshi-converter {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      margin: 20px 0;
    }

    .satoshi-converter h3 {
      color: var(--primary-text-color);
      font-size: var(--fontSize-small);
      grid-column: span 3;
      margin-bottom: 15px;
      border-bottom: thin solid var(--primary-text-color);
    }

    .satoshi-converter--titleBtc {
      grid-column: 3 / 4;
    }

    .satoshi-converter span {
      color: var(--btc-color);
    }
  `;
  $styles.insertAdjacentHTML("beforeend", css);

  $article.className = "satoshi-article";

  $article.innerHTML = `
    <h2 class="satoshi-title">What are <span>Sats</span>?</h2>
    <p>“Sats,” which is shorthand for “satoshis” is a term used for the smallest possible denomination of BTC: 0.00000001 BTC, or 1 one-hundred-millionth of a bitcoin. The unit is named for the pseudonymous creator of Bitcoin, Satoshi Nakamoto.</p>

    <div class="satoshi-converter">
      <h3>Satoshi Converter</h3>
      <p>Satoshis</p><p class="satoshi-converter--titleBtc">BTC</p>
      <p>1</p><p>=</p><p>0.0000000<span>1</span> </p>
      <p>10</p><p>=</p><p>0.000000<span>10</span></p>
      <p>100</p><p>=</p><p>0.00000<span>100</span></p>
      <p>1,000</p><p>=</p><p>0.0000<span>1000</span></p>
      <p>10,000</p><p>=</p><p>0.000<span>10000</span></p>
      <p>100,000</p><p>=</p><p>0.00<span>100000</span></p>
      <p>1,000,000</p><p>=</p><p>0.0<span>1000000</span></p>
      <p>10,000,000</p><p>=</p><p>0.<span>10000000</span></p>
      <p>100,000,000</p><p>=</p><p><span>1.00000000</span></p>
    </div>

    <p>In a 2010 Bitcointalk thread meant to decide the official Bitcoin Unicode character, user Ribuck asked, “What’s the plan for subdividing bitcoins? Do we go in thousands like the metric system (millibits, microbits, nanobits)?”</p>

    <p>“A hundredth of a bitcoin could be a Satoshi, a thousandth of that could be a Molyneau, and a thousandth of that could be an Austrian,” Ribuck wrote.</p>

    <p>Fellow Bitcointalk users didn’t take Ribuck up on the proposal, but Ribuck resurfaced the idea in a 2011 thread specifically seeking more divisibility in BTC, which led to a thread soon after entitled “Bitcent?”, which sought to name these divided units. Within that thread, cryptography and Bitcoin pioneer Hal Finney referenced Ribuck’s original proposal:</p>
      
    <p>“I like ribuck’s terminology,” Finney wrote. “He suggests bitcents, then millicents and microcents. Microcents happen to be the smallest available subdivision of bitcoins, so this works nicely.”</p>

    <p>A few hours later, user marcus_of_augustus suggested an even smaller denomination: “1 satoshi = 1 microbitcent (smallest denomination). 100 million satoshis = 1 bitcoin. Are we agreed?”</p>

    <p>With apparent consent on the thread, the term became adopted by default. And in recent years, it’s use has seemed to grow more prevalent. That may be due to increased adoption, an overall rise in price, the birth of new rewards and earning platforms that use small denominations of BTC or other causes.</p>
  `;

  return $article;
}

export function Logo() {
  const $logo = document.createElement("div");
  const $img = document.createElement("img");
  const $a = document.createElement("a");
  const $styles = document.getElementById("dynamic-styles");

  const css = `
    .logo {
      display: inline-flex;
      align-items: baseline;
      width: 185px;
      height: 65px;
    }

    .logo img {
      width: 5rem;
      height: auto;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      transform: rotate(26deg);
    }

    .logo a {
      color: #f9f9f9;
      font-size: var(--fontSize-big);
      font-weight: 300;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      align-self: center;
      text-decoration: none;
    }
  `;
  $styles.insertAdjacentHTML("beforeend", css);

  $logo.className = "logo";
  $img.src =
    "https://alejoprin.github.io/sat_vs_fiat/assets/white_satoshi-symbol.svg";
  $img.alt = "satoshi image";
  $a.textContent = "Sat-vs-Fiat";
  $a.href = "#/";
  $logo.append($img, $a);

  return $logo;
}

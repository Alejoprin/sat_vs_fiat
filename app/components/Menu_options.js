export function MenuOptions() {
  const $menu = document.createElement("nav");
  const $styles = document.getElementById("dynamic-styles");

  const css = `
    .menu {
      position: absolute;
      top: 90px;
      right: 0px;
      display: flex;
      flex-direction: column;
      width: 190px;
      height: 135px;
      background-color: var(--rank-background);
      border-radius: 20px;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
      cursor: pointer;
      z-index: 10;
    }
    
    .menu > * {
      flex-grow: 1;
    }

    .menu a {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .menu a:nth-child(1),
    .menu a:nth-child(2) {
      border-bottom: thin solid var(--secondary-text-color);
    }

    .menu a:hover p,
    .menu a:hover span {
      color: var(--btc-color);
    }

    .menu p {
      display: inline block;
      width: 70px;
      color: #f9f9f9;
      font-size: var(--fontSize-verySmall);
    }   

    .menu span {
      color: #f9f9f9;
      font-size: var(--fontSize-verySmall);
      transition: color 0.3s ease;
    }
  `;
  $styles.insertAdjacentHTML("beforeend", css);

  $menu.className = "menu none";
  $menu.id = "menu";
  $menu.innerHTML = `
    <a class="menu_countries" href="#/countries">
      <p>Countries</p>
      <span>></span>
    </a>
    <a class="menu_satoshi" href="#/satoshi">
      <p>Satoshi</p>
      <span>></span>
    </a>
    <a class="menu_conversor" href="#/converter">
      <p>Converter</p>
      <span>></span>
    </a>
  `;

  return $menu;
}

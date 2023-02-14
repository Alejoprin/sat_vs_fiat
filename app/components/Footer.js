export function Footer() {
  const $footer = document.createElement("footer");
  const $styles = document.getElementById("dynamic-styles");

  $footer.className = "footer";

  const css = `
    .footer{
      width: 100%;
      max-width: 60rem;
      height: 40px;
      margin: 0 auto;
      padding: 10px 30px 0;
    }

    .footer a {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      border-radius: 20px 20px 0 0;
      background-color: var(--wildcard-color);
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
      color: var(--primary-text-color);
      font-size: var(--fontSize-small);
      font-weight: 500;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      text-decoration: none;
      cursor: pointer;
    }

    .footer span {
      margin: 0 3px;
      font-size: 1.5rem;
      color: var(--btc-color);
      font-weight: 800;
      text-shadow: 1px 1px 1px var(--black-color);
    }
  `;
  $styles.insertAdjacentHTML("beforeend", css);

  $footer.innerHTML = `
    <a href="https://alejoprin.github.io/Portfolio/" target="_blank" rel="noopener">Sat-vs-Fiat by <span>ADCP</span> 2022</a>
  `;

  return $footer;
}

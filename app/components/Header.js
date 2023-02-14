import { Logo } from "./Logo.js";
import { MenuBtn } from "./Menu_btn.js";

export function Header() {
  const $header = document.createElement("header");
  const $styles = document.getElementById("dynamic-styles");

  const css = `
    .header {
      display: flex;
      width: 100%;
      max-width: 60rem;
      height: 90px;
      margin: 0 auto;
      justify-content: space-evenly;
      align-items: center;
      padding: 0 30px;
    }
  `;
  $styles.insertAdjacentHTML("beforeend", css);

  $header.className = "header";
  $header.appendChild(Logo());
  $header.appendChild(MenuBtn());

  return $header;
}

import { MenuOptions } from "./Menu_options.js";

export function MenuBtn() {
  const $menuWrapper = document.createElement("div");
  const $styles = document.getElementById("dynamic-styles");

  const css = `
    .menu-wrapper {
      position: relative;
      display: flex;
      width: 70px;
      height: 80px;
      justify-content: center;
      align-items: flex-end;
      background-color: var(--rank-background);
      align-self: flex-start;
      border-radius: 0px 0px 20px 20px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      cursor: pointer;

      transition: box-shadow 0.3s ease;
    }

    .menu-wrapper:hover {
      box-shadow: 0px 0px 6px 0px rgba(175, 173, 208, 1);
    }

    .menu-wrapper svg {
      margin-bottom: 12px;
    }
  `;
  $styles.insertAdjacentHTML("beforeend", css);

  $menuWrapper.className = "menu-wrapper";
  $menuWrapper.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="#AFADD0" height="48" width="48"><path d="m24 30.45 8.65-8.65-2.15-2.1-6.5 6.5-6.5-6.5-2.15 2.1ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/></svg>
  `;

  $menuWrapper.appendChild(MenuOptions());

  // JS
  (function existsElement() {
    if (!document.querySelector("#menu")) {
      return setTimeout(existsElement);
    }
    // when element exists
    const $menu = document.getElementById("menu");
    const $menuIcon = document.querySelector(".menu-wrapper svg");

    const accion = () => {
      $menu.classList.toggle("none");

      if ($menuIcon.style.transform === "rotate(180deg)") {
        $menuIcon.style.transform = "rotate(0deg)";
        $menuIcon.style.transition = "0.6s";
      } else if (
        $menuIcon.style.transform === "rotate(0deg)" ||
        !$menuIcon.style.transform
      ) {
        $menuIcon.style.transform = "rotate(180deg)";
        $menuIcon.style.transition = "0.6s";
      }
    };

    $menuWrapper.addEventListener("click", accion);

    document.addEventListener("click", (e) => {
      if (
        !e.target.matches(".menu-wrapper") &&
        !e.target.matches(".menu-wrapper svg")
      ) {
        $menu.classList.add("none");
        $menuIcon.style.transform = "rotate(0deg)";
        $menuIcon.style.transition = "0.6s";
      }
    });
  })();

  return $menuWrapper;
}

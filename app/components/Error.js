export default function Error() {
  const $errorSection = document.createElement("section");
  const $styles = document.getElementById("dynamic-styles");

  const css = `
    .error-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .error-title {
      color: var(--primary-text-color);
      font-size: var(--fontSize-medium);
      margin: 15px 0 30px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .satoshi-img {
      width: 100%;
      max-width: 40rem;
      margin-bottom: 10px;
      border-radius: 20px;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    }

    .error-wrapper > p {
      color: var(--primary-text-color);
      font-size: var(--fontSize-verySmall);
      margin: 10px 0;
    }
  `;
  $styles.insertAdjacentHTML("beforeend", css);

  $errorSection.className = "error-wrapper";

  $errorSection.innerHTML = `
    <h2 class="error-title">Satoshi's Zone</h2>
    <img class="satoshi-img" src="app/assets/godSatoshi.jpg" alt="Satoshi Nakamoto">
    <p>Satoshi blesses you today and always, little padawan.</p>
    <p>Now go back where you came from...!!</p>
  `;

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

  return $errorSection;
}

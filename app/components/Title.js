export function Title() {
  const $title = document.createElement('h1')
  const $styles = document.getElementById('dynamic-styles')

  const css = `
    h1 {
      color: var(--primary-text-color);
      font-size: var(--fontSize-medium);
      margin: 30px 0;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    h1 span {
      color: var(--btc-color);
    }
  `;
  $styles.insertAdjacentHTML('beforeend', css)

  $title.innerHTML = `Top currencies vs <span> satoshi </span>`;

  return $title
}
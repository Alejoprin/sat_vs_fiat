export async function ajax(props) {
  let { url, cbSuccess } = props
  const $styles = document.getElementById('dynamic-styles')

  const css = `
    .error {
      padding: 1rem;
      font-size: 150%;
      font-weight: bold;
      text-align: center;
      color: #fff;
      background-color: #dc3545;
    }

    .error mark {
      padding: 0.5rem;
      border-radius: 0.5rem;
      display: inline-block;
      color: #fff;
      background-color: var(--btc-color);
    }
  `;
  $styles.insertAdjacentHTML('beforeend', css)

  await fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err => {
      let message = err.statusText || `Ocurrio un error al acceder al API`
      document.getElementById('main').innerHTML = `
        <div class="error">
          <p>Error ${err.status}: ${message}</p>
        </div>
      `

      console.log(err);
    })
}
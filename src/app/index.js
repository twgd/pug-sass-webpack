import html from '../templates/app.pug'

export function app() {
  const container = document.getElementById('root')
  container.innerHTML = html
}

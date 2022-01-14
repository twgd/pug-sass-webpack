import html from '../templates/app.pug'
import smoothScroll from './smoothScroll'

export function app() {
  const container = document.getElementById('root')
  container.innerHTML = html

  smoothScroll()
}

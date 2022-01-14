import html from '../templates/app.pug'
import smoothScroll from './smoothScroll'
import clickToAbout from './headerButton'

export function app() {
  const container = document.getElementById('root')
  container.innerHTML = html

  smoothScroll()
  clickToAbout()
}

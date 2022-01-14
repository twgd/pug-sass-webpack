export default function smoothScroll() {
  $('a.nav_text').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault()

      const hash = this.hash

      $('input#nav_switch').prop('checked', false)

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 80,
        },
        500,
        function () {
          // TODO: Add hash (#) to URL when done scrolling (default click behavior)
          // window.location.hash = hash
        }
      )
    }
  })
}

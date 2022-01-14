export default function clickToAbout() {
  $('.header_bottom_button').on('click', function () {
      $('html, body').animate(
        {
          scrollTop: $('#about').offset().top - 80,
        },
        500,
        function () {
          // TODO: Add hash (#) to URL when done scrolling (default click behavior)
          // window.location.hash = hash
        }
      )
    }
  )
}

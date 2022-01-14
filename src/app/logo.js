export default function backToTop() {
  $('.nav_left img').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      800,
      function () {
        // TODO: Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash
      }
    )
  })
}

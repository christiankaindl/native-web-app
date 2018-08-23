function init () {
  // Prevent zooming in Safari
  document.addEventListener('gesturestart', (event) => {
    event.preventDefault()
  }, false)

  // Disable double-tap to zoom
  document.addEventListener('dblclick', (event) => {
    event.preventDefault()
  })
}

export default init

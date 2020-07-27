const $button1 = document.getElementById('button1')

$button1.addEventListener('click', (event) => {
  alert(`${event.target.id} has been clicked`)
})

window.addEventListener('load', function () {
  console.log('I finished loading')
})

const $input = document.getElementById('name')
const $button = document.getElementById('button')
const $button2 = document.getElementById('button2')

const guests = ['Luis', 'Diego', 'Enrique', 'Javier', 'Jose', 'Memo']

function checkInvited (name) {
  for(let i = 0; i < guests.length; i++) {  
    if (name === guests[i]) return true
  }
  
  return false
}

$button.addEventListener('click', function () {
  const name = $input.value
  
  const isInvited = checkInvited(name)

  if (isInvited) {
    alert('you are invited')
  } else {
    alert('you are not invited')
  }

})

$button2.addEventListener('click', function () {
  $input.value = ''
})

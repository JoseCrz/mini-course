const $input = document.getElementById('name')
const $button = document.getElementById('button')
const $button2 = document.getElementById('button2')
const $button3 = document.querySelector('#button3')

const guests = ['Luis', 'Diego', 'Enrique', 'Javier', 'Jose', 'Memo']
const colors= ['red', 'blue', 'red']

function checkInvited (name) {
  for(let i = 0; i < guests.length; i++) {  
    if (name === guests[i]) return true
  }
  
  return false
}

$button.addEventListener('click', () => {
  const name = $input.value
  
  const isInvited = checkInvited(name)

  if (isInvited) {
    alert('you are invited')
  } else {
    alert('you are not invited')
  }

})

// Arrow function
$button2.addEventListener('click', () => $input.value = '')

$button3.addEventListener('click',  () => {
  arrayIterator(guests, guest => alert(guest.toUpperCase()))
  
  arrayIterator(colors, color => alert(color))
})

function arrayIterator (array, callback) {
  for(let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

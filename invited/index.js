const $input = document.getElementById('name')
const $button = document.getElementById('button')
const $button2 = document.getElementById('button2')

const guests = ['Luis', 'Diego', 'Enrique', 'Javier', 'Jose', 'Memo']

$button.addEventListener('click', function () {
  const name = $input.value
  
  let isInvited = false
  
  for(let i = 0; i < guests.length; i++) {
    console.log(`cicle: ${i}`)
    isInvited = name === guests[i]
    
    if (isInvited === true) {
      i = 1000
    }
  }

  // final
  console.log(isInvited)

  if (isInvited === true) {
    alert('you are invited')
  } else {
    alert('you are not invited')
  }

})

$button2.addEventListener('click', function () {
  $input.value = ''
})

const $input = document.querySelector('#input') // ID
const $button = document.querySelector('.button') // CLASS
const $text = document.querySelector('p') // TAG

const arrayIterator = (array, callback) => {
  for(let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

$button.addEventListener('click', () => {
  const names = $input.value
  const namesArray = names.split(',')
  
  const resultsArray = []
  
  arrayIterator(namesArray, name => {
    const improvedName = `${name} -> 👨🏻‍💻`
    resultsArray.push(improvedName)
  })

  const finalString = resultsArray.join(', ')

  $text.innerText = finalString
  
})


 
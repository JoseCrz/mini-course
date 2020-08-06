const $input = document.querySelector('#input') // ID
const $button = document.querySelector('.button') // CLASS
const $text = document.querySelector('p') // TAG

const jobs = ['👨🏻‍🚒/👩🏻‍🚒', '👨🏻‍⚖️/👩🏻‍⚖️', '👨🏻‍💻/👩🏻‍💻', '👨🏻‍🎤/👩🏻‍🎤', '👨🏻‍🍳/👩🏻‍🍳', '👨🏻‍🏫/👩🏻‍🏫', '👨🏻‍🔧/👩🏻‍🔧']

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
    const randomNumber = Math.floor(Math.random() * (jobs.length  - 1))
    resultsArray.push(`${name} -> ${jobs[randomNumber]}`)
  })

  const finalString = resultsArray.join(', ')

  $text.innerText = finalString
  
})


 
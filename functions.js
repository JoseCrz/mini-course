const result = sumOfNumbers(5, 7)
const result2 = subOfNumbers(7, 10)
console.log(result)
console.log(result2)

const area = circleArea(5)
console.log('Area:', area)


console.log(name)
const name = 'Luis'

// * Hoisting
function sumOfNumbers (number1, number2) {
  const sum = number1 + number2
  return sum
}

function subOfNumbers (number1, number2) {
  const sub = number1 - number2
  return sub
}

function hello (name = 'World') {
  console.log(`Hello ${name}`)
}

function circleArea (radius = 1) {
  const pi = 3.1416
  const area = pi * (radius**2)
  return area
}

function arrayLister ( stuff = [] ) {
}

function objectLister ( person = {}) {
}

const money = [50, 68, 23, 1, 54, 68, 90, 45]
//             0   1   2   3  4   5   6   7
//            length: 8

function moneyMultiplier (inputArray) {
  const multiplier = 2
  const newMoney = []
 
  for (let i = 0; i < inputArray.length; i++) {
    newMoney.push(inputArray[i] * multiplier)
  }

  return newMoney
}

const multipliedMoney = moneyMultiplier(money)
console.log(multipliedMoney)


// Jose -> ESOJ4@gmail.com

function emailGenerator (name) {
  
  function stringInverter (string) {
    // string -> 'D I E G O'
    //            0 1 2 3 4
    // length: 5
    const auxArray = []
    for (let i = string.length - 1; i >= 0 ; i--) {
      // i = 4
      // ...
      // i = 0
      auxArray.push(string[i])
    }
    // auxArray -> ["O", "G", "E", "I", "D"] ✅
    return auxArray
  }

  function numberAdder (array) {
    const auxArray = array
    const number = array.length
    const numberString = number.toString()
    
    auxArray.push(numberString)
    // auxArray -> ["O", "G", "E", "I", "D", "5"] ✅
    return auxArray
  }

  function emailAdder (array) {
    // array -> ["O", "G", "E", "I", "D", "5"]
    // ["O", "G", "E", "I", "D", "5", "@gmail.com"]
    const auxArray = array
    auxArray.push('@gmail.com')
    return auxArray
  }

  // ["O", "G", "E", "I", "D"]
  
  const upperCaseName = name.toUpperCase() 
  const invertedName = stringInverter(upperCaseName)
  const InvertedWithNumber = numberAdder(invertedName)
  const invertedWithEmail = emailAdder(InvertedWithNumber)
  const finalEmail = invertedWithEmail.join('')
  
  return finalEmail
  
}

const generatedEmail = emailGenerator('Diego')

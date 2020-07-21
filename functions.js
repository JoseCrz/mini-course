const result = sumOfNumbers(5, 7)
const result2 = subOfNumbers(7, 10)
console.log(result)
console.log(result2)

const area = circleArea(5)
console.log('Area:', area)


console.log(name)
const name = 'Luis'


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

const name = 'Jose'
const age = 24
const friendName = 'Luis'
const friendAge = 17

// console.log(name == friendName)
// console.log(age > friendAge)

// if ( friendName === 'Jose' ) {
//   console.log('Hello José')
// } else {
//   console.log('hello Luis')
// }

// if ( friendAge >= 18 ) {
//   console.log('You can drink a beer')
// } else {
//   console.log('You can\'t have a beer')
// }

// const money = 200

// if ( money <= 50) {
//   console.log('you can buy some chips')
// } else if (money <= 80) {
//   console.log('you can buy two esquites')
// } else if (money <= 100) {
//   console.log('you can buy three esquites')
// } else {
//   console.log(' You can buy all the esquites')
// }

// const option = 5

// switch (option) {
//   case 1:
//     console.log('Burger')
//     break
//   case 2:
//     console.log('Burger & fries')
//     break
//   case 3:
//     console.log('Burger, fries & soda')
//     break
//   default:
//     console.log('Sorry, we don\'t have that :(')
//     break
// }


// for ( let i = 0; i < 10; i-- ) {
//   console.log('hello')
// }

// let i = 0
// while (i < 10) {
//   console.log('hello')
//   i++
// }

const friendsAges = [ 24, 18, 19, 33, 18, 57, 86, 72, 4, 5, 7, 3, 10 ]
for (let i = 0; i < friendsAges.length; i += 2 ) {
  // i = 0
  // i = 2
  // i = 4
  // i = 6
  console.log(friendsAges[i])
}

const friendsNames = ['José', 'Luis', 'Diego', 'Memo']
for (let i = friendsNames.length - 1; i >= 0 ; i--) {
  // i = 4
  // i = 3
  // i = 2
  // i = 1
  // i = 0
  console.log(friendsNames[i])
}

const numbers = []
for (let i = 100; i >= 1; i--) {
  numbers.push(i)
}
console.log(numbers)

for (let i = 0; i < 100; i++) {
  numbers.pop()
}




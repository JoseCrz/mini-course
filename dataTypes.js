// ? Primitives
// * String
const name = 'Jose'
const lastname = 'Cuevas'

// * Number
let age = 24

// * Boolean
const likesEsquites = true

// ? Objects
// * Array
const friendsAges = [ 24, 18, 19, 33 ]
const friendsNames = ['José', 'Luis', 'Diego', 'Memo']
const esquitesLikes = [true, false, true, true]

// * Function
function hello (name, age) {
  console.log(`Hello my name is ${name} and next year im going to be ${age + 1} years old!`)
}

// * Objects
const person = {
  name: 'Diego',
  age: 19,
  likesEsquites: true,
  greeting: function (friendName) {
    console.log(`Hello ${friendName}`)
  },
  favMovies: [ 'Gladiator', 'Butterfly Effect', 'The Matrix' ],
  dog: {
    name: 'Lucho',
    age: 2,
    bark: function () {
      console.log('woof woof!')
    }
  },
  favVideogames: [
    {
      name: 'Halo',
      rating: 'T',
      console: 'Xbox'
    },
    {
      name: 'God of War',
      rating: 'M',
      console: 'PS2'
    },
    {
      name: 'Minecraft',
      rating: 'E',
      console: 'Multiplatform'
    }
  ]
}
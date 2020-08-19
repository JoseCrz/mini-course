const array = []

function fn () {

}

const person = {
  name: 'Jose',
  lastname: 'Cuevas',
  age: 24,
  play: () => console.log('Im playing zelda'),
  listOfGames: ['Zelda', 'The Last of Us', 'God of War'],
  pet: {
    name: 'Mimi',
    age: 6,
    gender: 'boy',
    cute: true
  },
  favoriteBeers: [
    {
      name: 'Blue Moon',
      style: 'Belgian'
    },
    {
      name: 'Guinness',
      style: 'Porter'
    }
  ]
}

// ! JSON
//  JavaScript Object Notation


// * Object Destructuring 

const bulbasaur = {
  name: 'Bulbasaur',
  pokedexNumber: 1,
  hp: 55,
  exp: 300,
  level: 6,
  types: ['Grass'],
  moves: [ 'Tackle', 'Bite', 'Vinewhip', 'Poison Powder'],
  captured: true,
  speak: () => console.log('Bulba bulba')
}

const pokedex = (firstGenerationPokemon) => {
  const { name, pokedexNumber, exp, level, hp } = firstGenerationPokemon
  
  console.log(`name: ${name}`)
  console.log(`Pokedex Number: ${pokedexNumber}`)
  console.log(`Experience: ${exp}`)
  console.log(`Level: ${level}`)
  console.log(`Hit Points: ${hp}`)
}

pokedex(bulbasaur)
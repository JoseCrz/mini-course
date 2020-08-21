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


const elias = {
  name: 'Elías Ayub',
  age: 51,
  married: true,
  phone: 2281005400,
  claveUnicaDeRegistroDePoblacion: 'EAHA950901HVZ'
}

const rodrigo = {
  name: 'Rodgrido Herrera',
  age: 45,
  married: true,
  phone: 2281075000,
  claveUnicaDeRegistroDePoblacion: 'ROHH950901HVZ'
}

const sharkInfo = (shark) => {
  const { name, claveUnicaDeRegistroDePoblacion: curp } = shark

  console.log(`El nombre del Shark es: ${name}`)
  console.log(`El CURP del Shark es: ${curp}`)
}

sharkInfo(elias)
sharkInfo(rodrigo)

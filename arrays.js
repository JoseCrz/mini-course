// reverse
const namesList = ['Lucho', ' Jojo', ' Mimi', ' Romina']
namesList.reverse() // [' Romina', ' Mimi', ' Jojo', 'Lucho']

// pop
const namesList = ['Lucho', ' Jojo', ' Mimi', ' Romina']
namesList.pop() // ['Lucho', ' Jojo', ' Mimi']

// shift
const namesList = ['Lucho', ' Jojo', ' Mimi', ' Romina']
namesList.shift() // [' Jojo', ' Mimi', ' Romina']

// join
const namesList = ['Lucho', ' Jojo', ' Mimi', ' Romina']
namesList.join() // Lucho,Jojo,Mimi,Romina
namesList.join('') //  "LuchoJojoMimiRomina"
namesList.join(' ') // "Lucho Jojo Mimi Romina"
namesList.join(' * ') // "Lucho * Jojo * Mimi * Romina"
namesList.join(' 🥵 ') //  "Lucho 🥵 Jojo 🥵 Mimi 🥵 Romina"

// includes
const namesList = ['Lucho', ' Jojo', ' Mimi', ' Romina']
namesList.includes('Jojo') // true
namesList.includes('gato') // false


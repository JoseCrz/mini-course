const name = 'Lucho'

// UPPER CASE
console.log(name.toUpperCase())

// lower case
console.log(name.toLowerCase())

const namesList = 'Lucho, Jojo, Mimi, Romina'
console.log(namesList.split(','))


// includes
const coolNames = 'Jose, Diego, Luis'
coolNames.includes('Diego') //true
coolNames.includes('Hector') // false

//substring
const message = 'hello world, how are you'
message.substring(0, 5) // hello
message.substring(13) // how are you
message.substring(0, message.length/2) // hello world,

// charAt
const message = 'hello world, how are you'
message.charAt('') // 'h'
message.charAt('8') // r

//charCodeAt
const message = 'hello world, how are you'
message.charCodeAt('') // 104
message.charCodeAt('8') // 114

// trim
const name = '   Luis  '
name.trim() // 'Luis
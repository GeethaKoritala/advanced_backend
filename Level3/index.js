function generateGreetings (name) {
  function spanish () {
    console.log(`Hola ${name}!`)
  }
  function english () {
    console.log(`Hello ${name}!`)
  }
  return { spanish, english }
};
const name = 'John'
const greetings = generateGreetings(name)

console.log(typeof (greetings.spanish))

greetings.spanish()
greetings.english()

// const firstName = () => console.log('John')
// const lastName = () => console.log('Doe')

// const printName = () => {
//     console.log('My Name is:')
//     setTimeout(firstName, 500)
//     lastName()
// }

// printName()

// console.log('Hello 1')

// // Print message after 100 millisecond
// setTimeout(() => {
//   console.log('Hello 2')
// }, 500)
// console.log('Hello 3')

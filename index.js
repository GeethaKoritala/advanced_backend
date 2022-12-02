const fs = require('fs')
const http = require('http')
const args = require('minimist')(process.argv.slice(2))

let homeContent = ''
let projectContent = ''
let registrationContent = ''

fs.readFile('home.html', (err, home) => {
  if (err) {
    throw err
  }
  homeContent = home
})

fs.readFile('project.html', (err, project) => {
  if (err) {
    throw err
  }
  projectContent = project
})

fs.readFile('registration.html', (err, registration) => {
  if (err) {
    throw err
  }
  registrationContent = registration
})

http
  .createServer((request, response) => {
    const url = request.url
    response.writeHeader(200, { 'Content-Type': 'text/html' })
    switch (url) {
      case '/project':
        response.write(projectContent)
        response.end()
        break
      case '/registration':
        response.write(registrationContent)
        response.end()
        break
      default:
        response.write(homeContent)
        response.end()
        break
    }
  })
  .listen(args.port)

// const args = require("minimist")(process.argv.slice(2),{
//   alias: {
//     n:"name",
//     a:"age",
//   },
//   default: {
//     greeting: "Hello",
//   },
// });
// console.log(args);

// const readline = require("readline");
// const lineDetail = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// lineDetail.question(`Please provide your name - `, (name) => {
//   console.log(`Hi ${name}!`);
//   lineDetail.close();
// });

// const server = http.createServer((req,res) =>(
//   const stream = fs.createReadStream('test.txt');
//   stream.pipe();
// ))

// const server = http.createServer((req,res) =>(
//   fs.readFile('test.txt',(err, data) => {
//     res.end(data);
//   })
// ))

// server.listen(3030);

// fs.writeFile(
//   'sample.txt',
//   'Hello World. Welcome to Node.js File System module.',
//   (err) => {
//     if (err) throw err
//     console.log('File created')
//   }
// )

// fs.readFile('sample.txt', (err, data) => {
//   if (err) throw err
//   console.log(data.toString())
// })

// fs.appendFile('sample.txt', ' This is my updated content', (err) => {
//   if (err) throw err
//   console.log('File updated!')
// })

// fs.rename('sample.txt', 'test.txt', (err) => {
//   if (err) throw err
//   console.log('File name updated')
// })

// fs.unlink('test.txt', (err) => {
//   if (err) throw err
//   console.log('File test.txt deleted successfully!')
// })

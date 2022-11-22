const fs = require('fs')
const http = require('http')


const server = http.createServer((req,res) =>(
  const stream = fs.createReadStream('test.txt');
  stream.pipe();
))

// const server = http.createServer((req,res) =>(
//   fs.readFile('test.txt',(err, data) => {
//     res.end(data);
//   })
// ))

server.listen(3030);

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

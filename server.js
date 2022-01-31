// Require http module
const http = require("http")

// Require fs module
const fs = require('fs')

// Require minimist module (make sure you install this one via npm).
const args = require('minimist')(process.argv.slice(2))

// Use minimist to process one argument `--port=` on the command line after `node server.js`.

// Define allowed argument name 'port'.
const port = args.port || 3000

// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.

// Use the fs module to create an arrow function using `fs.readFile`.
fs.readFile('./www/index.html', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
      
    }
    console.log(data)
    const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
    })
    server.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
})
  

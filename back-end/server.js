
const server = require('./app')

// which port to listen for HTTP(S) requests
const port = 4000 //changed to 4000, OS has process on 5000

// call a function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})

// a function to stop listening to the port
const close = () => {
  listener.close()
}

// export the close function
module.exports = {
  close: close,
}
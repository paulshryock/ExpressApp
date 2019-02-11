require('http')
  .createServer((req, res) => {
    res.end('Hello from a vanilla server!')
  })
  .listen()
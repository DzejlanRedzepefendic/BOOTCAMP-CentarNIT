const http = require('http')

const server = http
  .createServer((req, res) => {
    const url = req.url
    if (req.url === '/') {
      res.writeHead(200, { 'content-type': 'text/html' })
      res.write('<h1>Home Page</h1>')
      res.end()
    } else if (req.url === '/about') {
      res.writeHead(200, { 'content-type': 'text/html' })
      res.write('<h1>About Page</h1>')
      res.end()
    } else {
      res.writeHead(404, { 'content-type': 'text/html' })
      res.write('<h1>Error 404 </h1>')
      res.end()
    }
  })
  .listen(5000)

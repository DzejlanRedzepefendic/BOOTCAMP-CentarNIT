const http = require('http')
const { readFileSync } = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const logoSVG = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http
  .createServer((req, res) => {
    const url = req.url
    if (req.url === '/') {
      res.writeHead(200, { 'content-type': 'text/html' })
      res.write(homePage)
      res.end()
    } else if (req.url === '/about.html') {
      res.writeHead(200, { 'content-type': 'text/html' })
      res.write('<h1>About Page</h1>')
      res.end()
    } else if (req.url === '/styles.css') {
      res.writeHead(200, { 'content-type': 'text/css' })
      res.write(homeStyles)
      res.end()
    } else if (req.url === '/logo.svg') {
      res.writeHead(200, { 'content-type': 'image/svg+xml' })
      res.write(logoSVG)
      res.end()
    } else if (req.url === '/browser-app.js') {
      res.writeHead(200, { 'content-type': 'text/js' })
      res.write(homeLogic)
      res.end()
    } else {
      res.writeHead(404, { 'content-type': 'text/html' })
      res.write('<h1>Error 404 </h1>')
      res.end()
    }
  })
  .listen(5000)

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello there')
  res.end()
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.all('*', (req, res) => {
  res.send('404 Page not found')
})
app.listen(5000, () => {
  console.log('Server is Listening on port 5000')
})

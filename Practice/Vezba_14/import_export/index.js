import { nesto } from './test.js'

let randomLetters = 'sfsfasfsafafadasdadasdads'

console.log(nesto(randomLetters))

try {
  var data = await fetch('https://api.quotable.io/random')
  const res = await data.json()
  console.log(`${res.content} ~ ${res.author}`)
} catch (error) {
  console.log(error)
}


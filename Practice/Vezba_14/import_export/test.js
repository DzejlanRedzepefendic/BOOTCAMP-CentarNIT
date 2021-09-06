export const nesto = (params) => {
  let noviString = params.split('')
  let noviObject = {}
  for (let index = 0; index < noviString.length; index++) {
    const letter = noviString[index]
    if (!noviObject[letter]) {
      noviObject[letter] = 1
    } else {
      noviObject[letter] += 1
    }
  }
  return noviObject
}

export const myPromise = new Promise((resolve, reject) => {
  let randomNumber
  setTimeout(() => {
    randomNumber = Math.ceil(Math.random() * 10)
    if (randomNumber >= 5) {
      resolve(randomNumber)
    } else {
      reject(randomNumber)
    }
  }, 1000)
})

export async function getQoute() {
  const result = await fetch('https://api.quotable.io/random')
  const data = await result.json()
  return data
}

export async function get20Quotes() {
  try {
    const result = await fetch('https://quotable.io/quotes?page=1')
    const data = await result.json()

    const formatedResult = data.results.map((element) => {
      return { tags: element.tags, content: element.content }
    })

    return formatedResult
  } catch (error) {
    console.log(error)
  }
}

export async function getRandomQuote(tags) {
  try {
    const result = await fetch(`https://quotable.io/random?tags=${tags}`)
    const data = await result.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

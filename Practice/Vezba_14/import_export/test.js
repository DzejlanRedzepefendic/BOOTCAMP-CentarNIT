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

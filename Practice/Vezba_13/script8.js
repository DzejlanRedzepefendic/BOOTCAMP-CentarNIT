let Car = {
  name: 'BMW',
  year: '2021',
  horsePower: '2.2',
}

const Person = {
  name: 'Milan',
  surename: 'Milanovic',
  adress: {
    street: '28. novembar',
    city: 'Novi Pazar',
  },
}

const personFunkcija = (obj) => {
  const {
    name,
    surename,
    adress: { street, city },
  } = obj
  console.log(name, surename, city, street)
}

personFunkcija(Person)

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const [a, b] = array
console.log(a, b)

const novaFunckija = ({ name, surename, adress }) => {
  console.log(name, surename, adress)
}

novaFunckija(Person)

let sentence = 'This has happend long time ago. but i do not think so.'

let wordToUpper = (string) => {
  let pomocniString = string.split('.')
  for (let index = 0; index < pomocniString.length - 1; index++) {
    pomocniString[index] =
      pomocniString[index][1].toUpperCase() + pomocniString[index].slice(2)
  }
  return pomocniString
}
console.log(wordToUpper(sentence))

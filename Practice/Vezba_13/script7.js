'use strict'
let randomArray = [
  'dasda',
  'dasfasf',
  'gfasfasf',
  'gagagasgsa',
  'hsahashash',
  'hashasashafasfasf',
  'gasfdas',
]
let arrayUNesto = (array) => {
  let najduziString = array[0]
  for (let i = 1; i < randomArray.length; i++) {
    if (najduziString.length < array[i].length) najduziString = array[i]
  }
  return najduziString
}

console.log(arrayUNesto(randomArray))

const multiArgs = (...args) => {
  for (let index = 0; index < args.length; index = index + 2) {
    console.log(args[index])
  }
}

multiArgs('kkdoaskdoa', 5, '5341341', 434, true)

const multiArgsSecondTask = (...args) => {
  for (let index = 0; index < args.length; index++) {
    console.log(typeof args[index])
  }
}

multiArgsSecondTask('kkdoaskdoa', 5, '5341341', 434, true)

let obj = {
  ucenik: { name: 'this' },
  ucenik1: { name: 'what' },
  ucenik2: { name: 'Ivan' },
}
let radSaObjektima = (object) => {
  let tempObject = { ...object }
  console.log(tempObject)
}

radSaObjektima(obj)

let saljemoNekiObjekat = (object) => {
  let pomocniObjekat = {
    ...object,
    ucenik: { ...object.ucenik, surename: 'Slavkovic' },
  }

  return pomocniObjekat
}

let nekiNoviObjekti = (object) => {
  let pomocniObjekat = { ...object }
  let tempValues = Object.values(object)
  let tempKeys = Object.keys(object)
  for (let index = 0; index < tempValues.length; index++) {
    if (tempValues[index].name === 'Ivan')
      pomocniObjekat[tempKeys[index]].surename = 'Slavkovic'
  }
  return pomocniObjekat
}

console.log(nekiNoviObjekti(obj))

let nizObjekata = [{ id: 12342 }, { id: 25114 }, { id: 21921 }, { id: 51921 }]

let radSaNizimObjektom = (array) => {
  let tempArray = [...array]
  for (let index = 0; index < array.length; index++) {
    if (tempArray[index].id === 21921) tempArray[index].name = 'Ivan'
  }
  return tempArray
}

console.log(radSaNizimObjektom(nizObjekata))

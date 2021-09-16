'use strict'

// functional programing
// isolated functions
// pure functions
// functions with limited side effects

const array = [1, 2, 3, 5, 6, 5, 20]
const idx = 5

function getIndex(arr, idx) {
  let result
  arr.forEach((element, index) => {
    if (index === idx) {
      result = element
    }
  })
  return result
}

console.log(getIndex(array, idx))

const array = [
  { id: 1, name: 'Suad' },
  { id: 2, name: 'Ivan' },
  { id: 3, name: 'Dzejlan' },
  { id: 4, name: 'Izo' },
  { id: 5, name: 'Belma' },
  { id: 6, name: 'Emin' },
  { id: 7, name: 'Daris' },
  { id: 8, name: 'Arijan' },
]

const a = array.map((element) => {
  return element.name
})

console.log(a, a.length)

function getElement(array, id) {
  let res
  array.forEach((element) => {
    if (element.id == id) {
      res = element
    }
  })
  return res
}
console.log(getElement(array, 3))

const noviArray = [1, 2, 3, 4, 5, 6]

Array.prototype.MyMap = function (callback) {
  const newArray = []
  for (let index = 0; index < this.length; index++) {
    newArray.push(callback(this[index], index, this))
  }
  return newArray
}

const b = noviArray.MyMap((element, index) => element * 2 * index)

console.log(b)

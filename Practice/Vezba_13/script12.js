const array = [
  { id: 1, name: 'suad' },
  { id: 2, name: 'Ivan' },
  { id: 3, name: 'Dzejlan' },
  { id: 4, name: 'Belma' },
]

Array.prototype.myReduce = function (callback, initial) {
  let result = initial

  this.forEach((value, index) => {
    if (result === undefined && index === 0) {
      result = value
    } else {
      result = callback(result, value, index, this)
    }
  })

  return result
}
// perviousvalue, currentValue, index, array

const reducedArray = array.myReduce((result, value, index) => {
  return result * value.id
}, 1)

// const array2 = array
//   .filter((value) => value.id % 2 === 0)
//   .map((value) => value.name);
// console.log(array2);

console.log(reducedArray)

class Animal {
  constructor(name, numLegs) {
    this.name = name
    this.numLegs = numLegs
  }
  greet() {
    console.log(`${this.name} im small animal`)
  }
  goodbye() {
    console.log(`${this.name} says that u are boring`)
  }
}

class Cat extends Animal {
  constructor(name, numLegs, fur, age) {
    super(name, numLegs)
    this.fur = fur
    this.age = age
  }
  greet() {
    super.greet()
    console.log('Meow')
  }
  goodbye() {
    super.goodbye()
    console.log('meoWW')
  }
}

const cat1 = new Cat('Mica', 3, 'black', 'dama se ne pita za godine')

console.log(cat1)
cat1.greet()
cat1.goodbye()

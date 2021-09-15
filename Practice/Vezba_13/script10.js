class Person {
  constructor(name, lastname, age) {
    this.name = name
    this.lastname = lastname
    this.age = age
  }
  introduction() {
    console.log(`My full name is ${this.name} ${this.lastname}`)
  }
  introduction2() {
    console.log(`i'm ${this.age} year old`)
  }
}

class Student extends Person {
  constructor(name, lastname, age, university, year) {
    super(name, lastname, age)
    this.university = university
    this.year = year
  }
  introduction() {
    super.introduction()
    super.introduction2()
    console.log(`University name: ${this.university} year:${this.year}`)
  }
}

let tamoNekiRandomUcenik = new Student(
  'Predrag',
  'Panj',
  23,
  'University of Oxford',
  2
)

tamoNekiRandomUcenik.introduction()

class Teacher extends Person {
  constructor(name, lastname, age, university, workedYears) {
    super(name, lastname, age)
    this.university = university
    this.workedYears = workedYears
  }
  introduction() {
    super.introduction()
    super.introduction2()
    console.log(
      `University name: ${this.university} i worked there for ${this.workedYears} years`
    )
  }
}

let tamoNekiRandomUcitelj = new Teacher(
  'Milodrag',
  'Manojlovic',
  55,
  'Univerzitet Braca Karic',
  10
)

tamoNekiRandomUcitelj.introduction()

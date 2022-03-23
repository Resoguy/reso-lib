class Person {
  constructor(name) {
    this.name = name
  }

  greetings() {
    console.log(`Hello I am ${this.name}`)
  }
}

module.exports = Person
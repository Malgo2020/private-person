class Person {
  constructor() {
    let name = "";
    let age = "";
    let savings = 0;
    this.setName = (value) => {
      name = value;
    };
    this.getName = () => {
      return name;
    };
    this.setAge = (value) => {
      age = value;
    };
    this.getAge = () => {
      return age;
    };
    this.givePaycheck = () => {
      savings += 100;
    };
    this.hasEnoughSavings = (value) => {
      return savings >= value;
    };
  }
  /* alternative way of writing getters and setters - but the properties are not private
  constructor() {
    this.name = "";
  }

  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }
*/
}

export default Person;

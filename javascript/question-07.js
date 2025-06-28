class Lizard {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "orange" } = {}) {
    this.newColor = newColor;
  }
}

const tommy = new Lizard({ newColor: "orange" });
// console.log(tommy.colorChange("blue")); //we cannot call static methods on class instance we need to call directly on class
// TypeError: tommy.colorChange is not a function
 
console.log(Lizard.colorChange("blue"))
function Human(fName,lName){
    this.firstName = fName
    this.lastName = lName
}

const MrX = new Human("Mr", "X") //whenever we call a function with new keyword, its called a constructor call and that function returns an object
const Rock = Human("The","Rock") //undefined because the function doesn't return anything

console.log(MrX);
console.log(Rock)
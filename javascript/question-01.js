function showData() {
  console.log("variable name is :", name);
  console.log("variiable name is :", age);
  var name = "mashal";
  let age = 25;
}
showData();
// var and let both are hoisted but var is assigned undefined where let shows error --> ReferenceError: Cannot access 'age' before initialization

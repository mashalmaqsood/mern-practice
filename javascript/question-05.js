const code = {
    type:"web"
}

const reactjs = {
    name : "js",
    web: "true"
}

console.log(reactjs[code.type]) //output : true(String)
console.log(reactjs[reactjs["type"]]) // type property doesn't exist in react js object so the output is undefined
console.log(code.type.web) //web is not a property of type, but rather a value, so it can't be accessed this way.
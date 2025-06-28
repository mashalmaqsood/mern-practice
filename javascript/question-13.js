//Tagged template literal
function getSummary(one,two,three){
    console.log(one)
    console.log(two)
    console.log(three)
}

const fName = "mashal"
const age = 50;

getSummary `${fName} age is ${age}`

// [ '', ' age is ', '' ]   // → static string parts
// mashal                   // → value of ${fName}
// 50                       // → value of ${age}

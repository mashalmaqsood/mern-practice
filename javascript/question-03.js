
const income = {
    skills: 108,
    monthly(){
        return this.skills * 108
    },
    yearly: () => 888 * this.skills
}

console.log(income.monthly());
console.log(income.yearly());

// monthly() uses this based on how it's called → income.monthly() → so this = income ✅

// yearly() is an arrow function, so this is taken from outside the object — i.e., from wherever the income object is defined (most likely the global scope, where this.skills is undefined) so 888 * undefined = NaN
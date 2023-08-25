// Function Expressions
const increment1 = function (n) {
  return n++
}
// Arrow Functions is always anonymous
const increment2 = (n) => {
  return n++
}
const increment3 = (n) => {
  return n++
}
const increment4 = n => n + 1 

console.log(increment1(1), increment2(5), increment3(24), increment4(199))

const sum = (a, b) => a + b
console.log(sum(3, 8))

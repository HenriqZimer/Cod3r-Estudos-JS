let a = 4
console.log(a)

// Function Declaration
function bomDia() {
  console.log('Bom Dia!')
}
bomDia()

// Function expression
const boaTarde = function () {
  console.log('Boa Tarde!')
}
boaTarde()

function somar(a, b) {
  return a + b
}

const resultado = somar(3, 4, 5)
console.log(resultado)

resultado = somar(3, 4)
console.log(resultado)

resultado = somar(3)
console.log(resultado)
let edad: number = 20
let tieneLicencia: boolean = true
let estudiante: boolean = true
let empleado: boolean = true

// OPERADOR AND  // las dos condiciones tiene que ser verdaderas. No puede ser una si y la otra no
// console.log(edad >= 18 && tieneLicencia == true)

// // OPERADOR OR // Con tal que se cumpla una , ya seria verdadero
// console.log(edad >= 20 || tieneLicencia == true)

// // OPERADOR NOT // NIEGA el valor de una variable con ! delante del valor de una variable
// console.log(!tieneLicencia) // sirve para parar o dar fin a un bucle

console.log(
    edad >= 18 && (estudiante == true || empleado == true )
)
console.log(
    edad <= 20 && (estudiante == false || empleado == true)
)
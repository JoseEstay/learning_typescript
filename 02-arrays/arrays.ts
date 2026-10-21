let frutas: string[] = ['manzanas', 'bananas', 'peras', 'uvas']
let precio: number[] = [10.50, 60, 20.30, 150.50]
let numeros: number[] = [8,9,6,7,4,5,2]
let nombres: Array<string>=['Jose', 'Antonio', 'Maria']
let tablero: number[][] = [
    [1,2,3],
    [2,4,6],
    [3,6,9]
]

// console.log(frutas);
// console.log(precio);
// // ver elementos por posicion
// console.log(frutas[0])

// // ver cantidad de elementos
// console.log(frutas.length -1)

// // agregar elemento al final
// frutas.push('arandanos')
// nombres.push('ana', 'Pedro')
// console.log(frutas)
// console.log(nombres)

// //agregar al inicio con unshift
// frutas.unshift('melones')
// console.log(frutas)


// //eliminar elementos final
// frutas.pop()
// console.log(frutas)

// //elimnar elemntos en especifico
// frutas.splice(2,1) // cuenta la posicion dos que seria uva y elimina 1 . tambien pudo haber sido 2,2
// console.log(frutas)

// //eliminar primer elemento
// nombres.shift()
// console.log(nombres)

// //buscar elemento en especifico
// console.log(frutas.includes('bananas')) // dime si existe el elemento bananas ( eso hace el includes)
// console.log(frutas.includes('manazanas '))

//buscar elementos en el array
console.log(nombres.indexOf('Maria')) // dara la posicion donde se encuentra pero tiene que ser exacto la escritura

//convertir arrays a textos
console.log(precio.join(',')) // con eso usa la , para separarlo como texto y puede ser , = / %

//Ver parte de una array
frutas.slice(1,3)
console.log(frutas.slice(1,3)) // interpreta , dame los elemtnos desde la posicion 1 hasta la 3 ( ignorara la 3 position)

//ordenar un array
console.log(numeros)
console.log(numeros.sort()) // ordenados en secuencias

// ver array al reves
console.log(nombres.reverse)
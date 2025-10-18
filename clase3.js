// const fruits = Array('apple', 'banana', 'orange');
//  console.log(fruits)

//  console.log(fruits.length)

// const justOneNumber = Array(12)
// console.log(justOneNumber)

// const numbers = Array(1, 2, 3, 4, 5)
// console.log(numbers)

// const oneNumber = [12,"sapo"]
// console.log(oneNumber)

// const recipeIngredients = [
//     'fluor',
//     true,
//     {
//         ingredient: 'milk', quantity: '1cup'

//     },
//     false

// ]
// console.log(recipeIngredients)

// fruits.push('grape')
// console.log(fruits)


// const newFruits = fruits.concat(['pear', 'kiwi'])
// console.log(fruits)
// console.log(newFruits)

// const isArray = Array.isArray(fruits)
// console.log(Array.isArray(fruits))

// const numbersArray = Array(1, 2, 3, 4, 5)
// let sum = 0
// for (const num of numbersArray) {
//     sum += num
// }
// console.log(sum)

// const numeros = [10, 20, 30, 40, 50]
// const doubledNumbers = numeros.map(num => num * 3)
// console.log(doubledNumbers)

// const numerosFilters = numeros.filter(num => num > 6)
// console.log(numerosFilters)

// console.log(numeros.pop())
// console.log(numeros)
// const numeros = [3, 6, 1, 8, 4, 2, 5, 7]
// // numeros.sort()
// // console.log(numeros)

// // const nummerosFind = numeros.find(num => num > 4)
// // console.log(nummerosFind)
// // const nummerosFindDex = numeros => numeros > 4  // esta funcion busca un objeto que cumpla con la condicion y muestra su psoicion
// // console.log(numeros.findIndex(nummerosFindDex))

//    const carrito = [
//          {producto: 'mouse', precio: 500},
//          {producto: 'teclado', precio: 800},
//          {producto: 'monitor', precio: 3000},
         
//    ]
    
//    const total = carrito.reduce((acumulator, item) => acumulator + item.precio, 0)
// console.log(total)

const wordsRepeat = ['hola', 'mundo', 'hola', 'javascript', 'mundo', 'hola']
const wordCount = wordsRepeat.reduce((accumulator, word) => {
    if (accumulator[word]) {
        accumulator[word] += 1
    } else {
        accumulator[word] = 1
    }
    return accumulator
}, {})
console.log(wordCount)
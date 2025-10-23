// // // const fruits = Array('apple', 'banana', 'orange');
// // //  console.log(fruits)

// // //  console.log(fruits.length)

// // // const justOneNumber = Array(12)
// // // console.log(justOneNumber)

// // // const numbers = Array(1, 2, 3, 4, 5)
// // // console.log(numbers)

// // // const oneNumber = [12,"sapo"]
// // // console.log(oneNumber)

// // // const recipeIngredients = [
// // //     'fluor',
// // //     true,
// // //     {
// // //         ingredient: 'milk', quantity: '1cup'

// // //     },
// // //     false

// // // ]
// // // console.log(recipeIngredients)

// // // fruits.push('grape')
// // // console.log(fruits)


// // // const newFruits = fruits.concat(['pear', 'kiwi'])
// // // console.log(fruits)
// // // console.log(newFruits)

// // // const isArray = Array.isArray(fruits)
// // // console.log(Array.isArray(fruits))

// // // const numbersArray = Array(1, 2, 3, 4, 5)
// // // let sum = 0
// // // for (const num of numbersArray) {
// // //     sum += num
// // // }
// // // console.log(sum)

// // // const numeros = [10, 20, 30, 40, 50]
// // // const doubledNumbers = numeros.map(num => num * 3)
// // // console.log(doubledNumbers)

// // // const numerosFilters = numeros.filter(num => num > 6)
// // // console.log(numerosFilters)

// // // console.log(numeros.pop())
// // // console.log(numeros)
// // // const numeros = [3, 6, 1, 8, 4, 2, 5, 7]
// // // // numeros.sort()
// // // // console.log(numeros)

// // // // const nummerosFind = numeros.find(num => num > 4)
// // // // console.log(nummerosFind)
// // // // const nummerosFindDex = numeros => numeros > 4  // esta funcion busca un objeto que cumpla con la condicion y muestra su psoicion
// // // // console.log(numeros.findIndex(nummerosFindDex))

// // //    const carrito = [
// // //          {producto: 'mouse', precio: 500},
// // //          {producto: 'teclado', precio: 800},
// // //          {producto: 'monitor', precio: 3000},
         
// // //    ]
    
// // //    const total = carrito.reduce((acumulator, item) => acumulator + item.precio, 0)

// // // console.log(total)

// // // const wordsRepeat = ['hola', 'mundo', 'hola', 'javascript', 'mundo', 'hola']
// // // const wordCount = wordsRepeat.reduce((accumulator, word) => {
// // //     if (accumulator[word]) {
// // //         accumulator[word] += 1
// // //     } else {
// // //         accumulator[word] = 1
// // //     }
// // //     return accumulator
// // // }, {})
// // // console.log(wordCount)
// // class animal {
// //     constructor(name, tipo) {
// //         this.name = name;
// //         this.species = tipo;
// //     }
// //     emitirsonido() {
// //         console.log("El animal emite un sonido");
// //     }
// // }; 

// // class perro extends animal {
// //     constructor(name, tipo, raza) {
// //         super(name, tipo);
// //         this.raza = raza;
// //     }
// //     ladrar() {
// //         console.log("El perro está ladrando");
// //     }
// //     correr() {
// //         console.log(`${this.name} corre alegremente`);
// //     }

// // };   

// // const perro1 = new perro("shippa", "Canino", "Labrador");

// // console.log(perro1);
// // perro1.emitirsonido();
// // perro1.correr();

// // perro1.nuevoMetodo = function() {
// //     console.log("este es un metodo" );
// // };

// // perro.prototype.segundometdo = function() {
// //     console.log("este es otro nuevo metodo");
// // };

// class persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
// }
// const persona1 = new persona("Juan", 30);

// console.log(persona1);

// persona1.nuevoMetodo = function() {
//     console.log(`mi nombre es ${this.nombre}`);
// }

const userDataBase = [
    { username:"juan",
      pasword:123,
    },
    { username:"maria",
      pasword:333,
    },
    { username:"camila",
      pasword:222,
    },
    { username:"pedro",
      pasword:111,
    },
    { username:"luisa",
      pasword:444,
    }
] 
 
const username = prompt("cual es tu usuario?")
const pasword = prompt("cual es tu contraseña?")

function usuarioExistente(username, pasword) {
    for(let i = 0; i < userDataBase.length; i++) {
        if(
            userDataBase[i].username === username && 
            userDataBase[i].pasword == pasword
        ) {
           console.log("es correcto")
           break
        } else {
           console.log("no es correcto")
        }
    }
}    
        
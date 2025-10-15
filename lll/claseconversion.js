const numeroAEvluar = 57 
let cantPares = 0
let pares = []  
for (let i = numeroAEvluar; i >= 0; i--) {
    if ( i % 2 === 0 && cantPares<5 ) {
        pares.push(i)
        cantPares++
    }
    
    }
    console .log(`numeros desde ${numeroAEvluar} hasta 2: ${pares}`)


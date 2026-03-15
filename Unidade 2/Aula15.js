/* console.log('Inicio do Loop')

for(let i=0; i < 10; i++){
    console.log('Cursos')
}

console.log('Fim do Loop') 

let somaPar = 0
let somaImpar = 0

for(let i=0; i <= 50; i++){
    if(i % 2 === 0){
    somaPar += i
    }else if(i % 2 !== 0){
    somaImpar += i
    }
}

console.log(`A soma dos números pares foram: ${somaPar} e soma dos números impares foram ${somaImpar}`)

let multiplos = 0
for(let i=0; i <= 30; i++){
    if(i % 3 === 0 || i % 5 === 0){
        multiplos += i
    }
}

console.log(`Multiplos são: ${multiplos}`*/


for(let i = 1; i <= 10; i++){
    console.log(`Tabuada do ${i}`)
    for(let j = 1; j <= 10; j++){
    console.log(`${i} x ${j} = ${i * j}`)
    }
    console.log('----------------------------')
}
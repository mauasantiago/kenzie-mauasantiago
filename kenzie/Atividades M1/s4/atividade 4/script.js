// Exercício 1
// Crie um programa que concatene dois nomes e retorne uma frase de saudação.
// Entrada: nome1 = "João", nome2 = "Silva" Saída: "Olá João Silva!"

let nome1 = "João";
let nome2 = "Silva";
 
console.log(`Olá ${nome1} ${nome2}!`);

// Exercício 2
// Crie um programa que adicione uma string ao final de outra string e retorne a string resultante.
// Entrada: string1 = "hello", string2 = "world" Saída: "helloworld"

let string1 = "hello";
let string2 = "world";

console.log(string1+string2);

// Exercício 3
// Crie um programa que receba uma string em formato de número decimal e retorne o número inteiro equivalente.
// Entrada: "12.5" Saída: 12

let Entrada = "12.5";

console.log(parseInt(Entrada));


// Exercício 4
// Crie um programa que converta uma string em formato de número inteiro para um número inteiro.
// Entrada: "12" Saída: 12

let numInteiro = "12";
console.log(parseInt(numInteiro));

// Exercício 5
// Crie um programa que converta duas strings em formato de número inteiro para um número inteiro, faça uma soma desses números e apresente o resultado
// Entrada 1: "12" Entrada 2: "3" Saída: 15

let Entrada1 =  "12";
let Entrada2 = "3";
let Entrada1Convertida = parseInt(Entrada1)
let Entrada2Convertida = parseInt(Entrada2)

console.log(Entrada1Convertida+ Entrada2Convertida);
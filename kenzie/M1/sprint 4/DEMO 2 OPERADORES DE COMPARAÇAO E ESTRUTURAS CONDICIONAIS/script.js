//Tipos de variáveis

//const
//let

//NÃO USAR MAIS:
//var

//Tipos de valores de variáveis:

//number
//boolean
//string

// ** Camel Case**
// let umaVariavel;

// ** Snake Case**
let uma_variavel;

// let nome = "Mauã"
let sobrenome = "Santiago"
let nomedomeio = 'Hirt'
let turma = 21

let texto = "Sexta feira é um dia 'Ruim'"

// Template string

// let mensagem = "Olá Alexander. Bem vindo"
// let mensagem2 = `Olá ${nome}. Bem vindo a turma ${turma}`

// console.log(mensagem2)

// Concatenacao de string 

// let mensagem3 = "Olá"+ nome +". Bem vindo a turma " + turma + "!"

// console.log(mensagem3)

// Acessando os caracteres

// let nome = "Mauã"

// Indices de uma String
// 1 2 3 4 ----Posiçao
// 0 1 2 3 ----Indice
// M A U A

// console.log(nome)
// console.log(nome[3])
// console.log(nome[4 - 1])

// console.log(texto.length)
// .length mostra quantidade de caracteres
// console.log(nome[nome.length -1])

// Entrada e saida de dados
// alert("Seu antivirus está desatualizado")
// prompt("Digite sua senha para atualizar!")

// let nome = prompt("Digite seu nome:")
// const cpf = prompt("Digite seu cpf:")
// let animalFavorito = prompt("Digite seu animal favorito:")

//console.log(nome)
// alert(`Olá seu nome é ${nome}. Voce sabia ?`)

// Comparadores

// Maior que >
// Elemento da esquerda é MAIOR que o da direita ?
// 10 > 5 ===>true (sim/verdade)
// let num1 = 10
// let num2 = 5
// console.log (num1 > num2)

// Menor que <
// Elemento da esquerda é MENOR que o da direita?
// 10 < 5 ===> false (não/falso)

// Igual a: == ou ===
// Elemnto da esquerda é IGUAL ao da direita ?
// 10 == 10 ===> true (sim/ verdadeiro)

// Estitamente Igual a: ===
// Elemento da esquerda é tem o mesmo VALOR e TIPO do Elemento da direita?
// 10 === "10" ===>false( numero e string sao diferentes)

// Resposta O elemento da esqueda tem o tipo 'number e o elemento da direita e tem o tipo

// 10 == 10 - > true
// 10 ==="10" - > false

// Maior ou igual (>=) /Menor ou igual (<=)
// 10 >= 10 ===> TRUE (SIM/VERDADEIRO)
// 10 <= 10 ===>true (SIM/VERDADEIRO)

// Diferente que: ! = 
// 10 != 10 ===> false (não falso ** eles sao iguais)

// Estruturas Condicionais

let nome = "Mauã"

if (nome === "Mauã") {console.log("Olá Mauã! Seja muito bem vindo");
} else if (nome === "Thiago"){
    console.log("Olá Thiago. Voce é o mestre!");
} else {
    console.log("Olá voce que entrou...  ")
}

console.log("Saiu do if");

// let soma = 0

// soma++
// soma--

// not !
// and &&
// or ||  (alt = 1 2 4) 

// let nome  = "Mauãz"

//        true:                          false
//   true      false           false            false
// if ((10 > 9 || 10 > 15) && (nome === "Mauã" || nome === "Alex")) {
//     console.log("Entrou no if")
// }


// Funções

// Declaração de função:
// palavra reservada (function) - nome da função - parametros (pode ou não ter) - escopo (retorno da função - pode ou não ter)

// function umaFuncao () {
//     execute algo.
// }

// Função SEM parametros e SEM retorno:

function mensagemDeBoasVindas (){
    console.log("Olá, Bem vindo!")
}
// mensagemDeBoasVindas()

//  Função COM parametro e SEM retorno

let nome = "Mauã"

// console.log("Alo!")
// console.log(nome)

// function meuLog(parametro1, parametro2) {

//     let total = parametro1 + parametro2

//     console.log(total)

// }

// let parametro1 = 20
// let parametro2 = 5

// let total = parametro1 + parametro2
// console.log(total)

// let variavel =  `Olá ${nome}. Bem vindo!`


// meuLog(20, 4)
// meuLog(`Olá ${nome}. Bem vindo!`)


// Função SEM parametro e COM Retorno

function minhaFuncao () {
    let num1 = 4
    let num2 = 5

    return num1 * num2
}

// console.log(minhaFuncao())

// let retornoDaFuncaoExemplo = (minhaFuncao)

console.log(retornoDaFuncaoExemplo)

// Função COM parametrro e COM retorno

function minhaFuncao (parametro1, parametro2) {
    let total = parametro1 + parametro2

    return total
}

let retornoDaFuncaoExemplo = (minhaFuncao(10, 5))

console.log(retornoDaFuncaoExemplo)
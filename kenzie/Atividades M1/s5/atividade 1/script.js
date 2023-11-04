// Exercício 1
// Desenvolva uma função que mostre no console a frase "Hello World!".

function olaMundo (){
    const Hello = "Hello Word!";

    console.log(`primeiro ${Hello} utilizando função`)
}
 olaMundo()
olaMundo()


// Exercício 2
// Desenvolva uma função para saber se o(a) aluno(a) possui métricas para virar monitor(a).
// Requisitos:

// 100 de Entregas
// 100 de Entrevistas Técnicas
// 100 de Presença
// Se os requisitos forem atingidos, mostre no console "Possível monitor(a)." Se os requisitos não forem atingidos, mostre no console "Selecionar outro(a) aluno(a)."

function paraMonitor(){
    const entregas = 100;
    const entrevista = 100;
    const presenca = 100;
    
    if (entregas >= 100 && entrevista >= 100 && presenca >=100){
        console.log('Possível monitor(a).');
    } else{
        console.log('Selecionar outro (a) aluno (a)');
    }

}

paraMonitor()

// Exercício 3
// Desenvolva uma função que recebe três variáveis com valores numéricos e identifica qual deles é o maior.

function maiorNumero(){
    const num1 = 423;
    const num2 = 4222;
    const num3 = 22322;

    if(num1 > num2  && num1 > num3){
        console.log (`${num1} é o maior`);
    }  else if(num2 > num1  && num2 > num3){
        console.log (`${num2} é o maior`);
    } else if(num3 > num1 && num3> num2){
        console.log (`${num3} é o maior`);
    }
}

maiorNumero()

// Exercício 4
// Desenvolva uma função para mostrar no console a seguinte frase: "Meu nome é -nome e sobrenome-, e tenho -idade- anos".

// Declare as seguintes variáveis dentro da função:

// nome
// sobrenome
// idade
// Dica: Você pode utilizar template string.

function meuNome (){
    const nome = "Mauã";
    const sobrenome = "Santiago";
    const idade = "18";

    console.log (`Meu nome é ${nome} ${sobrenome}, e tenho ${idade} anos.`)
}
meuNome()
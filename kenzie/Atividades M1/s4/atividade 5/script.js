// Exercício 1
// Faça um algoritmo declarando as variáveis A, B, C iniciando-as com os respectivos valores 10, 20 e 30, e imprima na tela se a soma de A + B é menor que C.

let a = 10;
let b = 20;
let c = 30;
let ab = a + b;

 console.log(ab < c);

// Exercício 2
// Faça um algoritmo declarando uma variável com um valor numérico qualquer e informe na tela se esse numero é par ou ímpar.

let num = 48;
if (num % 2 == 0){
    console.log("O número é par");
    // alert("O número é par")
} else{
    console.log("O número é impar");
    alert("O número é impar");
}


// Exercício 3
// Declare duas variáveis que armazenam valores boleanos(lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.

let bool1 = true;
let bool2 = true;

if(bool1 == true && bool2 == true){
    console.log("Ambos são VERDADEIROS");
} else{
    console.log("Ambos são FALSOS");
}


// Exercício 4
// Declare três variáveis que armazenam valores numéricos inteiros e diferentes e mostre-os em ordem decrescente.

let num1 = 523;
let num2 = 23; 
let num3 =  15;

if(num1 > num2  && num2 > num3){
    console.log("Número 1 sendo maior")
    alert(num1 + '->' + num2 + '->'+ num3);
} 
else if(num1 < num2 && num1 > num3){
    console.log("Número 2 sendo maior")
    alert(num2 + '->' + num1 + '->'+ num3);
} 
else if (num3 > num2 && num2 > num1){
    console.log("Número 3 sendo maior")
    alert(num3 + '->' + num2 + '->'+ num1);
}


// Exercício 5
// Escreva um algoritmo que receba dois números. ⁠Alerte em tela qual o maior valor recebido:

let aS = 322;
let bS = 34;

if(aS > bS){
    alert('A é maior que B');
} else {
    alert('B é maior que A');
}
    

// Dica: Para alertar você pode utilizar a função alert(), ou se preferir, mostre no console através da função console.log


// if (height >= 1.70 &&  (barReps >=6 || barSeconds >=15) && abs >=41 runDistance >=3000 runTime<=720 swimDistance >=100 swimTime <=60 diveTime <=30



// height >= 1.60 barReps >=5 barSeconds >=12 abs >=41 runDistance >=4000 runTime<=900 swimDistance >=100 swimTime <=60 diveTime <=30


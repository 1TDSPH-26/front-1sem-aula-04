
//Declaração de variáveis com JS
//3 tipos = var / let / const
/*
*Comentário de Bloco
*/

//Declaração com var:
// var nome = "Fiap";
// console.log("A melhor faculdade : " + nome);

// var nr1 = 10;
// var nr2 = "5";
// console.log("Resultado da soma : " + ( nr1 + parseInt(nr2) ));

// var variavel = "Alê";
// console.log(typeof variavel);

// variavel = 100;
// console.log(typeof variavel);

// variavel = true;
// console.log(typeof variavel);

// variavel = null;
// console.log(typeof variavel);

// variavel = 'a';
// console.log(typeof variavel);

// variavel = {};
// console.log(typeof variavel);

// variavel = [];
// console.log(typeof variavel);

// variavel = 100.456;
// console.log(typeof variavel);

// //Criando um ternário e mexendo com cálculos:

// let idade = 17;

// const resultado = idade > 18 ? "Pode passear" : "Não pode passear";

// //Utilizando template literals `` com interpolação ${ }
// console.log(`O resultado é que ele ${resultado.toLowerCase()}.`);


//Diferença entre var e let:
// var nome1 = "Alê";
// let nome2 = "Carlos";

// if(true){
//     //Redeclarando as variáveis em escopo diferente
//     var nome1 = "Joaquim";
//     let nome2 = "das Couves";
// }

// //Imprimir as variáveis do escopo principal!
// console.log(nome1);
// console.log(nome2);

// Conversões:
// let numero = "123";
// let numero2 = 123;
// console.log(numero + numero2); // 123
// console.log(numero2 + parseInt(numero)); // 123
// console.log(parseFloat("12.5")); // 12.5
// console.log(numero.toString()); // “123”


// // Métodos de texto e de listas
// let frase = "Estão chegando as provas!";
// console.log(frase.length); // 25 – Retorna a quantidade de caracteres da string

// const frutas = ["maçã","banana","laranja","uva"];
// console.log(frutas.length); // 4 – Retorna a quantidade de itens na lista/array

// console.log(frase.indexOf("xx")); // 15 – Retorna a posição da string encontrada
// console.log(frutas.indexOf("limão")); // Retorna a posição na lista do item encontrado caso contrário, retorna -1

// console.log(frase.replace("provas", "férias")); // “Estão chegando as férias!”
// frutas.splice(1,1,"limão");//Em listas utilizamos o splice para remover e substituir elementos em determinadas posições.
// console.log(frutas);
// frutas[1] = "uva";
// console.log(frutas[1]);

// // Formatação de número:
// let valor = 123.456;
// console.log(valor.toFixed(2)); // “123.46”
// console.log(valor.toPrecision(4)); // “123.5”

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

// console.log(2 > 2);
// console.log(2 >= 2);
// console.log(2 < 2);
// console.log(2 <= 2);
// console.log(2 == 2);
// console.log(2 != 2);
// console.log(2 === 2);
// console.log(2 !== 2);


//Variáveis pós e pré incrementada.
// let x = 10;
// console.log(x++);
// console.log(x);
// console.log(++x);


// //Exemplo de acumulação:
// x += 5;
// console.log(x);

// x -= 5;
// console.log(x);

// x *= 5;
// console.log(x);

// x /= 5;
// console.log(x);

// x %= 5;
// console.log(x);

// x **= 5;
// console.log(x);

function soma(a,b){
    let resultado = a+b;
    console.log("Resultado da operação");
    return resultado;
}

// console.log("Executado no escopo principal!!!")

soma(2,2);
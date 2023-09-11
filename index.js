// Emilly Agatha

/* 
exercicio 1.
a) o codigo acima imprimi se Alice tem idade para dirigir.
b)A frase "Alice pode dirigir" vai ser impressa se sua idade for maior ou igual a 18.
Caso contrario sua idade tem que ser menor de 18.


exercicio 2
a) o objetivo desse codigo é informa que o animal é carnívoro
b)"Leão é um animal carnívoro"


exercicio 3
a) o código faz com que diga se o número 10 é maior ou menor que 5, e se ele é impar ou par.
b)"O número é maior do que 5", "O número é par"
*/


//B. Exercícios de Escrita de Código

1.
function idadeDoUsuario (idade){
    if (idade >= 18){
        return "você é maior de idade";
    }
    else{
        return "Você é menor de idade";
    }

}

console.log(idadeDoUsuario(Number(prompt("Qual a sua idade?"))));


2.
function turnoUsuario (turno){
    if(turno === "m"){
        return "Bom Dia";
    }
    else if(turno === "t"){
        return "Boa Tarde";
    }
    else if(turno === "n"){
        return "boa Noite";
    }
    else{
        return " nenhum turno encontrado";
    }
}
console.log(turnoUsuario(prompt("Qual turno você estuda ou trabalha? Digite t para tarde, n para noturno e m para matutino")));


3.

let turnoUsuario =
function (turno){
    switch(turno) {
        case 'm':
            return 'Boa Dia'; 
            break
        case 't':
            return 'Boa Tarde'
            break
        case 'n':
            return 'Boa Noite';
            break
        default:
            return 'nenehum turno encontrado'
            break;
}
}
console.log(turnoUsuario(prompt("Qual turno você estuda ou trabalha? Digite t para tarde, n para noturno e m para matutino")));


4.
const alunoObj = { 

    nome: prompt('Qual seu nome?'),
    idade: Number(prompt('Qual a sua idade')),
    tipoDeCurso: Boolean(prompt('Voce fez algum  curso: ')),
    temBolsa: Boolean(prompt('Você tem alguma bolsa de estudos?'))

}

function candidatar (aluno){

    if(aluno.idade < 30){
          if(aluno.tipoDeCurso === true){
                if (aluno.temBolsa === false){
             
                }
          }
        return 'Você pode se candidatar a uma bolsa de estudos!'   
    }
    else{
        return '"Desculpe, você não atende aos requisitos para a bolsa'
    }
}   
 
console.log(candidatar(alunoObj));


5.
const produtoObj = {

    nome:'sapato',
    preco: 100,
    desconto: 20,
    fretegratis: true
}
function precoFinal (produto){

let precoComDesconto = (produto.preco - ((produto.preco * produto.desconto)/100));
    if(produto.fretegratis){
      if(produto.desconto > 0){
        return precoComDesconto + ' e frete gratis'
      }else{
        return 'sem desconto com frete';
      }
    }else{
        if(produto.desconto > 0){
            return 'sem frete com desconto';
        }
        else{
            return 'sem frete sem descoto';}
    }
}
    

        

console.log(precoFinal(produtoObj));

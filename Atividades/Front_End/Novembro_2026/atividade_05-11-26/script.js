let valueConsumo = Number(
  prompt("Qual é o valor total da conta consumida na mesa?"),
);
let porcentageGorjeta = Number(
  prompt("Qual é a porcentagem da gorjeta, sobre o total consumido?"),
);
let quantPessoa = Number(prompt("Com quantas pessoas a conta será dividida?"));

let gorjeta = valueConsumo * (porcentageGorjeta / 100);
let contaTotal = valueConsumo + gorjeta;
let contaDividida = contaTotal / quantPessoa;

alert(
  `--- Resumo da Conta --- \nConsumo: R$ ${valueConsumo} \nGorjeta: R$ ${gorjeta} \nTotal com Gorjeta: R$ ${contaTotal} \nDivisão por Pessoa (${quantPessoa}): R$ ${contaDividida.toFixed(2)}`,
);

//------------------------------------------------s

let notaUm = 7.5;
let notaDois = 8.0;
let notaTreis = 6.5;

let mediaFinal = (notaUm + notaDois + notaTreis) / 3;

console.log(`Valor da Media Final ${mediaFinal}`);

let valorA = 10;
let valorB = "10";

if (valorA == valorB) {
  console.log("True");
} else {
  console.log("false");
}
if (valorA === valorB) {
  console.log("True");
} else {
  console.log("false");
}

//-----------------------------------------------------------------------

let idade = Number(prompt("Qual é a sua idade?"));
let altura = Number(prompt("Qual é a sua altura?"));
let podeEntrar = null;

if (idade >= 16 && altura >= 1.6) {
  podeEntrar = true;
  alert(`A pessoa está apta: ${true}`);
} else {
  podeEntrar = false;
  alert(`A pessoa está inapta: ${false}`);
}

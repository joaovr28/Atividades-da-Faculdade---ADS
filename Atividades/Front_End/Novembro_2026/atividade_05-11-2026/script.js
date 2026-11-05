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

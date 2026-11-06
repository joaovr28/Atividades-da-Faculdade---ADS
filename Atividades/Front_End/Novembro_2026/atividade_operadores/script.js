// let notaUm = 7.5;
// let notaDois = 8.0;
// let notaTreis = 6.5;

// let mediaFinal = (notaUm + notaDois + notaTreis) / 3;

// console.log(`Valor da Media Final ${mediaFinal}`);

// let valorA = 10;
// let valorB = "10";

// if (valorA == valorB) {
//   console.log("True");
// } else {
//   console.log("false");
// }
// if (valorA === valorB) {
//   console.log("True");
// } else {
//   console.log("false");
// }

//-----------------------------------------------------------------------

//atividade Classroom

// let corPulseira = "amarela";
// let idadePaciente = 18;
// let gestante = false;

// if (
//   corPulseira === "vermelha" ||
//   corPulseira === "amarela" ||
//   corPulseira === "verde"
// ) {
//   console.log(`sua pulseira é da cor ${corPulseira}`);
// } else {
//   console.log("digite uma cor dentre o vermelho, amarelo ou verde");
// }

// function verificaCor() {
//   if (corPulseira === "vermelho") {
//     console.log("Atendimento de Emergência: Sala de trauma imediata");
//   } else if (
//     (corPulseira === "amarela" && idadePaciente >= 60) ||
//     gestante === true
//   ) {
//     console.log("Atendimento Urgente: Prioridade Especial Preferencial");
//   } else {
//     console.log("Atendimento Urgente: Fila padrão amarela");
//   }
//   //Pulseira verde
//   let corPulseiraVerde = (corPulseira == "verde") ? "Encaminhar para Pediatria" : ""

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

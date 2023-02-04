// #7DaysOfCode - Desafio 7 - Funções

alert("Calculadora do Jurandi");
const pergunta = prompt("Gostaria de fazer uma continha? `sim` ou `sair`?");
const conta = [
  "soma",
  "multiplicação",
  "divisão",
  "subtração",
  "resto divisão",
  "sair"];

while(pergunta === "sim") {
  const operacao = prompt(`Qual o tipo de operação gostaria de utilizar? "soma", "multiplicação", "divisão", "subtração", "resto divisão" ou "sair"?`);

  if(operacao == "sair" || pergunta == "sair") {
    alert("Até a próxima!!!");
    break;
  }

  num1 = prompt("Digite o 1º número?");
  num2 = prompt("Digite o 2º número?");

  if(operacao === "soma") {
    alert(soma(num1, num2));
  }else if(operacao === "multiplicação") {
    alert(multiplicacao(num1, num2));
  }else if(operacao === "divisão") {
    alert(divisao(num1, num2));
  }else if(operacao === "subtração") {
    alert(subtracao(num1, num2));
  }else if (operacao === "resto divisão") {
    alert (restoDiv(num1,num2))
  }
}

function soma(num1, num2) {
  let conta = parseInt(num1) + parseInt(num2);
  return conta;
}
function multiplicacao(num1, num2) {
  let conta = num1 * num2;
  return conta;
}
function divisao(num1, num2) {
  let conta = num1 / num2;
  return conta;
}
function subtracao(num1, num2) {
  let conta = num1 - num2;
  return conta;
}
function restoDiv(num1, num2) {
    let conta = num1 % num2;
    return conta;
  }
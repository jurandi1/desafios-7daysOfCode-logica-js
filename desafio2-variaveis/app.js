// #7DaysOfCode - Desafio 2 - Variaveis 
alert("Bem vindo!");

const texto = document.querySelector("#texto")
const texto2 = document.querySelector("#texto2")
const nome = prompt("Qual o seu nome?")
const idade = prompt("Qual a sua idade?")
const linguagem = prompt("Qual a linguagem de programação você está estudando?")

texto.innerHTML = `Olá ${nome}, você tem ${idade} anos e já está estudando ${linguagem}!!!`
console.log(texto.innerHTML)

  const pergunta = prompt(`Você gosta de estudar ${linguagem}? Responda com 1 para Sim ou 2 para Não!`)

  if(pergunta == 1) {
    texto2.innerHTML = `Muito bom ${nome}! Continue estudando ${linguagem} e você terá muito sucesso!!`
    console.log(`Muito bom ${nome}! Continue estudando ${linguagem} e você terá muito sucesso!!`)
  }
  if(pergunta == 2) {
    texto2.innerHTML = `Ahh que pena que não está gostando de estudar ${linguagem} ${nome}... Já tentou aprender outras linguagens?`
    console.log(`Ahh que pena que não está gostando de estudar ${linguagem} ${nome}... Já tentou aprender outras linguagens?`)
  }
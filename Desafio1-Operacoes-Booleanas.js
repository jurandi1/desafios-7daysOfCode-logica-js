// #7DaysOfCode - Dia 1 - Igualdade de valores

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

/* 
Se usarmos o operador “==” em uma condição, saberemos que ela só será verdadeira se o valor da esquerda
for o mesmo valor da direita. Mas suponha que seja preciso fazer essa validação tendo certeza de que o 
número da direita é realmente um número, e não apenas possui o mesmo caractere.
Então usamos o símbolo de “idêntico a” (===). Ele não só compara os valores dos dois lados da equação, 
como também verifica se eles são do mesmo tipo.

Pressione CRTL e clique com o botão esquerdo do mouse em cima do link para acessa-lo ou copie e cole no navegador. :)
Informação retirada do seguinte Artigo: https://www.alura.com.br/artigos/operadores-matematicos-em-javascript?gclid=Cj0KCQiA_8OPBhDtARIsAKQu0gYUqZqgonpXyEP1_hpUl58wYAk_P3Ze4VWrxo9ftkFW9CLYOMyjO1caAlrzEALw_wcB&utm_source=ActiveCampaign&utm_medium=email&utm_content=%237DaysOfCode+-+L%C3%B3gica+JS+1%2F7%3A+Opera%C3%A7%C3%B5es+Booleanas&utm_campaign=%5BALURA+%237days+Of+Code%5D+%28L%C3%B3gica+de+Programa%C3%A7%C3%A3o+-+JavaScript%29+Dia+1%3A+Comparando+Valores&vgo_ee=M0Vn3BPYFjtqTG9U43MIOL35hO7C%2FF3J%2FgQB9Uu3XAY%3D
*/

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez === stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
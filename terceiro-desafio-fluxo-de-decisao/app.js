// #7DaysOfCode - Desafio 3 - Fluxo de decisão
const texto = document.querySelector("#texto");
const texto2 = document.querySelector("#texto2");


const areaInicial = prompt("Qual área gostaria de seguir? `Front-End` ou `Back-End`?");
let dominio = "";

if(areaInicial === "Front-End") {
  dominio = prompt(`Que bom que escolheu seguir com ${areaInicial}, agora gostaria de aprender "React" ou "Vue"?`);
} else if(areaInicial === "Back-End") {
  dominio = prompt(`Que bom que escolheu seguir com ${areaInicial}, agora gostaria de aprender "C#" ou "Java"?`);
} else {
  dominio = prompt("Você provavelmente digitou algo errado!!");
}


const FullOuEspe = prompt(`Gostaria de se "Especializar" em ${areaInicial} ou gostaria de seguir se desenvolvendo para se tornar "Fullstack"?`);

if(FullOuEspe === "Especializar") {
  alert(`Continue se especializando em ${areaInicial}, ainda tem muita coisa para se aprender em ${dominio}!!!`);
} else if (FullOuEspe === "Fullstack"){
  alert(`Explore o mundo além do ${areaInicial}, existem muitas outras linguagens para conhecer!!!`);
}

const perguntaFinal = prompt("Ainda existe outra tecnologia que gostaria de conhecer? Responda ok se sim!!!")

for(i = "ok"; perguntaFinal === i;) {
  let qual = prompt("Qual seria?");
  alert(`Muito bem, ${qual} é muito interessante de se aprender!`);
  const perguntaFinal = prompt("Ainda existe outra tecnologia que gostaria de conhecer? Responda ok se sim!!!");
  if(perguntaFinal === "não" || perguntaFinal === "nao") {
    alert (`Obrigado por jogar, continue sua jornada e terá um futuro incrível!`);
    break;
  }
}
// #7DaysOfCode - Desafio 5 - Arrays e coleções

let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let limpeza = [];
let item = "";
let categoria = "";

let inserirMais = "sim";

while(inserirMais != "não") {
    inserirMais = prompt("Você deseja adicionar um item na lista de compras? Responda 'sim' ou 'não'.");
    while (inserirMais != "sim" && inserirMais != "não") { 
	alert(`Operação não reconhecida!`);
        inserirMais = prompt("Você deseja adicionar uma item na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (inserirMais === "não"){ 
        break;
    }
	
    item = prompt("Qual item você deseja inserir?");
    categoria = prompt("Em qual categoria essa item se encaixa: 'frutas', 'laticínios', 'doces', 'congelados' ou 'limpeza?'");

    if(categoria === 'frutas'){
        frutas.push(item);
    } else if (categoria === 'laticínios'){
        laticinios.push(item);
    } else if (categoria === 'doces'){
        doces.push(item);
    } else if (categoria === 'congelados'){
        congelados.push(item);
    } else if (categoria === 'limpeza'){
        limpeza.push(item);
    } else {
        alert("Insira uma categoria válida.")        
    }

}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n  Limpeza: ${limpeza}`);
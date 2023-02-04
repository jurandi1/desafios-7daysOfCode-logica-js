// #7DaysOfCode - Desafio 6 - Remoção de Arrays

let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let limpeza = [];
let item = "";
let categoria = "";
let remover = "";

let inserirMais = "sim";

while(inserirMais != "não") {

    if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0 && limpeza.length === 0){
        inserirMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    } else {
        inserirMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'.");
    }
    
    while (inserirMais != "sim" && inserirMais != "não" && inserirMais != "remover") { 
	alert(`Operação não reconhecida!`);
        inserirMais = prompt("Você deseja adicionar uma item na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (inserirMais === "não"){ 
        break;
    }
	
    if(inserirMais === "sim") {
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
    } else if(inserirMais === "remover"){ //Removendo itens
        if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0 && limpeza.length === 0){
            alert(`A lista está vazia!`);
        } else { 
            remover = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n Limpeza: ${limpeza}\n\n Qual produto você deseja remover?`);
            if(frutas.indexOf(remover) != -1){
                frutas.splice(frutas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if(laticinios.indexOf(remover) != -1){
                laticinios.splice(laticinios.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if (doces.indexOf(remover) != -1){
                doces.splice(doces.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if (congelados.indexOf(remover) != -1){
                congelados.splice(congelados.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if (limpeza.indexOf(remover) != -1){
                limpeza.splice(limpeza.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else {
                alert(`Não foi possível encontrar o item dentro da lista!`)
            }
      
        }
    }
    
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n  Limpeza: ${limpeza}`);
// quest 9
let palavras = "Aulas de biologia são muito boas";
let somaTams = palavras.split(" ").reduce((soma, palavra) => soma + palavra.length, 0);
console.log("Soma dos tamanhos:", somaTams);
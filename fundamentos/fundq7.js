// quest 7
let frase = "Batata é muito bom";
let novaFrase = frase.split(" ").map(palavra => 
    palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase()
).join(" ");
console.log(novaFrase);
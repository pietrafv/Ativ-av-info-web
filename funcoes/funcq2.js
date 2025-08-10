// quest 2
function contarVogaisConsoantes(frase) {
    let vogais = 0, consoantes = 0;
    let letras = frase.toLowerCase().replace(/[^a-z]/g, '');
    for (let letra of letras) {
        if ("aeiou".includes(letra)) vogais++;
        else consoantes++;
    }
    console.log("Vogais:", vogais);
    console.log("Consoantes:", consoantes);
}
contarVogaisConsoantes("Hoje é domingo");

// quest 5
function maiorPalavra(frase) {
    let palavras = frase.split(" ");
    let maior = "";
    for (let p of palavras) {
        if (p.length > maior.length) maior = p;
    }
    return maior;
}
console.log(maiorPalavra("O ornitorrinco é um dos únicos mamíferos ovíparos que existem"));
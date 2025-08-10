// quest 6
let numeros = [1, 3, 1, 3, 3, 5, 1];
let contagem = {};
let max = 0, maisRepet;
for (let n of numeros) {
    contagem[n] = (contagem[n] || 0) + 1;
    if (contagem[n] > max) {
        max = contagem[n];
        maisRepet = n;
    }
}
console.log("Mais repetido:", maisRepet);
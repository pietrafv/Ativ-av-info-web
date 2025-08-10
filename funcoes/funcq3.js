// quest 3
function maiorMenor(lista) {
    let maior = Math.max(...lista);
    let menor = Math.min(...lista);
    return [maior, menor];
}
console.log(maiorMenor([8, 3, 15, 1, 20, 6, 4, 7, 11, 10]));
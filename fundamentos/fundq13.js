// quest 13
let listaNum = [1, 2, 3, 4];
let somaCubos = listaNum.reduce((total, num) => total + Math.pow(num, 3), 0);
console.log("Soma dos cubos:", somaCubos);
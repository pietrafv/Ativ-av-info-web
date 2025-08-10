// quest 4
let alunos = [
    ["João", [70, 80, 90]],
    ["Maria", [40, 50, 60]],
    ["Jorge", [100, 100, 100]],
    ["Ana", [65, 70, 75]],
    ["Mário", [30, 40, 50]]
];
for (let [nome, notas] of alunos) {
    let media = notas.reduce((a, b) => a + b, 0) / notas.length;
    let status = media >= 70 ? "Aprovado" : "Reprovado";
    console.log(`${nome}, média ${media.toFixed(1)}, ${status}.`);
}
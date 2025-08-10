// quest 10
let nomeCompl = "Pietra Fernandes Vasconcelos";
let partes = nomeCompl.split(" ");
let resultNome = partes.slice(1).map(p => p[0] + ".").join(" ") + " " + partes[0];
console.log(resultNome);
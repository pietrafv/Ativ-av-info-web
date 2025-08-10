// questão 1
let hoje = new Date();
let diaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
console.log("Hoje é: " + diaSemana[hoje.getDay()]);
console.log("A hora atual é: " + hoje.toTimeString().split(" ")[0]);
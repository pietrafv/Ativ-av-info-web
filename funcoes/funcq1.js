// quest 1
function invertNum(num) {
    let texto = String(num);
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        switch (texto[i]) {
            default:
                invertido += texto[i];
        }
    }
    return invertido;
}
console.log(invertNum(12356));
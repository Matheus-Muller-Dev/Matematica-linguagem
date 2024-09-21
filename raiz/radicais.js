function calcularRadicais(numero, indice){
    if (indice < 0){
        return NaN;
    }

    const radical = Math.pow(numero, 1 / indice);

    return radical;
}

const numero = 8;
const indice = 3;
const radical = calcularRadicais(numero, indice);
console.log(`${numero} é o radicando, ${indice} é o indicice e ${radical} é a raiz cúbica de 8`);
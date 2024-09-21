// a logica simples de criar porcetagem automatica para o cliente
// primeiro vamos pegar o número do cliente e caucular os valores, e vamos usar o html

// porcetagem de valores altos, tanto inteiros ou números quebrados

// (valor da porcetagem / 100) * valor total

// ideias:
// filtra preços e descrição de produtos

function cauculoPorcetagem(porcetagem, valorTotal){
    return (porcetagem / 100) * valorTotal;
}

const valorTotal = 200;
const porcetagem = 20;

const resultado = cauculoPorcetagem(porcetagem, valorTotal);
console.log(`${porcetagem} de ${valorTotal} é ${resultado}`);

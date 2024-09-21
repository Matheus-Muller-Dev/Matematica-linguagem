const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número para verificar se é par ou impar, ', (parimpar) => {
    if((parimpar) % 2 === 0) {
        console.log('Este número é par');
    } else {
        console.log('Este número é impar');
    }
});;
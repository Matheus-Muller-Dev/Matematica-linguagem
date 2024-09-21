// área do círculo: pi * raio^2
//  cumprimento da circunferencia: 2 * pi * raio

// formula - cumprimento : 2 * Math.PI * raio
// formula - area : Math.PI * raio * raio 

// utilizamos o modúlo readline para usuario dar entrada no terminal.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Raio do circulo', (raio) => {
    raio = parseFloat(raio);
    //operação para receber o cumprimento e a área
    const cumprimento = 2 * Math.PI * raio;
    const area = Math.PI * raio * raio;
    
    console.log('Cumprimento da circufenrencia: ', cumprimento);
    console.log('area de circunferencia: ', area);

});
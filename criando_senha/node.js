// Função para gerar um número aleatório entre um mínimo e um máximo, incluindo ambos

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para gerar uma senha aleatória
function gerarSenha() {
    let tamanho = 10; // Define o tamanho da senha
    let senha = ''; // Inicializa a string da senha

    // Gera a metade inicial da senha com números aleatórios
    for (let i = 0; i < tamanho / 2; i++) {
        senha += getRandomArbitrary(0, 9).toString(); // Adiciona um número aleatório à senha
    }

    // Define os conjuntos de caracteres a serem usados na senha
    const meu_valor = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%&*()_+';

    // Concatena os conjuntos de caracteres em uma única string
    const caracteres = meu_valor + numeros + simbolos;

    // Gera a metade restante da senha com caracteres aleatórios
    for (let i = 0; i < tamanho / 2; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length)); // Adiciona um caractere aleatório à senha
    }

    // Embaralha a senha para maior aleatoriedade
    senha = senha.split('').sort(() => Math.random() - 0.5).join('');

    // Exibe a senha gerada
    document.querySelector('.senha').textContent = senha;
}

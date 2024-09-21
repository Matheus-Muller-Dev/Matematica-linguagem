// função primeNumber que aceita o parametro number
function isPrime(number) {
    // Verifica se o número é menor que 2, pois números menores que 2 não são primos
    if (number < 2) {
        return false;
    }

    // Itera de 2 até a raiz quadrada do número, verificando se há algum divisor
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            return false;// Se houver um divisor, o número não é primo 
        }
    }

    return true;// Se nenhum divisor for encontrado, o número é primo


}

// exemplo de uso da função
console.log(isPrime(2));
console.log(isPrime(11));
console.log(isPrime(162));
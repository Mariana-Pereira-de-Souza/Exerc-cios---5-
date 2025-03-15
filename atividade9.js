function somaArray(numeros) {
    let soma = 0; // Iniciando a variável soma com 0 para acumular os resultados

    // Corrigindo a condição do loop, usando .length para obter o número de elementos no array
    for (let i = 0; i < numeros.length; i++) {
        soma += 2 * numeros[i]; // Corrigindo para acumular a soma do dobro dos números
    }

    return soma; // Retorna a soma dos valores dobrados
}

console.log(somaArray([1, 2, 3, 4])); // Saída esperada: 2 + 4 + 6 + 8 = 20

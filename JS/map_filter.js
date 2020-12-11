const pets = [
    {
        nome: 'Zeus',
        tipo: 'Cachorro',
        idade: 12
    },
    {
        nome: 'Bichano',
        tipo: 'Gato',
        idade: 7
    },
    {
        nome: 'Louro',
        tipo: 'Ave',
        idade: 2
    }
]
console.log('Todos os animais: ' + JSON.stringify(pets));

//Filtrando...
const animaisFiltrados = pets.filter((pet) => {
    return pet.idade < 10;
});
console.log('Animais filtrados: ' + JSON.stringify(animaisFiltrados));
//Map...
const soNomes = pets.map((pet) => {
    return pet.nome;
});
console.log('Só os nomes com o Map(): ' + soNomes); 
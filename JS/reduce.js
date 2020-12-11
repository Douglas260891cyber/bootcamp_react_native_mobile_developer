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
const reduce = pets.reduce((total, pet) => {
    return total += pet.idade;
}, 0)// O zero é o valor inicial do total.
console.log(`Soma das idades usando o reduce(): ${reduce}`);
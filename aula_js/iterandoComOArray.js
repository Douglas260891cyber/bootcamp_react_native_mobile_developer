

const arr = new Array('Alana', 'Bruno', 'Carolina', 'Douglas', 'Ester', 'Fabiane');
const number = new Array(1, 2, 3, 4, 5, 6);
//Foreach
arr.forEach((value, index) => { console.log(`${index}: ${value}`) });
//Map
const novoArray = number.map(value => value * 2);
console.log(novoArray);
//Entries
const arrInterator = arr.entries();//Entries -> cria um novo vetor a partir de um já existente... 
console.log(arrInterator.next());//Cada vez que o next for chamado, será passado para o indice seguinte... 
console.log(arrInterator.next());
console.log(arrInterator.next());
console.log(arrInterator.next());
//Filter...
const newArray = number.filter(value => value > 3); 
console.log(`Maiores que 3 são: ${newArray}`); 
//Includes -> descobre se tal valor está dentro de um vetor...
let existeBruno = arr.includes('Bruno'); 
let existeAlceu = arr.includes('Alceu'); 
console.log(`Bruno existe? ${existeBruno}`); 
console.log(`Alceu existe? ${existeAlceu}`); 
//Some -> testa se um dos valores for verdadeiro...
let existePar = number.some(value => value % 2 == 0);
console.log(`Existe par no array? ${existePar}`); 
//Reduce...
const somaTotal = number.reduce((total, valor) => total += valor, 0) //O 0(zero) significa que o total iniciará com o valor 0.
console.log(somaTotal); 

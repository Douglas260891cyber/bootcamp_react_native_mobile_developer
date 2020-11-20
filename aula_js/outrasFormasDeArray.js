//Array.of -> permite receber typos distintos (number, strings, etc.).
const arrayDiverso = Array.of(1, 2, 'texto1', 'texto2'); 
console.log('Conteúdo do array: ' + arrayDiverso); 

arrayDiverso.push('adicionei'); 
console.log(arrayDiverso.length); 
console.log(arrayDiverso);

const removido = arrayDiverso.pop(); 
console.log('Valor removido: ' + removido); 

//Unshift -> adiciona valor no inicio.
arrayDiverso.unshift('addNoInicio'); 
console.log(arrayDiverso); 
//Shift -> remove valor no inicio.
arrayDiverso.shift('removeNoInicio'); 
console.log(arrayDiverso); 

const arr1 = new Array(1,2,3,4,5); 
const arr2 = new Array(6,7,8,9,10); 
const arrayUnido = arr1.concat(arr2); 
console.log('Array unido pelo concat: ' + arrayUnido); 

//Slice -> fatia o array. Primeiro oarâmetro é o inicio e o segundo o final.
console.log(arr1.slice(1,4));

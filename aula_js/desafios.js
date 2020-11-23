//Desafio 2...
let N = 3;
const X = [3, -8, 0];
const Y = [-2, 0, 8];
for (let i = 0; i < N; i++) {
    if (Y[i] == 0) {
        console.log('divisao impossivel');
    }
    else {
        let divisao = X[i] / Y[i];
        console.log(divisao.toFixed(1));
    }
}

//Desafio 3...
let quilometros = parseInt(30);
let minutos = quilometros * 2; // Digite aqui o calculo dos minutos
console.log(minutos + " minutos");

//Desafio 4...
let A = [11, -11, 11];
let B = [7, 6, -2];
let D = 0;
for (let i = 0; i < 3; i++) {
    if (A[i] > 0 && B[i] > 0) {
        D = A[i] + B[i];
        console.log('X = ' + D);
    } else if (A[i] < 0) {
        D = A[i] + B[i];
        console.log('X = ' + D);
    } else if (B[i] < 0 && A[i] > 0) {
        D = A[i] - (-B[i]);
        console.log('X = ' + D);
    }
}
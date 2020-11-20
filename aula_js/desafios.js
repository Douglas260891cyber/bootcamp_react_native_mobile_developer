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
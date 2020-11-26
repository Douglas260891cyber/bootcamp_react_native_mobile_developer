//document.querySelector('.dino') -> pega o elemento 'dino' do html e joga para dentro
//da const 'dino'
const dino = document.querySelector('.dino');
//O comando abaixo informa ao computador que uma tecla foi pressionada | document.addEventListener -> cria um evento
//keyup -> executa a função quando o botão for solto | evento.keyCode === 32 -> se o código do botão for executado (32 = barra), então execute
const lidandoComkeyup = evento => {
    if (evento.keyCode === 32) {
        jump();
    }
}
//Programando o pulo do dinossauro
function jump() {
    let position = 0;
    let upInterval = setInterval(() => { //150 px
        if (position >= 150) {
            clearInterval(upInterval); //Limpa o intervalo
            //Descer.
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            //Subir
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20); //A cada 20 milisegundos, o dino irá subir 20 px.
}
document.addEventListener('keyup', lidandoComkeyup); 
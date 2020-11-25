//document.querySelector('.dino') -> pega o elemento 'dino' do html e joga para dentro
//da const 'dino'
const dino = document.querySelector('.dino'); 
//O comando abaixo informa ao computador que uma tecla foi pressionada | document.addEventListener -> cria um evento
//keyup -> executa a função quando o botão for solto | evento.keyCode === 32 -> se o código do botão for executado (32 = barra), então execute
const lidandoComkeyup = evento => {
    if(evento.keyCode === 32){ 
        console.log('Precionou uma tecla!!!'); 
    }
}
document.addEventListener('keyup', lidandoComkeyup); 
//document.querySelector('.dino') -> pega o elemento 'dino' do html e joga para dentro
//da const 'dino'
const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let estaPulando = false;
let position = 0; //Posição do pulo do dino.
//O comando abaixo informa ao computador que uma tecla foi pressionada | document.addEventListener -> cria um evento
//keyup -> executa a função quando o botão for solto | evento.keyCode === 32 -> se o código do botão for executado (32 = barra), então execute
const lidandoComkeyup = evento => {
    if (evento.keyCode === 32) {
        if (!estaPulando) { //Se ele não estiver pulando, irá pular, senão, não irá. Isto evita que ele pule novamente antes de chegar ao "solo". 
            jump();
        }
    }
}
//Programando o pulo do dinossauro
function jump() {
    estaPulando = true;
    let upInterval = setInterval(() => { //150 px
        if (position >= 150) {
            clearInterval(upInterval); //Limpa o intervalo
            //Descer.
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    estaPulando = false;
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

//CRIANDO CACTUS
function creatCactus() {
    const cactus = document.createElement('div') //Criando elementos HTML com JS. 
    let cactusPosition = 1300;
    let randomTime = Math.random() * 6000; //Gera números aleatórios que representará de quanto em quanto tempo(intervalo) que um cactus será criado.

    cactus.classList.add('cactus');
    cactus.style.left = 1300 + 'px';
    background.appendChild(cactus);
    //Mover o cactus...
    let leftInterval = setInterval(() => {
        //Se o cactus saiu da tela...
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus)
            //60 é o tamanho do dino. 0 é o limite da tela. Então se a posição do cactus for menor que 60 e 
            //maior que 0, significa que o cactus bateu no dino.
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(leftInterval); //Para o cactus.
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20)
    //SetTimeOut executa uma determinada função depois de um determinado tempo.
    setTimeout(creatCactus, randomTime); //Criação do cactus pelo intervavo definido acima...
}
creatCactus(); //Chamar a função para criar o cactus no começo do jogo.
document.addEventListener('keyup', lidandoComkeyup);
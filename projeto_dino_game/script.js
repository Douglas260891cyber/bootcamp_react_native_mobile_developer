const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let estaPulando = false;
let position = 0; //Posição do pulo do dino.

const lidandoComkeyup = evento => {
    if (evento.keyCode === 32) {
        if (!estaPulando) {  
            jump();
        }
    }
}
//Programando o pulo do dinossauro
function jump() {
    estaPulando = true;
    let upInterval = setInterval(() => { 
        if (position >= 150) {
            clearInterval(upInterval); 
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
    }, 20); 
}

//CRIANDO CACTUS
function creatCactus() {
    const cactus = document.createElement('div')
    let cactusPosition = 1300;
    let randomTime = Math.random() * 6000; 

    cactus.classList.add('cactus');
    cactus.style.left = 1300 + 'px';
    background.appendChild(cactus);
    //Mover o cactus...
    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus)
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(leftInterval); //Para o cactus.
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20)
    setTimeout(creatCactus, randomTime); 
}
creatCactus(); 
document.addEventListener('keyup', lidandoComkeyup);
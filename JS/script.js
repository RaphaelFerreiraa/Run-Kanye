document.addEventListener('DOMContentLoaded', () => {
    const player = document.querySelector('.player');
    const turt = document.querySelector('.inimigo');

    const pulo = () => {
        player.classList.add('pulo');

        setTimeout(() => {
            player.classList.remove('pulo')
        }, 500);
    }

    const loop = setInterval(()=>{

        const posicao = turt.offsetLeft;
        const posicaoPlayer = +window.getComputedStyle(player).bottom.replace('px', '')

        if(posicao <= 90 && posicao > 0 && posicaoPlayer < 60){
            turt.style.animation = 'none'
            turt.style.left = `${posicao}px`

            player.style.animation = 'none'
            player.style.bottom = `${posicaoPlayer}px`

            player.src = './img/gameOver/EX1.gif'
            player.style.width = '200px'
            player.style.marginLeft = '-0px'

            clearInterval(loop);
        }

    }, 10)
    
    addEventListener('keydown', pulo);
});



document.addEventListener("keydown", function(event) {
    var audio = document.getElementById("song");
    if (event.key === 'Backspace' || event.key === 'Delete') {
      audio.play();
    } else if(event.key === 'End'){
        audio.pause()
    }
    audio.loop = true;
});
let quantImg = document.querySelectorAll('.s-img').length;
let slidWidth = document.querySelector('.slider').clientWidth;
let slidAtual = 0;
document.querySelector('.s-width').style.width = (slidWidth * quantImg) + 'px';
document.querySelector('.controlers').style.width = slidWidth + 'px';
document.querySelector('.controlers').style.height = document.querySelector('.slider').clientHeight + 'px';

function mudarImagem(){
    let larguraImg = document.querySelector('.s-img').clientWidth;
    let margem = (slidAtual * larguraImg);
    document.querySelector('.s-width').style.marginLeft = '-' + margem + 'px';
}

function seguirImagem(){
    slidAtual++;
    if(slidAtual > (quantImg - 1))
        slidAtual = 0;
    mudarImagem();
}

function voltarImagem(){
    slidAtual--;
    if(slidAtual < 0)
        slidAtual = quantImg - 1;
    mudarImagem();
}
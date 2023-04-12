
function tocaSom(seletorAudio){
    elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName ==='audio'){
        elemento.play();
    }
    else{
        console.log('erro de elemento ou seletor');
    }
}

const listadeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listadeTeclas.length; i++) {
    const tecla = listadeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);
    tecla.onclick =  function () {
        tocaSom(idAudio)
    }
    
    tecla.onkeydown = function (event) {
    //console.log(event);
    if(event.code === 'Enter'|| event.code ==='Space'){
        tecla.classList.add('ativa');
    }
}
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}


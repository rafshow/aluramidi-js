
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
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
    
    tecla.onkeydown = function () {
    tecla.classList.add('ativa');
    
}
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}


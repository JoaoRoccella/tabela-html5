function toggleEstilos() {
    const linkEstilos = document.querySelector('#linkEstilos');
    
    //toggle => alterna
    if (linkEstilos.hasAttribute('disabled')) {
        linkEstilos.removeAttribute('disabled');
        botao.innerHTML = 'Remover estilos';
    } else {
        linkEstilos.setAttribute('disabled', '');
        botao.innerHTML = 'Aplicar estilos';
    }

}

const botao = document.querySelector('#botao');
botao.addEventListener('click', toggleEstilos);
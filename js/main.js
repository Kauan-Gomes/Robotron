

const controle = document.querySelectorAll('.controle-ajuste')

controle.forEach ((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);

    })
})


function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('.controle-contador');
    
    // ParseiInt servre para converter o valor para Inteiro ao inves de String
    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}


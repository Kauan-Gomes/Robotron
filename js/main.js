const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const controle = document.querySelectorAll('[data-controle]')
const estatistica = document.querySelectorAll('[data-estatistica]')



controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca, evento.target.dataset.controle);
    })
})


function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');

    // ParseiInt serve para converter o valor para Inteiro ao inves de String
    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca, operacao) {
    estatistica.forEach((elemento) => {
        if (operacao === '-') {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }
        else {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }

    })
}



const coresBotoes = document.querySelectorAll("[data-cor]")

    coresBotoes.forEach((elemento) => {
        elemento.addEventListener('click', (event) => {
            const cor = event.target.dataset.cor
            document.querySelector(".robo").src = "img/robotron 2000 - " + cor + ".png"
        })
    })











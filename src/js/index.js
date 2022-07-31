const voltar = document.getElementById('btn-voltar')
const avancar = document.getElementById('btn-avancar')
const cartoes = document.querySelectorAll('.cartao')

let atual = 0

function esconder(){
    const cartaosel = document.querySelector('.selecionado')
    cartaosel.classList.remove('selecionado')
}
function mostrar(indice) {
    cartoes[indice].classList.add('selecionado')
}

function evenvol() {
    if (atual === 0) return
    esconder()
    atual --
    mostrar(atual)
}

function evenavan() {
    if (atual === cartoes.length - 1) return
    esconder()
    atual ++
    mostrar(atual)
}

voltar.addEventListener('click', evenvol)
avancar.addEventListener('click', evenavan)

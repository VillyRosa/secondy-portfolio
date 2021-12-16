var quanta = window.document.querySelectorAll('.image')
var quant = Number(quanta.length / 3)
var balls = window.document.querySelector('.balls')
var slide = window.document.querySelector('.slides')
var atual = 1
var acao = 0
var margin = slide.style.marginLeft
var remover = 1

window.document.getElementById('1').classList.add('slideAtual')

for (i = 0; i <= quant; i++) {
    var div = createElement('div')
    div.id = i
    balls.appendChild(div)
}

function trocar() {
    if (acao == 0) {
        if (atual == 3) {
            slide.style.marginLeft = `-762px`
            atual = 2
            remover = 3
            window.document.getElementById('2').classList.add('slideAtual')
        } else if (atual == 2) {
            slide.style.marginLeft = ``
            atual = 1
            remover = 2
            window.document.getElementById('1').classList.add('slideAtual')
        } else {
            slide.style.marginLeft = `-1524px`
            atual = 3
            remover = 1
            window.document.getElementById('3').classList.add('slideAtual')
        }
    } else {
        if (atual == 1) {
            slide.style.marginLeft = `-762px`
            atual = 2
            remover = 1
            window.document.getElementById('2').classList.add('slideAtual')
        } else if (atual == 2) {
            slide.style.marginLeft = `-1524px`
            atual = 3
            remover = 2
            window.document.getElementById('3').classList.add('slideAtual')
        } else {
            slide.style.marginLeft = ``
            atual = 1
            remover = 3
            window.document.getElementById('1').classList.add('slideAtual')
        }
    }
}

function avancar() {
    acao = 1
    trocar()
    window.document.getElementById(remover).classList.remove('slideAtual')
}

function voltar() {
    acao = 0
    trocar()
    window.document.getElementById(remover).classList.remove('slideAtual')  
}

function bolinha1() {
    slide.style.marginLeft = ``
    atual = 1
    remover = 1
    window.document.getElementById('1').classList.add('slideAtual')
    window.document.getElementById('3').classList.remove('slideAtual') 
    window.document.getElementById('2').classList.remove('slideAtual')
}

function bolinha2() {
    slide.style.marginLeft = '-762px'
    atual = 2
    remover = 2
    window.document.getElementById('2').classList.add('slideAtual')
    window.document.getElementById('1').classList.remove('slideAtual') 
    window.document.getElementById('3').classList.remove('slideAtual')
}

function bolinha3() {
    slide.style.marginLeft = '-1524px'
    atual = 3
    remover = 3
    window.document.getElementById('3').classList.add('slideAtual')
    window.document.getElementById('1').classList.remove('slideAtual') 
    window.document.getElementById('2').classList.remove('slideAtual')
    
}
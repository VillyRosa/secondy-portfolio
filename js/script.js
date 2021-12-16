// Funções para abrir os projetos
function OpenProjetoViagem() {
    window.open('projetos/viagem/index.html', '_blank')
}

function OpenProjetoCloneNetflix() {
    window.open('projetos/netflix/index.html', '_blank')
}

function OpenProjetoCloneInstagram() {
    window.open('projetos/instagram/index.html', '_blank')
}

function OpenProjetoJogoCobrinha() {
    window.open('projetos/Jogo-da-cobrinha/index.html', '_blank')
}

function OpenProjetoJogoMemoria() {
    
}

function OpenProjetoCarrosel() {
    window.open('projetos/Carrosel-de-3-itens/index.html', '_bank')
}

// Funções para aparecer a descrição dos projetos   
var titulo = document.querySelector('#titulo-projeto')
var descricao = document.querySelector('#descricao-projeto')

function resetarTexto() {
    titulo.innerHTML = 'Projetos'
    descricao.innerHTML = 'Passe o mouse em algum projeto para que apareça sua descrição, ao clicar no projeto uma nova guia será aberta para apresentar o projeto.'
}

function enterProjetoViagem() {
    titulo.innerHTML = 'Villy Viagens'
    descricao.innerHTML = '<p>Projeto visual de um site de uma agência de viagens.</p><br><p>Linguagens utilizadas: Html, Css, JavaScript.</p><br><p>Criado no dia 24/05/2021</p>'
}

function enterProjetoCloneInstagram() {
    titulo.innerHTML = 'Clone Instagram'
    descricao.innerHTML = '<p>Criação visual da interface de confirmação de login do instagram.</p><br><p>Linguagens utilizadas: Html, Css.</p><br><p>Criado no dia 27/05/2021</p>'
}

function enterProjetoCloneNetflix() {
    titulo.innerHTML = 'Clone Netflix'
    descricao.innerHTML = '<p>Criação visual da interface da Netflix.</p><br><p>Linguagens utilizadas: Html, Css, JavaScript.</p><br><p>Criado no dia 31/05/2021</p>'
}

function enterProjetoJogoCobrinha() {
    titulo.innerHTML = 'Jogo da Cobrinha'
    descricao.innerHTML = '<p>Criação do jogo da cobrinha em js.</p><br><p>Linguagens utilizadas: Html, Css, JavaScript.</p><br><p>Criado no dia 02/06/2021</p>'
}

function enterProjetoJogoMemoria() {
    titulo.innerHTML = 'Jogo da Memória'
    descricao.innerHTML = '<p>Projeto em construção.</p>'
}

function enterProjetoCarrosel() {
    titulo.innerHTML = 'Carrosel de três itens'
    descricao.innerHTML = '<p>Criação de um carrosel de três imagens com js.</p><br><p>Linguagens utilizadas: Html, Css, JavaScript.</p><br><p>Criado no dia 08/12/2021</p>'
}

// Carrosel dos projetos
var slide = document.querySelector('.slide')
var cards = document.querySelectorAll('.projeto')
var quantCards = Number(cards.length)
var NumeroSlides = 0//Number(quantCards / 3)
var balls = document.querySelector('.balls')
var local = Number(0)
var atual = 1

for (c = 0; c < quantCards; c = c + 3) {
    NumeroSlides++
}

// Criando as bolinhas
for (i = 1; i <= Number(NumeroSlides); i++) {
    var div = document.createElement('div')
    div.className = 'ball'
    div.id = i
    balls.appendChild(div)
}

document.getElementById(atual).classList.add('atual')

// Criando a função de passar e voltar os slides
function passar() {
    if (atual == NumeroSlides) {
        local = 0
        slide.style.marginLeft = (`${local}px`)
        atual = 1
    } else {
        local -= 600
        slide.style.marginLeft = (`${local}px`)
        atual++
    }
    pintar()
}

function voltar() {
    if (atual == 1) {
        local = -600 * (NumeroSlides - 1)
        slide.style.marginLeft = (`${local}px`)
        atual = NumeroSlides
    } else {
        local += 600
        slide.style.marginLeft = (`${local}px`)
        atual --
    }
    pintar()
}

// Pintando a bolinha do slide atual
function pintar() {
    for (i = 1; i <= NumeroSlides; i++) {
        document.getElementById(i).classList.remove('atual')
    } 
    document.getElementById(atual).classList.add('atual')
}

// Conhecimento
var nome = document.querySelector('#nome-indicativo')
var img = document.querySelector('#image')

function saiu() {
    nome.innerHTML = ''
    img.src = ''
}

function html5() {
    nome.innerHTML = 'Html5'
    img.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
}

function css3() {
    nome.innerHTML = 'Css3'
    img.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
}

function git() {
    nome.innerHTML = 'Git'
    img.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
}

function javascript() {
    nome.innerHTML = 'Java Script'
    img.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
}

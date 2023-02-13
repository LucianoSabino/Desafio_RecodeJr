const btn = document.querySelector('.btn')
const resposta = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim."
]
const pergunta = document.querySelector('.texto')

confirm('Preparado para saber o que futuro reservou para você?')

btn.addEventListener("click", () => {
    
    if(pergunta.value == ''){
        alert('Você tem que fazer uma pergunta para saber a resposta.')
        pergunta.value = ''
    }else{
        
        mostraMsg()
        removerMsg()
    }

    
})

function msg (){
    // Faz com quer a cada vez que entra no arrey ele pega index difeerente
    // Graças a função Math.random que etorna um número pseudo-aleatório, por isso faço a mutiplicação com o meu aarrey
    
    let respost = Math.floor(Math.random() * resposta.length)
    return resposta[respost]
}


function mostraMsg () {
    const span = document.createElement("span")
    span.classList.add('ativo')
    span.innerHTML = msg()

    const content = document.querySelector('.content').insertAdjacentElement("beforeend", span)
}

function removerMsg () {
    setTimeout(() => {
        const span = document.querySelector('.ativo')
        pergunta.value = ''
        if(span.parentNode) {
            span.parentNode.removeChild(span)
        }

        // document.querySelector('.ativo').innerHTML = ''
    },3000)
}
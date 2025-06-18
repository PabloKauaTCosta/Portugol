const diviniciar = document.getElementById("diviniciar") // Vai controlar a tela inicial e introduzir o jogo.
const divareajogo = document.getElementById("areajogo") // Jogo foi introduzido e vamos para as perguntas.
const titulodapergunta = document.getElementById("titulopergunta")

const perguntas = [
    {pergunta: "Qual é o maior deserto do mundo?", opcoes: ["Saara", "Antartita", "Atacâma"]},
    {pergunta: "Qual é a capital do Brasil?", opcoes: ["Isa", "Kai", "Maria"]},
    {pergunta:"Qual é a capital da Austrália?", opcoes: ["Arthur", "Natan", "Pablo"]},
    {pergunta:"Qual é o país com maior população no mundo?", opcoes: ["Rosy", "Rosiane", "Rosa"]},
    {pergunta:" Qual a linha imaginária que atravessa o Brasil?", opcoes: ["Crisântemo", "Copo-de-leite", "Lírios"]},
    {pergunta: "Qual o oceano que banha o Brasil?", opcoes: ["Se", "na", "i"]},
] // Crei um array na const para manipular as perguntas na function "abrirareajogo".

let indicedeperguntas = 0

function iniciarjogo(){
    fecharbotaoinicio()
    abrirareadejogo()
}

function fecharbotaoinicio(){
    diviniciar.innerHTML = ""
    diviniciar.classList.remove("active")
} // Uma contante JS que puxa a <div> do HTML. Essa função faz o botão inicial sumir, pois ela está ativada pra exibir algo no lugar: nada.

function abrirareadejogo(){
    divareajogo.classList.add("active")

    titulodapergunta.textContent = perguntas[indicedeperguntas].pergunta
    
    perguntas[indicedeperguntas].opcoes.forEach(opcao => {
        let botaodepergunta = document.createElement("button") //abrir botão
        botaodepergunta.textContent = opcao
        botaodepergunta.classList.add("answer-btn")
        areaperguntas.appendChild(botaodepergunta)
})
} // Essa função puxa o class="tela-container" do HTML, que está ligado ao css e no css ativou outra class: class="tela-container.active".
// Faz um let e cria um botão com o JS no HTML, manipula qual pergunta vai aparecer puxando do array e exibe a pergunta puxando o ID da <div>.

function proximapergunta(){
    indicedeperguntas++
    if(indicedeperguntas < perguntas.length)
    abrirareadejogo()
else
alert("Não existe mais perguntas!")
}

// Objeto é um tipo de dado construido por uma coleção não ordenada de dados formatados em pares chave: Valor  [ {} ]
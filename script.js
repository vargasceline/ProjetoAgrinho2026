const quiz = [
{
    pergunta: "Qual prática ajuda a preservar o meio ambiente no campo?",
    respostas: [
        "Desmatamento",
        "Plantio sustentável",
        "Poluição dos rios"
    ],
    correta: 1
},

{
    pergunta: "Qual tecnologia ajuda a aumentar a produtividade agrícola?",
    respostas: [
        "Drones agrícolas",
        "Queimadas",
        "Desperdício de água"
    ],
    correta: 0
},

{
    pergunta: "O que deve ser preservado para garantir um futuro sustentável?",
    respostas: [
        "Rios e florestas",
        "Lixões",
        "Áreas degradadas"
    ],
    correta: 0
},

{
    pergunta: "Qual fonte de energia é considerada limpa e sustentável?",
    respostas: [
        "Carvão mineral",
        "Petróleo",
        "Energia solar"
    ],
    correta: 2
},

{
    pergunta: "Quem tem papel fundamental na produção de alimentos no sudoeste do Paraná?",
    respostas: [
        "Agricultura familiar",
        "Poluição industrial",
        "Desmatamento"
    ],
    correta: 0
}

];

let perguntaAtual = 0;
let acertos = 0;

function carregarPergunta(){

    const pergunta = document.getElementById("pergunta");
    const opcoes = document.getElementById("opcoes");
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    pergunta.innerHTML =
    `Pergunta ${perguntaAtual + 1} de ${quiz.length}<br><br>${quiz[perguntaAtual].pergunta}`;

    opcoes.innerHTML = "";

    quiz[perguntaAtual].respostas.forEach((resposta, indice) => {

        const botao = document.createElement("button");

        botao.innerText = resposta;

        botao.onclick = function(){
            responder(indice);
        };

        opcoes.appendChild(botao);

    });

}

function responder(indiceSelecionado){

    if(indiceSelecionado === quiz[perguntaAtual].correta){
        acertos++;
    }

    perguntaAtual++;

    if(perguntaAtual < quiz.length){

        carregarPergunta();

    }else{

        finalizarQuiz();

    }

}

function finalizarQuiz(){

    document.getElementById("pergunta").innerHTML =
    "Quiz Concluído!";

    document.getElementById("opcoes").innerHTML = "";

    let mensagem = "";

    if(acertos === 5){

        mensagem =
        "🌟 Excelente! Você entende muito sobre Agro Forte e Futuro Sustentável.";

    }else if(acertos === 4){

        mensagem =
        "👏 Muito bom! Você possui ótimos conhecimentos sobre sustentabilidade no campo.";

    }else if(acertos === 3){

        mensagem =
        "👍 Bom trabalho! Você já conhece bastante sobre o tema.";

    }else if(acertos === 2){

        mensagem =
        "🙂 Você está no caminho certo, mas ainda pode aprender mais sobre sustentabilidade.";

    }else{

        mensagem =
        "📚 Ops... você precisa melhorar seus conhecimentos nessa área.";

    }

    document.getElementById("resultado").innerHTML =
    `<strong>${acertos}/5 acertos</strong><br><br>${mensagem}`;

}

carregarPergunta();

function modoEscuro(){

    document.body.classList.toggle("dark");

}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.03)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
    });

});

const modal = document.getElementById("modalImagem");
const imagemExpandida = document.getElementById("imagemExpandida");
const fechar = document.querySelector(".fechar");

const imagensGaleria = document.querySelectorAll(".galeria img");

imagensGaleria.forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";

        imagemExpandida.src = img.src;

    });

});

fechar.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});
let tamanhoFonte = 100;

function aumentarFonte(){

    if(tamanhoFonte < 150){

        tamanhoFonte += 10;

        document.body.style.fontSize =
        tamanhoFonte + "%";

    }

}

function diminuirFonte(){

    if(tamanhoFonte > 80){

        tamanhoFonte -= 10;

        document.body.style.fontSize =
        tamanhoFonte + "%";

    }

}
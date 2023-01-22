/* 

OBJETIVO 1 - Quando o usuario clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer

- passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js
- passo 2 - dar um jeito de identificar quando o usuario clicar no botão
- passo 3 - dar um jeito de pegar o elemento da modal no js
- passo 4 - abrir a modal na tela

OBJETIVO 2 - Quando o usuario clicar no X devemos fechar a modal

- passo 1- dar um jeito de pegar o elemento de fechar a modal usando o js
- passo 2 - dar um jeito de identificar quando o usuario clicar no X
- passo 3 - fechar a modal 

*/

// OBJETIVO - 1


console.log(document);

// passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js

const botaoTrailer = document.querySelector(".botao-trailer");

// passo 3 - dar um jeito de pegar o elemento da modal no js

const modal = document.querySelector(".modal");

// passo 2 - dar um jeito de identificar quando o usuario clicar no botão

botaoTrailer.addEventListener("click", ()=> {
    // passo 4 - abrir a modal na tela
    alternarModal();
    video.setAttribute("src",LinkdoVideo)
});

// OBJETIVO - 2 

//passo 1- dar um jeito de pegar o elemento de fechar a modal usando o js

const botaoFecharModal = document.querySelector(".fechar-modal");

// passo 2 - dar um jeito de identificar quando o usuario clicar no X

botaoFecharModal.addEventListener("click", ()=> {
    // passo 3 - fechar a modal
    alternarModal();
    video.setAttribute("src","")

});

// o video do trailer ao fechar com som aberto continua o audio. Nisso é necessario fazer o seguinte - pegar o iframe do html e "retirar" o som/video. Após ossp vai no passo 3 e siga os passos a partir do video.setAttribute.

const video = document.getElementById("video");

const LinkdoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}
// OBS = para deixar o cod. mais profissional, é melhor deixar as variaveis em cida das "açoes" que no caso essas variaveis seriam os const.
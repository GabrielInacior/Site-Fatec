// Função para adicionar um comentário à lista
function adicionarComentario(nome, comentario) {
    const lista = document.getElementById("comentarios-list");
    const itemComentario = document.createElement("li");

    // Cria a imagem de perfil com a inicial do nome
    const imagemPerfil = document.createElement("div");
    imagemPerfil.className = "profile-circle";
    imagemPerfil.textContent = nome[0].toUpperCase();

    const comentarioDiv = document.createElement("div");
    comentarioDiv.className = "nomecomentario ";
    comentarioDiv.innerHTML = `<strong>${nome}:</strong> ${comentario}`;

    itemComentario.appendChild(imagemPerfil);
    itemComentario.appendChild(comentarioDiv);

    lista.appendChild(itemComentario);
}

// Função para limpar os comentários
function limparComentarios() {
    const lista = document.getElementById("comentarios-list");
    lista.innerHTML = ""; // Remove todos os elementos da lista

    // Limpa os comentários do localStorage
    localStorage.removeItem("comentarios");
}

// Função para lidar com o envio de um comentário
function enviarComentario(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const comentario = document.getElementById("comentario").value;

    if (nome && comentario) {
        adicionarComentario(nome, comentario);

        // Armazena os comentários no localStorage
        const comentariosSalvos = JSON.parse(localStorage.getItem("comentarios")) || [];
        comentariosSalvos.push({ nome, comentario });
        localStorage.setItem("comentarios", JSON.stringify(comentariosSalvos));

        // Limpa os campos de entrada
        document.getElementById("nome").value = "";
        document.getElementById("comentario").value = "";
    }
}

// Adicione um ouvinte de evento para o formulário
const formulario = document.getElementById("comentario-form");
formulario.addEventListener("submit", enviarComentario);

// Adicione um ouvinte de evento para o botão de limpeza
const botaoLimpar = document.getElementById("limpar-comentarios");
botaoLimpar.addEventListener("click", limparComentarios);

// Carregar comentários salvos do localStorage
const comentariosSalvos = JSON.parse(localStorage.getItem("comentarios")) || [];
comentariosSalvos.forEach((comentario) => {
    adicionarComentario(comentario.nome, comentario.comentario);
});
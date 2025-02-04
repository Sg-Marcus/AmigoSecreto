let amigos = [];
let listagemAmigos = document.getElementById('listaAmigos');
let input = document.getElementById('amigo');

function adicionarAmigo() {
    let nome = input.value.trim();
    if (nome && amigos.length < 5) {
        amigos.push(nome);
        listagemAmigos.innerHTML += `<div>${nome}</div>`;
        input.value = '';
        input.focus();
    } else if (amigos.length >= 5) {
        alert('Você só pode adicionar até 5 amigos!');
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Adicione pelo menos 1 amigo antes de sortear.');
        return;
    }

    let amigoSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[amigoSorteado];

    document.getElementById('resultado').innerHTML = ` O amigo secreto é: ${amigoSecreto}!`;
}

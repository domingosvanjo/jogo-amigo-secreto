//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigo;
let amigos=[];
let ulListAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let botSortear = document.querySelector(".button-draw");
let sorteado;

botSortear.setAttribute('disabled', true);

function adicionarAmigo(){
    amigo = document.getElementById("amigo");
    if (amigo.value != ""){
        if(verifLista(amigo.value)){return;}
        amigos.push(amigo.value.toUpperCase());
        let li = document.createElement('li');
        li.textContent = amigo.value;
        ulListAmigos.appendChild(li);
        resultado.innerHTML = "";
        
        if (amigos.length >= 2){
            botSortear.removeAttribute('disabled');
        }
    }else{
        alert('Digite um nome para inserir na lista!');
    }
    amigo.value = "";
    amigo.focus();
}

function sortearAmigo(){
    let secreto = parseInt(Math.random() * amigos.length);
    sorteado = amigos[secreto];
    limparLista();
    amigos = [];
    exibirSorteio();
    botSortear.setAttribute('disabled', true);
}

function exibirSorteio(){
    resultado.innerHTML = `O amigo secreto é: ${sorteado}`;
}

function limparLista(){
    ulListAmigos.innerHTML = "";
}

function verifLista(nome){
    if(amigos.includes(nome.toUpperCase())){
        alert(`${amigo.value} já existe na lista!`)
        return true;         
    }
}
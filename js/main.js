const form = document.querySelector('#novoItem');
const lista = document.querySelector('#lista');
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento)=>{
    console.log(elemento.nome, elemento.quantidade)
})

form.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    createNewElement(nome.value, quantidade.value);

    nome.value = "";
    quantidade.value = "";
})

function createNewElement(nome, quantidade){
    
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    const itemNumber = document.createElement('strong');
    itemNumber.innerHTML = quantidade;

    newItem.appendChild(itemNumber);
    newItem.innerHTML += nome;

    lista.appendChild(newItem);

    const atualItem ={
        "nome": nome,
        "quantidade": quantidade
    };

    itens.push(atualItem)

    localStorage.setItem("itens", JSON.stringify(itens));

}
const form = document.querySelector('#novoItem');
const lista = document.querySelector('#lista');
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento)=>{
    createNewElement(elemento);
})

form.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];
    const exist = itens.find(elemento => elemento.nome === nome.value);

    const atualItem ={
        "nome": nome.value,
        "quantidade": quantidade.value
    };

    if(exist){
        atualItem.id = exist.id;
        updateElement(atualItem);

        itens[exist.id] = atualItem;
    } else{
        atualItem.id = itens.length;
        createNewElement(atualItem);

        itens.push(atualItem);
    }

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";

})

function createNewElement(item){
    
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    const itemNumber = document.createElement('strong');
    itemNumber.dataset.id = item.id;
    itemNumber.innerHTML = item.quantidade;

    newItem.appendChild(itemNumber);
    newItem.innerHTML += item.nome;

    lista.appendChild(newItem);

}

function updateElement(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;

}
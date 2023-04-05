const form = document.querySelector('#novoItem');
const lista = document.querySelector('#lista')


form.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    const nome = evento.target.elements['nome'].value
    const quantidade = evento.target.elements['quantidade'].value

    createNewElement(nome, quantidade);

    
})

function createNewElement(nome, quantidade){
    
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    const itemNumber = document.createElement('strong');
    itemNumber.innerHTML = quantidade;

    newItem.appendChild(itemNumber);
    newItem.innerHTML += nome;

    lista.appendChild(newItem);

}
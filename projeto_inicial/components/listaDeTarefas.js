const criarTarefa = (evento)=>{
    
    evento.preventDefault();

    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    
    /* percorrendo o dom e selecionando a lista */
    const tarefa = document.querySelector('[data-task]');

    /* capturando o valor digitado */
    const conteudo = `<p class="content">${valor}</>`;

    /* acessando e colocando a nova tarefa no app */
    tarefa.innerHTML = conteudo;

    /* limpando o input */
    input.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');

    novaTarefa.addEventListener('click', criarTarefa);
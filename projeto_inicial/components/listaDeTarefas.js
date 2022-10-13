const criarTarefa = (evento)=>{
    
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    
    /* percorrendo o dom e criando a lista */
    const tarefa = document.createElement('li');

    /* atribuindo o style */
    tarefa.classList.add('task');

    /* capturando o valor digitado */
    const conteudo = `<p class="content">${valor}</>`;

    /* acessando e colocando a nova tarefa no app */
    tarefa.innerHTML = conteudo;      
    
    tarefa.appendChild(BotaoConclui()); /* colocando o botão concluir */
    lista.appendChild(tarefa); /* atribuindo conteudo a lista */    
    input.value = " "; /* limpando o input */
}

const novaTarefa = document.querySelector('[data-form-button]');

    novaTarefa.addEventListener('click', criarTarefa);

    /* concluindo a tarefa */
    const BotaoConclui = ()=>{
        const botaoConclui = document.createElement('button');

        botaoConclui.classList.add('check-button'); /* style do botão */
        botaoConclui.innerText = 'concluir'; /* colocando texto no botão */
        botaoConclui.addEventListener('click', ()=>{
            console.log('clicou')
        });

        return botaoConclui;
    };
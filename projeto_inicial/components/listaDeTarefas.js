(()=>{ /* Encapsular - Vamos utilizar a “IIFE”, ou Immediately Invoked Function Expression ou “Função de Invocação Imediata” */
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
        tarefa.appendChild(BotaoDeleta()); /* colocando o botão deletar */
        lista.appendChild(tarefa); /* atribuindo conteudo a lista */    
        input.value = " "; /* limpando o input */
    }
    
    const novaTarefa = document.querySelector('[data-form-button]');
    
        novaTarefa.addEventListener('click', criarTarefa);
    
        /* concluindo a tarefa */
        const BotaoConclui = ()=>{
            const botaoConclui = document.createElement('button'); /* criando o botão */
    
            botaoConclui.classList.add('check-button'); /* style do botão */
            botaoConclui.innerText = 'concluir'; /* colocando texto no botão */
            botaoConclui.addEventListener('click', concluirTarefa);
            return botaoConclui;
        };
    
        const concluirTarefa = (evento)=>{
            const botaoConclui = evento.target; /* saber em quem clicou */
    
            const tarefaCompleta = botaoConclui.parentElement; /* pegando o pai do elemento clicado */
    
            tarefaCompleta.classList.toggle('done'); /* aplicando o efeito na lista */
        };

        const BotaoDeleta = ()=>{
            const botaoDeleta = document.createElement('button'); /* criando o botão */

            botaoDeleta.innerText = 'Deletar'; /* atribuindo texto ao botão */
            
            botaoDeleta.addEventListener('click', deletarTarefa)

            return botaoDeleta;
        };

        const deletarTarefa = (evento)=>{
            const botaoDeleta = evento.target; /* saber em quem clicou */

            const tarefaCompleta = botaoDeleta.parentElement; /* pegar o elemento pai */

            tarefaCompleta.remove();

            return botaoDeleta;
        };
})();


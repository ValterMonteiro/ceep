
    const BotaoDeleta = ()=>{
        const botaoDeleta = document.createElement('button'); /* criando o botão */

        botaoDeleta.innerText = 'Deletar'; /* atribuindo texto ao botão */
        
        botaoDeleta.addEventListener('click', deletarTarefa) /* escutando click */

        return botaoDeleta;
    };

    const deletarTarefa = (evento)=>{
        const botaoDeleta = evento.target; /* saber em quem clicou */

        const tarefaCompleta = botaoDeleta.parentElement; /* pegar o elemento pai */

        tarefaCompleta.remove(); /* removendo tarefa */

        return botaoDeleta;
    };

    export default BotaoDeleta;
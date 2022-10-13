    /* concluindo a tarefa é um componente, pederia ser criado separado */
    const BotaoConclui = ()=>{
        const botaoConclui = document.createElement('button'); /* criando o botão */

        botaoConclui.classList.add('check-button'); /* style do botão */
        botaoConclui.innerText = 'concluir'; /* colocando texto no botão */
        botaoConclui.addEventListener('click', concluirTarefa); /* escutando o click */
        return botaoConclui;
    };

    const concluirTarefa = (evento)=>{
        const botaoConclui = evento.target; /* saber em quem clicou */

        const tarefaCompleta = botaoConclui.parentElement; /* pegando o pai do elemento clicado */

        tarefaCompleta.classList.toggle('done'); /* aplicando o efeito na lista */
    };
export default BotaoConclui;
import BotaoConclui from "./components/concluirTarefa.js";
import BotaoDeleta from "./components/deletarTarefa.js";
/*  Encapsular - Vamos utilizar a “IIFE”, ou Immediately Invoked Function Expression ou “Função de Invocação Imediata” 
 sintaxe 
(()=>{
    aqui vai todo o código
})();
 
Para esse app utilizamos os módulos ou seja, separamos em componentes
*/
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
    
        novaTarefa.addEventListener('click', criarTarefa);/* escutando o click */




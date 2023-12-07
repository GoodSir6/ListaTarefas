function addTarefa() {
    let tarefaBotao = document.getElementById("tarefaBotao");
    let listaTarefas = document.getElementById("listaTarefas");
    if (tarefaBotao.value !== "") { // se o usuário não colocar nada no campo de tarefa, vai dar o else
      let itemTarefa = document.createElement("li"); //cria uma LI com esse conteúdo dentro
      itemTarefa.innerHTML = `
  <span>${tarefaBotao.value}</span>
  <button onclick="removerTarefa(this.parentNode)">Remover</button>`; //adiciona a tarefa com o botão remover na direita, o parâmetro "this.parentNode" é a responsável por definir ao clicar no botão remover, qual será a tarefa removida.
      listaTarefas.appendChild(itemTarefa);
      tarefaBotao.value = ""; //é o responsável por quando o usuário clicar em "Adicionar tarefa", deixará o campo em branco novamente.
    }
    else {
      alert("Sua tarefa precisa ter um nome!")
    }
  }
  function removerTarefa(itemTarefa) { //é a função responsável por remover a tarefa.
    let listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.removeChild(itemTarefa);
  }
  const enter = document.getElementById("tarefaBotao"); //É o responsável por ao apertar enter, a tarefa ser adicionada à lista
  enter.addEventListener("keydown", function (e) {
    if (e.key == 'Enter') {
      addTarefa();
    }
  });
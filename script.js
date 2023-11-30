function adicionarTarefa() {
  let tarefaBotao = document.getElementById("tarefaBotao");
  let listaTarefas = document.getElementById("listaTarefas");
  if (tarefaBotao.value !== "") {
    let itemTarefa = document.createElement("li");
    itemTarefa.innerHTML = `
    <span>${tarefaBotao.value}</span>
    <button onclick="removerTarefa(this.parentNode)">Remover</button>
  `;
    itemTarefa.onclick = function() {
      marcarCompleta(this);
    };
    listaTarefas.appendChild(itemTarefa);
    tarefaBotao.value = "";
  }
  else{
    alert("Sua tarefa precisa ter um nome!")
  }
}
function marcarCompleta(itemTarefa) {
  itemTarefa.classList.toggle("completed");
}

function removerTarefa(itemTarefa) {
  let listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.removeChild(itemTarefa);
}
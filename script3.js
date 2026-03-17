let tarefas = [];

function adicionarTarefa() {
  // pega o input e atribui a uma variável
  const inputTarefa = document.getElementById("inputTarefa");

  // pega o valor do input e remove espaços extras
  let tarefa = inputTarefa.value.trim();

  // pega o elemento de mensagem
  const mensagem = document.getElementById("mensagem");

  // se o valor do input for vazio, mostre uma mensagem de erro
  if (tarefa === "") {
    // mostre uma mensagem de erro
    let mensagemErro = "Digite uma tarefa"
    mensagem.textContent = mensagemErro
  } else {
    // mensagem de tarefa adicionada com sucesso
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso;
    
    tarefas.push(tarefa)
    renderizarTarefas()
  }

  // limpa o input
  inputTarefa.value = "";

}

function renderizarTarefas() {
  // pega a lista
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = ""

  // for itens na lista
  //1. item inicial (iterador)
  //2. item final (condição)
  //3. se vai de 1 em 1 ou se pula

  // for (iterador; condição; frewuência)
  
  for (let i = 0; i < tarefas.length; i++){
    // cria um novo item 
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefas[i];

    let botaoRemover = document.createElement("button")
    botaoRemover.className = "remover"
    botaoRemover.textContent = "Remover"
    botaoRemover.onclick = () => removerTarefa(i)

    let botaoEditar = document.createElement("button")
    botaoEditar.className = "editar"
    botaoEditar.textContent = "Editar"
    botaoEditar.onclick = () => editarTarefa(i)

    novaTarefa.appendChild(botaoRemover)
    novaTarefa.appendChild(botaoEditar)
    // adiciona na lista
    listaTarefas.appendChild(novaTarefa);
  }
}

function removerTarefa (i) {
  tarefas.splice(i, 1)
  renderizarTarefas()
}

function editarTarefa(i) {
  let tarefaEditada = prompt("Edite a tarefa:")
  if (tarefaEditada.trim() !== "") {
    tarefas[i] = tarefaEditada
    renderizarTarefas()
  }
}

function limparLista() {
  tarefas.length = 0
  renderizarTarefas()
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "Lista de tarefas limpa com sucesso!"
}
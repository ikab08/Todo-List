const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener('click', ()=> {
  const valTask = taskInput.value;
  if (!valTask.trim()) return;    // ignore si vide
  
  const li = document.createElement('li');
  li.textContent = valTask;

  // bouton supprimer
  const del = document.createElement('button');
  del.classList.add("delete-btn");
  del.textContent = "X";
  del.addEventListener('click', ()=>{
    li.remove();
  })

  li.appendChild(del);
  taskList.appendChild(li);
  taskInput.value = "";   
})



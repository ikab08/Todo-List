const taskInput = document.querySelector("#taskInput");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

addTask.addEventListener('click', ()=> {
  const valTaskInput = taskInput.value;
  if(valTaskInput) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.classList.add("delete-btn");
    delBtn.textContent = "X";
    li.textContent = valTaskInput+' ';
    taskList.appendChild(li).appendChild(delBtn);

    document.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener("click", ()=> {
        li.remove();
      })
    }); 
  }    
})



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


/* le js avec localstorage integre 

// Sélection des éléments
const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

// Sauvegarde les tâches dans localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push({
      text: li.textContent.replace("❌", "").trim(),
      completed: li.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Ajoute une tâche
function addTask(text, completed = false) {
  if (!text.trim()) return; // ignore si vide

  const li = document.createElement("li");
  li.textContent = text;

  // Appliquer état complété si nécessaire
  if (completed) li.classList.add("completed");

  // Toggle complet au clic
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveTasks();
  });

  // Bouton supprimer
  const del = document.createElement("button");
  del.textContent = "❌";
  del.addEventListener("click", (e) => {
    e.stopPropagation(); // éviter toggle quand on clique ❌
    li.remove();
    saveTasks();
  });

  li.appendChild(del);
  taskList.appendChild(li);

  saveTasks();
}

// Charger les tâches depuis localStorage
function loadTasks() {
  const stored = JSON.parse(localStorage.getItem("tasks")) || [];
  stored.forEach(task => addTask(task.text, task.completed));
}

// Ajouter via bouton
addBtn.addEventListener("click", () => {
  addTask(input.value);
  input.value = "";
});

// Ajouter via touche "Entrée"
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask(input.value);
    input.value = "";
  }
});

// Charger au démarrage
window.addEventListener("load", loadTasks);


*/

// Selección de elementos
const taskInput = document.getElementById('taskInput');
const dateInput = document.getElementById('dateInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Selección de elementos
const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');
const addProductButton = document.getElementById('addProductButton');
const productList = document.getElementById('products');

// Función para agregar una tarea
function addTask() {
  const taskText = taskInput.value.trim(); // Elimina espacios en blanco
  const taskDate = dateInput.value; // Obtener la fecha
  if (taskText === '' || taskDate === '') {
    alert('Por favor, escribe una tarea y selecciona una fecha.');
    return;
  }

  // Crear un nuevo elemento de lista
  const li = document.createElement('li');
  li.textContent = `${taskText} - ${taskDate}`; // Incluir la fecha

  // Botón de eliminar
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.classList.add('delete-btn');
  deleteButton.onclick = () => taskList.removeChild(li);

  // Marcar como completada
  li.onclick = () => li.classList.toggle('completed');

  // Agregar elementos a la lista
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  // Limpiar los campos de entrada
  taskInput.value = '';
  dateInput.value = ''; // Limpiar la fecha
}

// Función para agregar un producto
function addProduct() {
  const productName = productNameInput.value.trim();
  const productPrice = productPriceInput.value.trim();
  if (productName === '' || productPrice === '') {
    alert('Por favor, ingrese el nombre y el precio del producto.');
    return;
  }

  // Crear un nuevo elemento de lista
  const li = document.createElement('li');
  li.textContent = `${productName} - $${productPrice}`;

  // Botón de eliminar
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.classList.add('delete-btn');
  deleteButton.onclick = () => productList.removeChild(li);

  // Agregar elementos a la lista
  li.appendChild(deleteButton);
  productList.appendChild(li);

  // Limpiar los campos de entrada
  productNameInput.value = '';
  productPriceInput.value = '';
}

// Evento para el botón "Agregar"
addTaskButton.addEventListener('click', addTask);

// Permitir agregar tareas con la tecla "Enter"
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Evento para el botón "Agregar"
addProductButton.addEventListener('click', addProduct);

function initMap() {
    // Coordenadas de Barranquilla, Colombia
    const barranquilla = { lat: 10.96854, lng: -74.78132 };
    
    // Crear el mapa centrado en Barranquilla
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: barranquilla,
    });
    
    // Agregar un marcador en Barranquilla
    const marker = new google.maps.Marker({
        position: barranquilla,
        map: map,
    });
}

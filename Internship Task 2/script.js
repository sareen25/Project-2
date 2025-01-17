// JavaScript: Form Validation and To-Do List Logic

// Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    contactForm.reset();
});

// To-Do List Logic
const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

addTodoButton.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (!task) {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = task;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        todoList.removeChild(listItem);
    });

    listItem.appendChild(removeButton);
    todoList.appendChild(listItem);

    todoInput.value = ''; // Clear input field
});

// Dynamic Image Gallery

// script.js
function addImage() {
    const imageUrlInput = document.getElementById("imageUrlInput");
    const imageUrl = imageUrlInput.value.trim();

    if (imageUrl === "") {
        alert("Please enter an image URL!");
        return;
    }

    // Create a new image element
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "User added image";
    img.classList.add("gallery-item");

    // Create a delete button for the image
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function() {
        img.remove();
        deleteButton.remove();
    };

    // Append the image and button to the gallery container
    const gallery = document.getElementById("gallery");
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item-container");
    galleryItem.appendChild(img);
    galleryItem.appendChild(deleteButton);
    gallery.appendChild(galleryItem);

    // Clear the input field
    imageUrlInput.value = "";
}


//  ends Image gallery

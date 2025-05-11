const todos = ['Learn React', 'Start Coding', 'build a Project'];
const todoContainer = document.querySelector('.todo-container');

todos.forEach(todoText => {
  const card = document.createElement('div');
  card.className = 'card';

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';

  const h2 = document.createElement('h2');
  h2.textContent = todoText;

  const button = document.createElement('button');
  button.className = 'btn';
  button.textContent = 'Done';
  button.addEventListener('click', showModalHandler);

  cardContent.appendChild(h2);
  cardContent.appendChild(button);
  card.appendChild(cardContent);
  todoContainer.appendChild(card);
});

let modal;
let backdrop;

function showModalHandler() {
  if (modal) {
    return;
  }

  modal = document.createElement('div');
  modal.className = 'modal';

  const modalText = document.createElement('p');
  modalText.textContent = 'Did you complete the task';

  const modalCancelAction = document.createElement('button');
  modalCancelAction.textContent = 'Cancel';
  modalCancelAction.className = 'btn btn-highlight';
  modalCancelAction.addEventListener('click', closeModalHandler);

  const modalConfirmAction = document.createElement('button');
  modalConfirmAction.textContent = 'Yes';
  modalConfirmAction.className = 'btn';
  modalConfirmAction.addEventListener('click', closeModalHandler);

  modal.append(modalText);
  modal.append(modalCancelAction);
  modal.append(modalConfirmAction);

  document.body.append(modal);

  backdrop = document.createElement('div');
  backdrop.className = 'backdrop';
  backdrop.addEventListener('click', closeModalHandler);

  document.body.append(backdrop);
}

function closeModalHandler() {
  modal.remove();
  modal = null;
  backdrop.remove();
  backdrop = null;
}

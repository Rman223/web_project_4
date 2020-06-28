const editButton = document.querySelector('.profile__pencil');

const closeButton = document.querySelector('.modal__close-image');

const modal = document.querySelector('.modal');

const form = document.querySelector('.form');

function toggleModal() {
  modal.classList.toggle('modal_overlay');
}

editButton.addEventListener('click', toggleModal);
  
closeButton.addEventListener('click', toggleModal);

form.addEventListener('submit', (e) => {
  e.preventDefault();
const inputName = document.querySelector('.form__input_name');
const inputOccupation = document.querySelector('.form__input_occupation');

const profileName = document.querySelector('.profile__title-text');
const profileOccupation = document.querySelector('.profile__subtitle-text');

profileName.textContent = inputName.value;
profileOccupation.textContent = inputOccupation.value;

})
 


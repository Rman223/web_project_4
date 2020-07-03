const editButton = document.querySelector('.profile__rectangle-small');

const closeButton = document.querySelector('.modal__close');

const modal = document.querySelector('.modal');

const form = document.querySelector('.form');
const inputName = document.querySelector('.form__input_name');

function toggleModal() {
  modal.classList.toggle('modal_overlay');
}

editButton.addEventListener('click', toggleModal);
  
closeButton.addEventListener('click', toggleModal);

form.addEventListener('submit', (e) => {
  e.preventDefault();

const inputOccupation = document.querySelector('.form__input_occupation');

const profileName = document.querySelector('.profile__title-text');
const profileOccupation = document.querySelector('.profile__subtitle-text');

profileName.textContent = inputName.value;
profileOccupation.textContent = inputOccupation.value;


toggleModal();

})
 


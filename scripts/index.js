// Profile card
const addProfileModal = document.querySelector('.modal__edit_profile');
const addCardModal = document.querySelector('.modal__edit_card');
const profile = document.querySelector('.profile');
const editButton = document.querySelector('.profile__rectangle-small');
const closeButton = document.querySelector('.modal__close');
const profileName = document.querySelector('.profile__title-text');
const profileOccupation = document.querySelector('.profile__subtitle-text');
const submitButton = document.querySelector('.modal__submit-button');
//Images
const imageModal = document.querySelector('.modal__edit_image');
const closeImage = imageModal.querySelector('.modal__close_image');
const figCap = imageModal.querySelector('.modal__figcap');
const popImage = imageModal.querySelector('.modal__pop-image');
// Forms
const formProfile = document.querySelector('.form');
const cardForm = document.querySelector('.form_card')
const inputName = document.querySelector('.form__input_name');
const inputOccupation = document.querySelector('.form__input_occupation');
// Locations Form
const addCardLargeButtonOpen = document.querySelector('.profile__plus-sign');
const closeCardLargeButton = addCardModal.querySelector('.modal__close');
const createButton = addCardModal.querySelector('.modal__submit-button');
const inputTitle = document.querySelector('.form__input_title')
const inputLink = document.querySelector('.form__input_image-link');
const list = document.querySelector('.card');
const elementCard = document.querySelector('.card__element');
const pageClose = document.querySelector('.page__content');

// Toggle between pop up elements and profile & location card edits
function openModal(modal) {
  modal.classList.add('modal_overlay');
  window.addEventListener("keydown", escCloseModal);
  window.addEventListener("click", clickClose);
}
function closeModal(modal) {
  modal.classList.remove('modal_overlay');
  window.removeEventListener("keydown", escCloseModal);
  window.removeEventListener("click", clickClose);
}
function toggleModal(modal) {
  if (modal.classList.contains('modal_overlay')) {
  closeModal(modal);
  } else {
  openModal(modal);
  }
}

function escCloseModal(evt) {
  if (evt.key == "Escape" && addCardModal.classList.contains("modal_overlay")) {
    toggleModal(addCardModal);
  }
  if (evt.key == "Escape" && addProfileModal.classList.contains("modal_overlay")) {
    toggleModal(addProfileModal);
  }
  if (evt.key == "Escape" && imageModal.classList.contains("modal_overlay")) {
    toggleModal(imageModal);
  }
}

function clickClose(evt) {
  if (evt.target === addCardModal) {
    toggleModal(addCardModal);
    window.removeEventListener('click', clickClose);
  }
  if (evt.target === addProfileModal) {
    toggleModal(addProfileModal);
    window.removeEventListener('click', clickClose);
  }
  if (evt.target === imageModal) {
    toggleModal(imageModal);
    window.removeEventListener('click', clickClose);
  }
}

//New card form buttons
closeImage.addEventListener('click', () => {
  toggleModal(imageModal);

});

addCardLargeButtonOpen.addEventListener('click', () => {
  toggleModal(addCardModal);
  // window.addEventListener('keydown', escCloseModal);
  // window.addEventListener('click', clickClose);
});

closeCardLargeButton.addEventListener('click', () => {
  toggleModal(addCardModal);
});
createButton.addEventListener('click', () => {
  toggleModal(addCardModal);
});

//  Profile edit buttom

editButton.addEventListener('click', () => {
  toggleModal(addProfileModal);
  // window.addEventListener("keydown", escCloseModal);
  // window.addEventListener('click', clickClose);
});

closeButton.addEventListener('click', () => {
  toggleModal(addProfileModal);
});

submitButton.addEventListener('click', () => {
  toggleModal(addProfileModal);
});

formProfile.addEventListener('submit', (e) => {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;

  toggleModal(profile);
})

const initialCards = [

  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  },
  {
    name: "Vanois National...",
    link: "https://code.s3.yandex.net/web-code/vanois.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
];

// Function to create new card from pop up form
function createCard(data) {
  // here we do everything required for creating a card
  const cardTemplate = document.querySelector('.card-template').content.querySelector('.card__element');
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector('.card__item-photo');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardLikeButton = cardElement.querySelector('.card__vector');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');

  cardTitle.textContent = data.name;

  figCap.textContent = data.name;
  cardImage.onerror = function () {
    this.src = data.link;
  }

  cardDeleteButton.addEventListener('click', () => {
    //remove card   
    cardElement.remove();
  })

  cardLikeButton.addEventListener('click', (e) => {
    //   //toggle heartState
    e.target.classList.toggle('card__vector_highlight');
  })

  cardImage.addEventListener('click', () => {
    //open image modal
    toggleModal(imageModal);
    // window.addEventListener("keydown", escCloseModal);
    // window.addEventListener('click', clickClose);
    popImage.setAttribute("alt", figCap.textContent = data.name);
    popImage.src = data.link;
    figCap.textContent = data.name;
  })
  
  return cardElement
}

function addCardToDom(cardElement) {

  list.prepend(cardElement);

}

cardForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Dont forget that you need to select inputName and inputLink inputs from modal with card addition
  const cardElement = createCard({ name: inputTitle.value, link: inputLink.value }); // we also use our createCard function when user adds a new card
  addCardToDom(cardElement);
  toggleModal(profile);
})

initialCards.forEach(data => {
  const card = createCard(data);
  addCardToDom(card);
})


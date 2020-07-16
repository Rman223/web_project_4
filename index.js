const addProfileModal = document.querySelector('.modal__edit_profile');
const addCardModal = document.querySelector('.modal__edit_card');

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
closeImage.addEventListener('click', () => {
  toggleModal(imageModal);
});

// Forms
const form = document.querySelector('.form');
const cardForm = document.querySelector('.form_card')
const inputName = document.querySelector('.form__input_name');
const inputOccupation = document.querySelector('.form__input_occupation');
// Locations Form
const addCardLargeButtonOpen = document.querySelector('.profile__plus-sign');
const closeCardLargeButton = addCardModal.querySelector('.modal__close');
const createButton = addCardModal.querySelector('.modal__submit-button');

const inputTitle = document.querySelector('.form__input_title')
const inputLink = document.querySelector('.form__input_image-link');
const locationTitle = document.querySelector('.card__title');
const locationLink = document.querySelector('.card__item-photo');


addCardLargeButtonOpen.addEventListener('click', () => {
  toggleModal(addCardModal);
})
closeCardLargeButton.addEventListener('click', () => {
  toggleModal(addCardModal);
})
createButton.addEventListener('click', () => {
  toggleModal(addCardModal);
})








function toggleModal(modal) {
  modal.classList.toggle('modal_overlay');
  
}

editButton.addEventListener('click', () => {
  toggleModal(addProfileModal);
});
  
closeButton.addEventListener('click', () => {
  toggleModal(addProfileModal);
});

submitButton.addEventListener('click',() => {
  toggleModal(addProfileModal);
})


form.addEventListener('submit', (e) => {
  e.preventDefault();



profileName.textContent = inputName.value;
profileOccupation.textContent = inputOccupation.value;


toggleModal();

})






const initialCards = [
  {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
      name: "Vanois National...",
      link: "https://code.s3.yandex.net/web-code/vanois.jpg"
  },
  {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];



  const list = document.querySelector('.card');

  initialCards.forEach((data) => {
  const cardTemplate = document.querySelector('.card-template') .content.querySelector('.card__element')  ;
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector('.card__item-photo');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardLikeButton = cardElement.querySelector('.card__vector');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');

  cardTitle.textContent = data.name;
  
  figCap.textContent = data.name;
  cardImage.onerror = function() {
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
    
    popImage.src = data.link;
    figCap.textContent = data.name;
    
  })

  cardForm.addEventListener('submit', (data) => {
    data.preventDefault();
    
    inputLink.src = data.link
    inputTitle.textContent = data.name

    
    
     
    
   
  })
  
  list.append(cardElement);
})


 
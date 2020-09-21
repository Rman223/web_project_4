const toggleModal = modal => {
  const isVisible = modal.classList.contains('modal_overlay');
  activeModal = modal;
  modal.classList.toggle('modal_overlay');
  if (isVisible) {
    document.removeEventListener('keydown', handleEscPress);
    modal.removeEventListener('click', handleModalClick);
    activeModal = null;
  } else {
    document.addEventListener('keydown', handleEscPress);
    modal.addEventListener('click', handleModalClick);
  }
};

class Card {
  constructor(data, cardTemplateSelector) {
    this._text = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplateSelector;
  }

  _getTemplate() {
    this._card = document.querySelector(this._cardTemplate).content.querySelector('.card__element').cloneNode(true);
    this._imageElement = this._card.querySelector('.card__item-photo');
    this._nameElement = this._card.querySelector('.card__title');
    this._likeBtnElement = this._card.querySelector('.card__vector');
    this._deleteBtnElement = this._card.querySelector('.card__delete-button');
    return this._card;
  }
  _addContent(){
    
    this._imageModal = document.querySelector('.modal__edit_image');
    this._closeImage = imageModal.querySelector('.modal__close_image');
    this._figCap = imageModal.querySelector('.modal__figcap');
    this._popImage = imageModal.querySelector('.modal__pop-image');
    
    
    this._popImage.setAttribute("alt", figCap.textContent = data.name);
    this._imageElement.src = data.link;
    this._figCap.textContent = data.name;
     toggleModal(imageModal);
  }

  _handleLikeButton() {
    e.target.classList.toggle('card__vector_highlight');
  }
  _handleDeleteButton(){
    this._card.remove();
  }
 
  _addEventListners() {
    this.cardImage = this._card.querySelector('.card__item-photo');
    const cardTitle = this._card.querySelector('.card__title');
    // const cardLikeButton = this._card.querySelector('.card__vector');
    // const cardDeleteButton = this._card.querySelector('.card__delete-button');

    cardTitle.textContent = this._text; 
  

    this._deleteBtnElement.addEventListener('click', this._handleDeleteButton);

    this._likeBtnElement.addEventListener('click', this._handleLikeButton);

    this._card.addEventListener('click', this._addContent);
  }
  createCard() {
    this._getTemplate();
    this._cardCreate = this._getTemplate;
    

    // cardTitle.textContent = this._text;

    this.figCap = this._text;
    this.cardImage = function () {
    this.src.style.backgroundImage = "url('')";
    }


    this._addEventListners();
    return this._card;
  }
}

export default Card;

class Card {
  constructor(data, cardTemplateSelector) {
    this._text = data.text;
    this._link = data.link;
    this._cardTemplate = document.querySelector(cardTemplateSelector).content.querySelector('.card__element');
  }

  _handleLikeButton() {
    e.target.classList.toggle('card__vector_highlight');
  }
  _handleDeleteButton(){
    this._cardElement.remove();
  }
  _handleCardImage(){
    toggleModal(imageModal);
      
    popImage.setAttribute("alt", figCap.textContent = data.name);
    popImage.src = data.link;
    figCap.textContent = data.name;
  }
  _addEventListners() {
    const cardImage = this._cardElement.querySelector('.card__item-photo');
    const cardTitle = this._cardElement.querySelector('.card__title');
    const cardLikeButton = this._cardElement.querySelector('.card__vector');
    const cardDeleteButton = this._cardElement.querySelector('.card__delete-button');

    cardTitle.textContent = this._text;

  

    cardDeleteButton.addEventListener('click', this._handleDeleteButton);

    cardLikeButton.addEventListener('click', this._handleLikeButton);

    cardImage.addEventListener('click', this._handleCardImage);
  }
  createCard() {

    this._cardElement = this._cardTemplate.cloneNode(true);


    cardTitle.textContent = this._text;

    figCap.textContent = this._text;
    cardImage.onerror = function () {
      this.src = this._link;
    }


    this._addEventListners();
    return this._cardElement
  }
}

export default Card;
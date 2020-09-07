class Card {
  constructor(data, cardTemplateSelector) {
    this._text = data.text;
    this._link = data.link;
    this._cardTemplate = document.querySelector(cardTemplateSelector).content.querySelector('.card__element');
  }
  _addEventListners() {
    const cardImage = this._cardElement.querySelector('.card__item-photo');
    const cardTitle = this._cardElement.querySelector('.card__title');
    const cardLikeButton = this._cardElement.querySelector('.card__vector');
    const cardDeleteButton = this._cardElement.querySelector('.card__delete-button');

    cardTitle.textContent = this._text;

    cardDeleteButton.addEventListener('click', () => {
      //remove card   
      this._cardElement.remove();
    })

    cardLikeButton.addEventListener('click', (e) => {
      //   //toggle heartState
      e.target.classList.toggle('card__vector_highlight');
    })

    cardImage.addEventListener('click', () => {
      
      toggleModal(imageModal);
      
      popImage.setAttribute("alt", figCap.textContent = data.name);
      popImage.src = data.link;
      figCap.textContent = data.name;
    })
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
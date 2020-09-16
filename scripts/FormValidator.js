class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }

  _showErrorMessage(input, errorClass) {
    const error = this._formElement.querySelector('#' + input.id + '-error');

    error.textContent = input.validationMessage;

    error.classList.add(errorClass);
    input.classList.add(this._settings.inputErrorClass);
  }
  _hideErrorMessage(input, errorClass) {
    const error = this._formElement.querySelector('#' + input.id + '-error');

    error.textContent = '';

    error.classList.remove(errorClass);
    input.classList.remove(this._settings.inputErrorClass);
  }
  _checkInputValidity(input) {
    if (this._settings.input.valid) {
      this._hideErrorMessage(input, errorClass);

    } else {
      this._showErrorMessage(this._settings, input, errorClass);
    }
  }
  _toggleButtonState(inputs, button, inactiveButtonClass) {
    const isValid = inputs.every((input) => input.validity.valid);
    const submitButtonSelector = this._formElement.querySelector('.modal__submit-button');
    if (isValid) {

      button.classList.remove(inactiveButtonClass);
      submitButtonSelector.removeAttribute("disabled");
    } else {
      button.classList.add(inactiveButtonClass);

      submitButtonSelector.setAttribute("disabled", true);
    }
  }
  _setEventListeners() {
    const inputlist = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    const buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);

    inputlist.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(iputlist, buttonElement);
      });
    });
  }
  enableValidation() {
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    this._setEventListeners();
  }
}


export default FormValidator;



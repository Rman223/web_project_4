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
  _checkInputValidity() {
    if (input.validity.valid) {
      this._hideErrorMessage(input, errorClass);

    } else {
      this._showErrorMessage(input, errorClass);
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
  _setEventListners() {
    const inputlist = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    const buttonElement = this._formElement.querySelector(this._settings)

    inputlist.forEach((inputElement) => {
      inputElement.addEventListner('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(iputlist, buttonElement);
      });
    });
  }
  enableValidation() {
    this.formElement.addEventListner('submit', (event) => {
      event.preventDefault();
    });
    this._setEventListners();
  }
}


export default FormValidator;



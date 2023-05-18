export default class ModalDialog {
  #element
  #messageContainer
  #yesButton
  #noButton

  #onYes
  #onNo

  init(parentElement) {
    this.#element = document.createElement('div');
    this.#element.className = 'modal-bg';
    this.hide();
    this.#element.innerHTML = `
      <div class="modal-dialog">
        <div>Confirm deletion</div>
        <div class="modal-dialog-text">Are you sure?</div>
        <div>
          <button class="yes-btn">Yes</button>
          <button class="no-btn">No</button>
        </div>
      </div>`

    this.#element.onclick = ({ target }) => {
      if (target === this.#element) {
        this.hide();
      }
    };
    this.#messageContainer = this.#element.querySelector('.modal-dialog-text')
    this.#yesButton = this.#element.querySelector('.yes-btn')
    this.#yesButton.onclick = () => {
      this.#onYes?.()
      this.hide()
    }
    this.#noButton = this.#element.querySelector('.no-btn')
    this.#noButton.onclick = () => {
      this.#onNo?.()
      this.hide()
    }
    if (parentElement) {
      parentElement.append(this.#element)
    }
    else {
      document.body.append(this.#element)
    }
  }

  show(message, onYes, onNo) {
    this.#messageContainer.innerText = message
    this.#element.style.display = ''
    this.#onYes = onYes
    this.#onNo = onNo
  }

  hide() {
    this.#element.style.display = 'none'
  }
}
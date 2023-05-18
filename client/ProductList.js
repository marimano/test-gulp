export default class ProductList {
  #element
  #modalDialog

  purchasings = []

  init(parentElement, modalDialog) {
    this.#modalDialog = modalDialog
    this.#element = document.createElement('ul')
    this.#element.className = 'shopping-list'
    if (parentElement) {
      parentElement.append(this.#element)
    }
    else {
      document.body.append(this.#element)
    }
  }

  addProduct(name, amount) {
    this.purchasings.push({
      name,
      amount
    })

    this.#addListElement(name, amount)
  }

  #addListElement(name, amount) {
    const pElement = document.createElement('li')
    pElement.innerHTML = `<span>${name}: ${amount} </span><button>X</button>`
    pElement.querySelector('button').onclick = this.#removeElement.bind(this, name)
    this.#element.append(pElement)
  }

  #removeElement(name) {
    const msg = 'Are you sure you want to delete ' + name + ' from the list?'
    this.#modalDialog.show(
      msg,
      () => {
        const itemIndexToDelete = this.purchasings.findIndex(p => p.name === name)
        this.purchasings.splice(itemIndexToDelete, 1)
        this.#element.children[itemIndexToDelete].remove()
      });
  }
}
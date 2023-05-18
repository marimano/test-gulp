function createEmptyDD() {
  const dd = document.createElement('div')
  dd.classList.add('custom-dd')
  dd.innerHTML = `<div class="current-element">
      <span class="current-element-value"></span>
      <button>\/</button>
    </div>
    <ul class="list">
    </ul>`
  return dd
}

function initDD(dd, setCurrentItemIndex) {
  const list = dd.querySelector('.list')

  const currentElementBox = dd.querySelector('.current-element')
  currentElementBox.addEventListener('click', () => {
    list.classList.toggle('open')
  })


  window.addEventListener('click', event => {
    if (!currentElementBox.contains(event.target)) {
      list.classList.remove('open')
    }
  })

  const currentElement = dd.querySelector('.current-element-value')
  list.addEventListener('click', event => {
    if (event.target.nodeName === 'LI') {
      currentElement.innerText = event.target.innerText
      setCurrentItemIndex(+event.target.dataset.index)
    }
  })
}

function fillItems(categories, items, dd, currentItemIndex, onItemElementCreated, isEmptyCategoriesShown) {
  const list = dd.querySelector('.list')
  categories.forEach(category => {
    const categoryItems = items.filter(item => item.category === category)
    if (categoryItems.length || isEmptyCategoriesShown) {
      const categoryEl = document.createElement('div')
      categoryEl.innerText = category
      list.append(categoryEl)
    }

    categoryItems.forEach((item, index) => {
      const li = document.createElement('li')
      li.innerText = item.name
      li.dataset.index = index
      onItemElementCreated(li, index)
      list.append(li)
    })
  })
  

  const currentElement = dd.querySelector('.current-element-value')
  currentElement.innerText = items[currentItemIndex].name
} 

function createDropdown(categories, items, parentElement, onItemElementCreated, isEmptyCategoriesShown) {
  let currentItemIndex = 0
  const dd = createEmptyDD()
  parentElement.append(dd)

  initDD(dd, newIndex => currentItemIndex = newIndex)
  fillItems(categories, items, dd, currentItemIndex, onItemElementCreated, isEmptyCategoriesShown)
}

export default createDropdown

export const data = 123
const subListElements = [...document.querySelectorAll('li > ul')]
subListElements.forEach(listEl => {
  listEl.style.display = 'none'
  listEl.parentElement.style.cursor = 'pointer'
  listEl.parentElement.addEventListener('click', e => {
    e.stopPropagation()
    if (e.target !== listEl.parentElement) {
      return
    }

    if (listEl.style.display) {
      listEl.style.display = ''
    }
    else {
      listEl.style.display = 'none'
    }
  })
})

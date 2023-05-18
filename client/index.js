'use strict';
import './toggler.js'
import './test-framework.js'
import './styles.css'

window.addEventListener('error', (event) => {
  console.log('Ooops', event)
})

const CURRENT_LI_KEY = 'currentLi';
const allLiElements = [...document.querySelectorAll('.lesson-plan li')];
const currentLiIndex = localStorage.getItem(CURRENT_LI_KEY);
if (currentLiIndex) {
  const elementToHighlight = allLiElements[currentLiIndex];
  setAsActive(elementToHighlight);
}

document.querySelector('.lesson-plan').addEventListener('click', e => {
  if (e.target.nodeName !== 'LI') {
    return;
  }

  const previousActive =  document.querySelector('.lesson-plan li.active');
  if (previousActive) {
    previousActive.classList.remove('active');
  }

  localStorage.setItem(CURRENT_LI_KEY, allLiElements.indexOf(e.target));
  setAsActive(e.target);
})

function setAsActive(element) {
  element?.classList.add('active')
}
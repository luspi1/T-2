const contactBtnsWrapper = document.querySelector('.contact-us__choice-controllers')

const showTargetTab = (newDataTab, oldDataTab) => {
  const newTargetTab = document.querySelector(`.contact-us__choice-item[data-tab="${newDataTab}"]`)
  const oldTargetTab = document.querySelector(`.contact-us__choice-item[data-tab="${oldDataTab}"]`)

  if (newTargetTab && oldTargetTab) {
    newTargetTab.classList.add('contact-us__choice-item_active')
    oldTargetTab.classList.remove('contact-us__choice-item_active')
  }
}


if (contactBtnsWrapper) {
  contactBtnsWrapper.addEventListener('click', (e) => {
    if (!e.target.classList.contains('contact-us__choice-btn_active') && !e.target.classList.contains('contact-us__choice-controllers')) {
      const activeBtn = e.currentTarget.querySelector('.contact-us__choice-btn_active')
      activeBtn.classList.remove(('contact-us__choice-btn_active'))
      e.target.classList.add(('contact-us__choice-btn_active'))
      showTargetTab(e.target.dataset.tab, activeBtn.dataset.tab)
    }
  })
}

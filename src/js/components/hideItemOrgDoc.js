// Скрытие и показ элементов на странице - Документы в личном кабинете юридического лица

const orgDocItems = document.querySelectorAll('.cabinet-org-documents__item')

if (orgDocItems) {
  orgDocItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
      const target = event.target
      if (target && target.classList.contains('cabinet-org-documents__btn-hide')) {
        item.classList.toggle('_hidden')
        target.classList.toggle('_active')
        target.textContent = 'ДОКУМЕНТ СКРЫТ'
        if (!target.classList.contains('_active')) {
          target.textContent = 'СКРЫТЬ ДОКУМЕНТ'
        }
      }
    })
  })
}

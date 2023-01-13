import Choices from "choices.js"


const initSelects = () => {
  const mainSelects = document.querySelectorAll('select[data-select="main-select"]')
  const filterResetBtns = document.querySelectorAll('button[data-filter-reset]')


  if (mainSelects) {
    mainSelects.forEach(select => {
      const choices = new Choices(select, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        allowHTML: true
      })

      if (filterResetBtns) {
        filterResetBtns.forEach(resetBtn => {
          resetBtn.addEventListener('click', () => {
            choices.setChoiceByValue('all')
          })
        })
      }
    })
  }
}

initSelects()

export {
  initSelects
}



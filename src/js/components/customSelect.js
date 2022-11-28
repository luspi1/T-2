import Choices from "choices.js";

const selectsObjectsPage = document.querySelectorAll('.objects__select-row select')

if (selectsObjectsPage) {
  selectsObjectsPage.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      allowHTML: true
    })
  })
}

const selectsNewObjectPage = document.querySelectorAll('.form__item select')

if (selectsNewObjectPage) {
  selectsNewObjectPage.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      allowHTML: true
    })
  })
}

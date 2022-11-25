import Choices from "choices.js";

const selectObjectsPage = document.querySelectorAll('.objects__select-row select')

if (selectObjectsPage) {
  selectObjectsPage.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      allowHTML: true
    })
  })
}

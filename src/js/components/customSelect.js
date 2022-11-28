import Choices from "choices.js";

const mainSelects = document.querySelectorAll('select[data-select="main-select"]')

if (mainSelects) {
  mainSelects.forEach(select => {
    const choices = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      allowHTML: true
    })
  })
}


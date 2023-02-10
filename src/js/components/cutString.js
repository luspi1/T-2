import { cutString } from "../_functions"

//обрезка длинных строк на странице элемент шаблона


const allCutStrings = document.querySelectorAll('[data-shear]')


if (allCutStrings) {
  cutString(allCutStrings)
}


import { cutString } from "../_functions";

//обрезка длинных строк  на странице элемент шаблона

const trimNewObjStrings = document.querySelectorAll('.new-object-form span[data-shear]');
cutString(trimNewObjStrings);


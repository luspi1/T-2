import Inputmask from "inputmask";

const phoneInputs = document.querySelectorAll('.phone-mask');

if (phoneInputs) {
  phoneInputs.forEach(input => {
    Inputmask({
      "mask": "+7 (999) 999-99-99",
      showMaskOnHover: false,
    }).mask(input);
  })
}

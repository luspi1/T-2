import AirDatepicker from "air-datepicker"

const textDateInputs = document.querySelectorAll('.date-time-input__date input')

if (textDateInputs) {

  textDateInputs.forEach(el => {
    new AirDatepicker(el, {
      dateFormat(date) {
        return date.toLocaleString('ru', {
          year: 'numeric',
          day: '2-digit',
          month: 'long'
        })
      }
    })
  })
}

const textTimeInputs = document.querySelectorAll('.date-time-input__time input')

if (textTimeInputs) {

  textTimeInputs.forEach(el => {
    new AirDatepicker(el, {
      onlyTimepicker: true,
      timepicker: true,
    })

  })
}

const numbDateInputs = document.querySelectorAll('input[data-date-type="numb"]')

if (numbDateInputs) {
  numbDateInputs.forEach(el => new AirDatepicker(el))
}

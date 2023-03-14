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




const allDateInputs = document.querySelectorAll('input[data-date-start]')

if (allDateInputs) {
  allDateInputs.forEach(el => {
    const {dateStart} = el.dataset

    const customDate = new AirDatepicker(el, {
      startDate: dateStart,
    })

    el.addEventListener('click', (e) => {
      const featuredDate = e.currentTarget.value.split('.').reverse().join('-')
      if (featuredDate) {
        customDate.selectDate(featuredDate)
        customDate.setViewDate(featuredDate)
      }
    })
  })
}





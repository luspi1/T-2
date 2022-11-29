import IMask from 'imask';


const inputsNumMask = document.querySelectorAll('.number-mask');

inputsNumMask.forEach(element => {
  const currencyMask = IMask(
    element,
    {
      mask: 'num',
      blocks: {
        num: {
          mask: Number,
          thousandsSeparator: ' '
        }
      }
    })
})


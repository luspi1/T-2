import IMask from 'imask'

const initAllMasks = () => {

  // Маски для номеров
  const inputsNumMask = document.querySelectorAll('.number-mask')
  if (inputsNumMask) {
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
  }

  // Основные маски с передачей шаблона в data-атрибут mask-template
  const inputsMainMask = document.querySelectorAll('.main-mask')
  if (inputsMainMask) {
    inputsMainMask.forEach(element => {
      const maskTemplate = element.dataset.maskTemplate
      const currencyMask = IMask(
        element,
        {
          mask: maskTemplate
        })
    })
  }
}

initAllMasks()

export { initAllMasks }

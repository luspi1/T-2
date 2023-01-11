import IMask from 'imask';

const initMasks = () => {
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
}

initMasks()


const initPhoneMasks = () => {
  const inputsPhoneMask = document.querySelectorAll('.phone-mask');

  inputsPhoneMask.forEach(element => {
    const currencyMask = IMask(
      element,
     {
            mask: '+{7}(000)000-00-00'
      })
  })
}

initMasks()
initPhoneMasks()



export {
  initMasks,
  initPhoneMasks
}


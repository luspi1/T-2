const animInputs = document.querySelectorAll('.main-input input')

if (animInputs) {
  animInputs.forEach(input => {

    input.addEventListener('focusin', (e) => {
      const inputTarget = e.target;
      inputTarget.classList.add('main-input_active')
    })

    input.addEventListener('focusout', (e) => {
      const inputTarget = e.target;
      if (!inputTarget.value) {
        inputTarget.classList.remove('main-input_active')
      }
    })
  })
}

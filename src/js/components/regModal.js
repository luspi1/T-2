import { Dropzone } from 'dropzone'

const regModal = document.querySelector('#reg-modal')

if (regModal) {

  //Валидация

  const changeValidInputs = (modalState) => {
    const allValidateInputs = regModal.querySelectorAll('input, textarea')
    allValidateInputs.forEach(el => el.required = false)
    const targetValidateInputs = regModal.querySelectorAll(`.${modalState} input, .${modalState} textarea`)
    targetValidateInputs.forEach(el => el.required = true)
  }

  const controllBtns = regModal.querySelectorAll('button[data-btn-state]')
  if (controllBtns) {
    controllBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('reg-modal__next-btn')) {

          const currentBlock = e.currentTarget.closest('.reg-modal__block')
          const validateInputs = currentBlock.querySelectorAll('input, textarea')

          const validateMessage = currentBlock.querySelector('.reg-modal__alert-change')

          const isValid = Array.from(validateInputs).every(el => el.checkValidity())
          if (!isValid) {
            validateMessage.classList.remove('hidden')
            return
          } else {
            validateMessage.classList.add('hidden')
          }
        }
        changeValidInputs(e.currentTarget.dataset.btnState)
        regModal.dataset.state = e.currentTarget.dataset.btnState
      })
    })
  }


  // Валидация совпадения паролей

  const regForm = regModal.querySelector('.reg-modal__form')
  const passInput = regForm.querySelector('.reg-modal__password')
  const repeatPassInput = regForm.querySelector('.reg-modal__repeat-password')
  const passAlert = regForm.querySelector('.reg-modal__alert-password')

  regForm.addEventListener('submit', (e) => {
    if (passInput.value !== repeatPassInput.value) {
      e.preventDefault()
      passAlert.classList.remove('hidden')
    }
  })


}


//Dropzone для загрузки сканов


//Dropzone для фото документов в личном кабинете

const regScans = document.querySelector('#reg-scans-dropzone')

if (regScans) {
  let regScansDropzone = new Dropzone(regScans, {
    maxFilesize: 5,
    url: "/include/ajax/upload_image.php",
    maxFiles: 6,
    thumbnailWidth: 40,
    thumbnailHeight: 40,
    acceptedFiles: '.png, .jpeg, .jpg',
    addRemoveLinks: true,
    clickable: '#reg-scans-add',
    previewsContainer: '.reg-scans-previews'
  })


}







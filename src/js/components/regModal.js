import { Dropzone } from 'dropzone'

const regModal = document.querySelector('#reg-modal')

if (regModal) {
  const controllBtns = regModal.querySelectorAll('button[data-btn-state]')
  if (controllBtns) {
    controllBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        regModal.dataset.state = e.currentTarget.dataset.btnState
      })
    })
  }
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

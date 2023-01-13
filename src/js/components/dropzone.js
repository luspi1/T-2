import { Dropzone }                           from "dropzone";
import { cutString, sendData, showInfoModal } from "../_functions";


//Dropzone для фото документов в личном кабинете

const passportPhoto = document.querySelector('#passport-dropzone');

if (passportPhoto) {
  let passportDropzone = new Dropzone(passportPhoto, {
    maxFilesize: 5,
    url: "/include/ajax/upload_image.php",
    maxFiles: 6,
    thumbnailWidth: 93,
    thumbnailHeight: 93,
    acceptedFiles: '.png, .jpeg, .jpg',
    addRemoveLinks: true,
    clickable: '#passport-add',
  });
}

//Dropzone для документов объектов недвижимости в личном кабинете

const newObjectDoc = document.querySelector('#new-object-doc-dropzone');

if (newObjectDoc) {
  let newObjectDocDropzone = new Dropzone(newObjectDoc, {
    maxFilesize: 5,
    url: "./data/photo-data.txt",
    maxFiles: 10,
    acceptedFiles: '.txt, .doc, .rtf, .pdf',
    addRemoveLinks: true,
    clickable: '#new-object-doc-add',
    createImageThumbnails: false
  });

  newObjectDocDropzone.on("success", function () {
    const photoTitles = newObjectDoc.querySelectorAll('span[data-dz-name]')
    cutString(photoTitles, 12)
  });

}

//Dropzone для скана документа объектов недвижимости на странице Создать объект

const newObjectScanDoc = document.querySelector('#new-object-scan-doc-dropzone');

if (newObjectScanDoc) {

  const newObjectScanBtn = document.querySelector('#new-object-scan-doc-add')

  let newObjectScanDocDropzone = new Dropzone(newObjectScanDoc, {
    maxFilesize: 5,
    url: "./data/photo-data.txt",
    maxFiles: 50,
    acceptedFiles: '.png, .jpeg, .jpg, .pdf',
    addRemoveLinks: true,
    clickable: '#new-object-scan-doc-add',
    createImageThumbnails: false,
    removedfile: async function (file) {
      const data = {
        filetype: "new-obj-doc",
        id_person_doc: file._removeLink.dataset.id
      }

      const jsonData = JSON.stringify(data)
      const response = await sendData(jsonData, './data/photo-data.txt')
      const finishedResponse = await response.json()

      const {status, errortext} = finishedResponse

      if (status === 'ok') {
        if (file.previewElement != null && file.previewElement.parentNode != null) {

          newObjectScanBtn.classList.remove('hidden')
          file.previewElement.parentNode.removeChild(file.previewElement);
        }
      } else {
        showInfoModal(errortext)
      }
    }
  });

  newObjectScanDocDropzone.on("sending", function (file, xhr, formData) {
    formData.append("filetype", "new-obj-doc");
    formData.append("id_item", newObjectScanBtn.dataset.id)
  });

  newObjectScanDocDropzone.on("error", function (file) {
    showInfoModal('Ошибка 404')
    file.previewElement.parentNode.removeChild(file.previewElement);
  })

  newObjectScanDocDropzone.on("success", function (file, response) {

    const resObj = JSON.parse(response)
    const {status, errortext, id_person_doc} = resObj

    if (status !== 'ok') {
      showInfoModal(errortext)
      file.previewElement.parentNode.removeChild(file.previewElement);
    } else {
      newObjectScanBtn.classList.add('hidden')
      const photoTitles = newObjectScanDoc.querySelectorAll('span[data-dz-name]')
      cutString(photoTitles, 15)
      file._removeLink.setAttribute('data-id', id_person_doc)
    }
  });
}

//Dropzone для логотипа в создании учетной записи юридического лица

const createAccountLogo = document.querySelector('#create-account-dropzone');

if (createAccountLogo) {
  let logoDropzone = new Dropzone(createAccountLogo, {
    maxFilesize: 5,
    url: "/include/ajax/upload_image.php",
    maxFiles: 3,
    thumbnailWidth: 110,
    thumbnailHeight: 110,
    acceptedFiles: '.png, .jpeg, .jpg',
    addRemoveLinks: true,
    clickable: '#account-logo-add',
  });
}


//Dropzone загрузки фото и pdf в модалке "Добавление документа"

const addDocDropzones = document.querySelectorAll('#add-document-modal .dropzone')

if (addDocDropzones) {

  addDocDropzones.forEach(dropzone => {

    const dataObj = JSON.parse(dropzone.dataset.info)
    const {url, type, removeUrl, additional, acceptedFiles} = dataObj

    const addDocBtn = dropzone.querySelector('.add-document-modal__downloads-btn')
    const addDocStatus = dropzone.querySelector('.add-document-modal__dropzone-status')

    let docDropzone = new Dropzone(dropzone, {
      maxFilesize: 5,
      url: url,
      maxFiles: 1,
      acceptedFiles: acceptedFiles,
      clickable: addDocBtn,
      addRemoveLinks: true,
      createImageThumbnails: false,
      removedfile: async function (file) {
        const data = {
          filetype: type,
          id_person_doc: file._removeLink.dataset.id,
        }

        const jsonData = JSON.stringify(data)
        const response = await sendData(jsonData, removeUrl)
        const finishedResponse = await response.json()

        const {status, errortext} = finishedResponse

        if (status === 'ok') {
          if (file.previewElement != null && file.previewElement.parentNode != null) {
            addDocBtn.classList.remove('btn_disabled')
            addDocStatus.textContent = 'Не загружено'
            file.previewElement.parentNode.removeChild(file.previewElement)
          }
        } else {
          showInfoModal(errortext)
        }
      }
    })

    docDropzone.on("sending", function (file, xhr, formData) {
      formData.append("filetype", type)
      formData.append("id_item", addDocBtn.dataset.id)
      formData.append("additional", additional)
    })

    docDropzone.on("error", function (file) {
      showInfoModal('Ошибка 404')
      file.previewElement.parentNode.removeChild(file.previewElement)
    })

    docDropzone.on("success", function (file, response) {

      const resObj = JSON.parse(response)
      const {status, errortext, id_person_doc} = resObj

      if (status !== 'ok') {
        showInfoModal(errortext)
        file.previewElement.parentNode.removeChild(file.previewElement)
      } else {
        addDocBtn.classList.add('btn_disabled')
        addDocStatus.textContent = 'Загружено'
        file._removeLink.setAttribute('data-id', id_person_doc)
      }
    })


    const existingDocs = dropzone.querySelectorAll('.dz-preview')
    if (existingDocs.length > 0) {
      addDocBtn.classList.add('btn_disabled')
      addDocStatus.textContent = 'Загружено'
      existingDocs.forEach(el => {
        const deleteBtn = el.querySelector('.dz-remove')
        deleteBtn.addEventListener('click', async (e) => {
          const data = {
            filetype: type,
            id_person_doc: e.target.dataset.id
          }

          const jsonData = JSON.stringify(data)
          const response = await sendData(jsonData, removeUrl)
          const finishedResponse = await response.json()

          const {status, errortext} = finishedResponse

          if (status === 'ok') {
            if (el.previewElement !== null) {
              addDocBtn.classList.remove('btn_disabled')
              addDocStatus.textContent = 'Не загружено'
              el.parentNode.removeChild(el)
            }
          } else {
            showInfoModal(errortext)
          }
        })
      })
    }
  })
}

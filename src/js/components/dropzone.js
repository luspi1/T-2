import { Dropzone } from "dropzone";
import { cutString } from "../_functions";


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
  let newObjectScanDocDropzone = new Dropzone(newObjectScanDoc, {
    maxFilesize: 5,
    url: "./data/photo-data.txt",
    maxFiles: 1,
    acceptedFiles: '..png, .jpeg, .jpg, .pdf',
    addRemoveLinks: true,
    clickable: '#new-object-scan-doc-add',
    createImageThumbnails: false
  });

  newObjectScanDocDropzone.on("success", function () {
    const photoTitles = newObjectScanDocDropzone.querySelectorAll('span[data-dz-name]')
    cutString(photoTitles, 12)
  });

}


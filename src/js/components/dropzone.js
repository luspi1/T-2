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
    thumbnailWidth: 93,
    thumbnailHeight: 93,
   // acceptedFiles: '.txt, .doc, .rtf, .pdf',
   acceptedFiles: 'application/rtf',
    addRemoveLinks: true,
    clickable: '#new-object-doc-add',
  });

  newObjectDocDropzone.on("success", function () {
    const photoTitles = newObjectDoc.querySelectorAll('span[data-dz-name]')
    cutString(photoTitles, 12)
  });

}



//Dropzone для фото объектов недвижимости в личном кабинете

const newObjectPhoto = document.querySelector('#new-object-photo-dropzone');

if (newObjectPhoto) {
  let newObjectPhotoDropzone = new Dropzone(newObjectPhoto, {
    maxFilesize: 5,
    url: "./data/photo-data.txt",
    maxFiles: 10,
    thumbnailWidth: 93,
    thumbnailHeight: 93,
    acceptedFiles: '.png, .jpeg, .jpg',
    addRemoveLinks: true,
    clickable: '#new-object-photo-add',
  });

  newObjectPhotoDropzone.on("success", function () {
    const photoTitles = newObjectPhoto.querySelectorAll('span[data-dz-name]')
    cutString(photoTitles, 12)
  });


}


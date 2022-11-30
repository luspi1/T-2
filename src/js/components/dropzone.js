import { Dropzone } from "dropzone";



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

//Dropzone для фото объектов недвижимости в личном кабинете

const newObjectPhoto = document.querySelector('#new-object-dropzone');

if (newObjectPhoto) {
  let newObjectDropzone = new Dropzone(newObjectPhoto, {
    maxFilesize: 5,
    url: "/include/ajax/upload_image.php",
    maxFiles: 10,
    thumbnailWidth: 93,
    thumbnailHeight: 93,
    acceptedFiles: '.png, .jpeg, .jpg',
    addRemoveLinks: true,
    clickable: '#photo-object-add',
  });
}

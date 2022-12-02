import { cutString } from "../_functions";

//обрезка длинных строк на странице элемент шаблона

const trimNewObjStrings = document.querySelectorAll('.new-object-form span[data-shear]');
cutString(trimNewObjStrings);

//обрезка длинных строк на странице карточки объекта

const trimObjCardStrings = document.querySelectorAll('.object-card-page [data-shear]');
cutString(trimObjCardStrings);

//обрезка длинных строк на странице аукцион

const trimAuctionStrings = document.querySelectorAll('.auctions-page [data-shear]');
cutString(trimAuctionStrings);

//обрезка длинных строк на странице заявка на проведение аукциона

const trimNewAuctionStrings = document.querySelectorAll('.new-auction-page [data-shear]');
cutString(trimNewAuctionStrings);

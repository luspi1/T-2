// Обрезка длинного текста на определенную длину
const cutString = (stringArray) => {
  stringArray.forEach(str => {
    const cutLength = +str.dataset.shear

    if (cutLength && cutLength < str.textContent.length) {
      str.textContent = `${str.textContent.substring(0, cutLength)}...`
    }
  })
}

export {
  cutString
 }

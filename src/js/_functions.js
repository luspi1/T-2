// Обрезка длинного текста на определенную длину
const cutString = (stringArray, stringLength) => {
  stringArray.forEach(str => {
    let cutLength = 0
    stringLength ? cutLength = stringLength : cutLength = +str.dataset.shear

    if (cutLength && cutLength < str.textContent.length) {
      str.textContent = `${str.textContent.substring(0, cutLength)}...`
    }
  })
}

export {
  cutString
}

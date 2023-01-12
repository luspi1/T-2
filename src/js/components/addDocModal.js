const addDocModal = document.querySelector('#add-document-modal')

if (addDocModal) {
  const addDocSelects = addDocModal.querySelectorAll('.add-document-modal__checkbox')
  addDocSelects.forEach(el => {
    el.addEventListener('change', (e) => {
      addDocModal.dataset.docType = e.target.value
    })
  })
}

const filterResetBtns = document.querySelectorAll('button[data-filter-reset]')

const resetFilters = (e) => {

  const currentFilter = e.currentTarget.dataset.filterReset
  const resetInputs = document?.querySelectorAll(`input[data-filter=${currentFilter}`)
  if (resetInputs) {
    resetInputs.forEach(input => {
      input.value = ''
    })
  }
}

if (filterResetBtns) {
  filterResetBtns.forEach(resetBtn => {
    resetBtn.addEventListener('click', resetFilters)
  })
}

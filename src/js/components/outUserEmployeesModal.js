//Закрытие модалки /Приглашение внешнего Пользователя в Систему/

import { modalOverlay } from '../_vars'

const outUserCloseModalBtn = document.querySelector('.out-user-close-modal-btn')
const showModalBtn = document.querySelector('.add-employees-modal__show-btn')
const outUserModal = document.querySelector('#out-user-employees-modal')
const addEmployeesModal = document.querySelector('#add-employees-modal')

if (outUserCloseModalBtn) {
  outUserCloseModalBtn.addEventListener('click', () => {
    outUserModal.classList.remove('_active')
    addEmployeesModal.style.opacity = '1'
  })

  modalOverlay.addEventListener('click', () => {
    outUserModal.classList.remove('_active')
    addEmployeesModal.style.opacity = '1'
  })

}

if (showModalBtn) {
  showModalBtn.addEventListener('click', () => {
    addEmployeesModal.style.opacity = '0'
  })
}

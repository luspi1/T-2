//Модалка регистрации и авторизации пользователя

const signIn = document.querySelector('.sign-in')
const authModal = document.querySelector('#auth-modal')
const authBtns = signIn.querySelectorAll('button')

if (signIn) {
  authBtns.forEach(btn => {
    btn.addEventListener('click', ({currentTarget}) => {
      const dataBtn = btn.dataset.auth;
      signIn.setAttribute('data-auth-style', dataBtn)
    })
  })

  const regBtns = signIn.querySelectorAll('button[data-open-modal]')

  if (regBtns) {
    regBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        authModal.classList.remove('_active')
      })
    })
  }

}

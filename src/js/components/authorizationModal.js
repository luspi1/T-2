//Модалка регистрации и авторизации пользователя

const signIn = document.querySelector('.sign-in')
const authModal = document.querySelector('#auth-modal')

if (signIn) {
  const authBtns = signIn.querySelectorAll('button')
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

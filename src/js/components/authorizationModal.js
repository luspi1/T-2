//Модалка регистрации и авторизации пользователя

const signIn = document.querySelector('.sign-in')
const authBtns = signIn.querySelectorAll('button')

if (signIn) {
  authBtns.forEach(btn => {
    btn.addEventListener('click', ({currentTarget}) => {
      const dataBtn = btn.dataset.auth;
      signIn.setAttribute('data-auth-style', dataBtn)
    })
  })
}

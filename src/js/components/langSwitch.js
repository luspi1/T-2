const langSwitch = document.querySelector('.main-menu__lang-switch')

if (langSwitch) {
  const switchBtns = langSwitch.querySelectorAll('.main-menu__lang-btn')
  langSwitch.addEventListener('click', (e) => {
    if (!e.target.classList.contains('main-menu__lang-btn_active')) {
      switchBtns.forEach(btn => btn.classList.remove('main-menu__lang-btn_active'))
      e.target.classList.add('main-menu__lang-btn_active')
    }
  })
}

(() => {
  const menuButton = document.querySelector('#menu__button');
  const menuList = document.querySelector('#menu__list');

  menuButton.addEventListener('click', () => {
    let expanded = menuButton.getAttribute('aria-expanded') === 'true';
    
    menuButton.toggleAttribute("aria-expanded");
    menuButton.setAttribute('aria-label', expanded ? 'Открыть меню' : 'Закрыть меню');
    menuButton.classList.toggle('menu__button--open');
    menuList.classList.toggle('menu__list--open');
  });

  const anchors = document.querySelectorAll('.js-menu__link');

  for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href');
      
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    })
  }
})();

function getMenu() {
    return document.getElementById('menu');
}

function getCloseMenuBtn() {
    return document.getElementById('closeBtn');
}

function openMenu() {
    const menu = getMenu();
    const closeBtn = getCloseMenuBtn();

    closeBtn.style.display = 'block';
    menu.classList.remove('menu');
    menu.classList.add('menu-fullscreen');
    document.body.classList.add('lock');
}

function closeMenu() {
    const menu = getMenu();
    const closeBtn = getCloseMenuBtn();

    closeBtn.style.display = 'none';
    menu.classList.remove('menu-fullscreen');
    menu.classList.add('menu');
    document.body.classList.remove('lock');
}

window.addEventListener('resize', (e) => {
    if (e.target.innerWidth > 768) {
        closeMenu();
    }
});

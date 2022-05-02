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
    menu.style.display = 'block';
    document.body.classList.add('lock');
}

function closeMenu() {
    const menu = getMenu();
    const closeBtn = getCloseMenuBtn();

    closeBtn.style.display = 'none';
    menu.style.display = 'none';
    document.body.classList.remove('lock');
}

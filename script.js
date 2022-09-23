const subMenuEl = document.querySelectorAll('.sub-menu-1')

window.onload(showEverything())

function showEverything() {

    subMenuEl.forEach((subMenu) => {
        subMenu.classList.add('show');
    })



    setTimeout(() => {
        subMenuEl.forEach((subMenu) => subMenu.classList.remove('show'))
    }, 1000);

}   
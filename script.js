var header = document.getElementById("header")
var nav = document.getElementById("nav")

var showMenu = false

function toggleSidebar() {
    showMenu = !showMenu

    if (showMenu) {
        nav.style.marginRight = '0'
        nav.style.animationName = 'showMenu'
    } else
        nav.style.marginRight = '-100vw'
}

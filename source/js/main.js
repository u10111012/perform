console.clear()

const addToFavBtn = document.querySelectorAll(".btn-addToFav")
const addToCartBtn = document.querySelectorAll(".btn-addToCart")
const overlay = document.querySelector("#overlay")
const navbarToggler = document.getElementById("navbar__toggler")
const burgerNav = document.getElementById("burgerNav")
const messages = ["已加入我的收藏", "已加入購物車"]

addToFavBtn.forEach(btn => btn.addEventListener("click", openOverlay))
addToCartBtn.forEach(btn => btn.addEventListener("click", openOverlay))
overlay.addEventListener("click", closeOverlay)
navbarToggler.addEventListener("click", openBurgerNav)
burgerNav.addEventListener("click", closeBurgerNav)

function openOverlay(e) {
  const msg = document.querySelector(".overlay-msg")
  if (e.target.classList.contains("btn-addToFav")) {
    msg.textContent = messages[0]
  } else {
    msg.textContent = messages[1]
  }
  overlay.classList.remove("d-none")
  overlay.classList.add("d-flex")
}

function closeOverlay() {
  overlay.classList.remove("d-flex")
  overlay.classList.add("d-none")
}

function openBurgerNav() {
  burgerNav.classList.add("active")
}

function closeBurgerNav(e) {
  if(e.target.nodeName !== "A")
  burgerNav.classList.remove("active")
}
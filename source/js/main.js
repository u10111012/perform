console.clear()

const addToFavBtn = document.querySelectorAll(".btn-addToFav")
const addToCartBtn = document.querySelectorAll(".btn-addToCart")
const overlay = document.querySelector("#overlay")
const messages = ["已加入我的收藏", "已加入購物車"]

addToFavBtn.forEach(btn => btn.addEventListener("click", openOverlay))
addToCartBtn.forEach(btn => btn.addEventListener("click", openOverlay))
overlay.addEventListener("click", closeOverlay)

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
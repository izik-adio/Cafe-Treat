document.addEventListener("DOMContentLoaded", ()=>{
  const mobile_btn = document.getElementById("mobile-menu_btn")
  const mobile_nav = document.getElementById("mobile-nav")
  const toggle_menu = ()=>{
    mobile_nav.classList.toggle("hidden")
    mobile_nav.classList.toggle("flex")

    mobile_btn.children[1].classList.toggle("hidden")
    mobile_btn.children[0].classList.toggle("menu-bar-1")
    mobile_btn.children[2].classList.toggle("menu-bar-2")
  }
  mobile_btn.addEventListener("click", toggle_menu)
  mobile_nav.addEventListener("click", toggle_menu)
})

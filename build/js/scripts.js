document.addEventListener("DOMContentLoaded", () => {
  const mobile_btn = document.getElementById("mobile-menu_btn");
  const mobile_nav = document.getElementById("mobile-nav");

  // contact
  const contact_section = document.getElementById("contact");
  const contact_btn_1 = document.getElementById("contact-btn-1");
  const contact_btn_2 = document.getElementById("contact-btn-2");
  const close_contact_btn = document.getElementById("close-contact");

  const toggle_contact = () => {
    contact_section.classList.toggle("hidden");
    contact_section.classList.toggle("grid");
  };

  contact_btn_1.onclick = toggle_contact;
  contact_btn_2.onclick = toggle_contact;
  close_contact_btn.onclick = toggle_contact;

  window.onclick = function (event) {
    if (event.target == contact_section) {
      toggle_contact();
    }
  };

  const toggle_menu = () => {
    mobile_nav.classList.toggle("hidden");
    mobile_nav.classList.toggle("flex");

    mobile_btn.children[1].classList.toggle("hidden");
    mobile_btn.children[0].classList.toggle("menu-bar-1");
    mobile_btn.children[2].classList.toggle("menu-bar-2");
  };
  mobile_btn.addEventListener("click", toggle_menu);
  mobile_nav.addEventListener("click", toggle_menu);
});

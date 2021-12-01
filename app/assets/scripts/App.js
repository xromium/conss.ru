import "../styles/styles.css"
import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"

new RevealOnScroll(document.querySelectorAll(".overview__item"), 75)
new RevealOnScroll(document.querySelectorAll(".feature-item"), 80)
new RevealOnScroll(document.querySelectorAll(".site-header__btn-consult"), 210)

let mobileMenu = new MobileMenu()

if (module.hot) {
  module.hot.accept()
}

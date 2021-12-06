import "../styles/styles.css"
import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"
import StickyHeader from "./modules/StickyHeader"
import TogglePills from "./modules/TogglePills"

let stickyHeader = new StickyHeader()
let togglePills = new TogglePills()

new RevealOnScroll(document.querySelectorAll(".overview__item"), 75)
new RevealOnScroll(document.querySelectorAll(".feature-item"), 80)

let mobileMenu = new MobileMenu()

if (module.hot) {
  module.hot.accept()
}

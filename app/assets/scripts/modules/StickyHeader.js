import throttle from "lodash/throttle"

class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector(".site-header")
    this.firstAnimation = document.querySelector(".sustainability__animations")
    this.events()
  }

  events() {
    window.addEventListener(
      "scroll",
      throttle(() => this.runOnScroll(), 200)
    )
  }

  runOnScroll() {
    if (window.scrollY > 60) {
      this.siteHeader.classList.add("site-header--dark")
    } else {
      this.siteHeader.classList.remove("site-header--dark")
    }

    if (window.scrollY > 1360) {
      this.firstAnimation.classList.add("sustainability__animations--animation-started")
    } else {
      this.firstAnimation.classList.remove("sustainability__animations--animation-started")
    }
  }
}

export default StickyHeader

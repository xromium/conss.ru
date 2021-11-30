/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./app/assets/scripts/modules/MobileMenu.js
class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".site-header__menu-icon")
    this.menuContent = document.querySelector(".site-header__menu-content")
    this.siteHeader = document.querySelector(".site-header")
    this.events()
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
  }

  toggleTheMenu() {
    this.menuContent.classList.toggle("site-header__menu-content--is-visible")
    this.siteHeader.classList.toggle("site-header--is-expanded")
    this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
  }
}

/* harmony default export */ const modules_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./app/assets/scripts/App.js



let mobileMenu = new modules_MobileMenu()

if (false) {}

/******/ })()
;
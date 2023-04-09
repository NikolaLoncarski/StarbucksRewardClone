"use strict";

//Slider
const sliderBtns = document.querySelectorAll(".slider_btn");
const slideItems = document.querySelectorAll(".slider_item");

sliderBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sliderBtns.forEach((e) => e.classList.remove("active_btn"));
    btn.classList.add("active_btn");
    slideItems.forEach((item) => {
      item.classList.remove("slider_active");
      if (btn.textContent === item.getAttribute("data-src")) {
        item.classList.add("slider_active");
      }
    });
  });
});

//Dropdown Submenu

const drowDownMenuTitle = document.querySelectorAll(".menu_title");

drowDownMenuTitle.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("menu_active");
    if (item.classList.contains("menu_active")) {
      item.nextElementSibling.style.display = "unset";
    } else {
      item.nextElementSibling.style.display = "none";
    }
  });
});

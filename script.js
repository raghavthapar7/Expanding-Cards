"use strict";

const panels = document.querySelectorAll(".panel");
let activePanel = document.querySelector(".active");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    activePanel.classList.remove("active");
    panel.classList.add("active");
    activePanel = panel;
  });
});

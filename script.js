"use strict";

const rightbtn = document.querySelector(".btn-right");
const leftbtn = document.querySelector(".btn-left");
const panels = document.querySelectorAll(".panel");
let activePanel = document.querySelector(".active");
let activePanelIndex = 0;

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    activePanel.classList.remove("active");
    panel.classList.add("active");
    activePanel = panel;
  });
});

// Keeping the starting index of 0
rightbtn.addEventListener("click", function () {
  panels[activePanelIndex].classList.remove("active");
  activePanelIndex++;
  panels[activePanelIndex].classList.add("active");
});

leftbtn.addEventListener("click", function () {
  panels[activePanelIndex].classList.remove("active");
  activePanelIndex--;
  panels[activePanelIndex].classList.add("active");
});

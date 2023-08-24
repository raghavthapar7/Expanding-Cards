"use strict";

const rightbtn = document.querySelector(".btn-right");
const leftbtn = document.querySelector(".btn-left");
const panels = document.querySelectorAll(".panel");
let activePanel = document.querySelector(".active");
let activePanelIndex = 0;

panels.forEach((panel, index) => {
  panel.addEventListener("click", () => {
    activePanel.classList.remove("active");
    panel.classList.add("active");
    activePanelIndex = index;
    activePanel = panels[activePanelIndex];
  });
});

// Keeping the starting index of 0
rightbtn.addEventListener("click", function () {
  panels[activePanelIndex].classList.remove("active");
  activePanelIndex++;
  if (activePanelIndex > 4) activePanelIndex = 0;
  panels[activePanelIndex].classList.add("active");
  activePanel = panels[activePanelIndex];
});

leftbtn.addEventListener("click", function () {
  panels[activePanelIndex].classList.remove("active");
  activePanelIndex--;
  if (activePanelIndex < 0) activePanelIndex = 4;
  panels[activePanelIndex].classList.add("active");
  activePanel = panels[activePanelIndex];
});

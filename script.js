let panelContainers = document.querySelectorAll(".panel-container");
let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panels.forEach((el) => {
      el.classList.remove("active");
      el.parentElement.classList.remove("active");
    });
    
    panel.classList.add("active");
    panel.parentElement.classList.add("active");
  });
});

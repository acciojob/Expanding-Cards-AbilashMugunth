let panelContainers = document.querySelectorAll(".panel-container");
let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panels.forEach((el) => {
      el.classList.remove("active");
      el.parentElement.classList.remove("active");
      el.parentElement.children[1].classList.add("hide");
    });

    panel.classList.add("active");
    panel.parentElement.classList.add("active");
    panel.parentElement.children[1].classList.remove("hide");
  });
});
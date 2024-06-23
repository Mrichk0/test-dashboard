document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const toggleButton = document.getElementById("sidebar-toggle");
  const backdrop = document.querySelector(".backdrop");

  toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("visible");
    updateToggleButton();
    toggleBackdrop();
  });

  function updateToggleButton() {
    if (sidebar.classList.contains("visible")) {
      toggleButton.innerHTML = "&#10094;";
    } else {
      toggleButton.innerHTML = "&#10095;";
    }
  }
  updateToggleButton();

  function toggleBackdrop() {
    if (sidebar.classList.contains("visible")) {
      backdrop.classList.add("visible");
      document.body.style.overflow = "hidden";
    } else {
      backdrop.classList.remove("visible");
      document.body.style.overflow = "visible";
    }
  }
});

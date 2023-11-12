document.addEventListener("DOMContentLoaded", function() {
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownButton.addEventListener("click", function(e) {
    e.stopPropagation();
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });

  document.addEventListener("click", function(e) {
    if (e.target !== dropdownButton) {
      dropdownContent.style.display = "none";
    }
  });

  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach(item => {
    item.addEventListener("click", function(e) {
      e.stopPropagation();
      dropdownButton.innerHTML = item.innerHTML;
      dropdownContent.style.display = "none";
    });
  });
});

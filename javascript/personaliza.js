document.addEventListener("DOMContentLoaded", function() {
    const div1Radio = document.getElementById("div1");
    const div2Radio = document.getElementById("div2");
    const div1Content = document.getElementById("div1-content");
    const div2Content = document.getElementById("div2-content");

    div1Radio.addEventListener("change", function() {
      if (div1Radio.checked) {
        div1Content.style.display = "flex";
        div2Content.style.display = "none";
      }
    });

    div2Radio.addEventListener("change", function() {
      if (div2Radio.checked) {
        div1Content.style.display = "none";
        div2Content.style.display = "flex";
      }
    });
  });
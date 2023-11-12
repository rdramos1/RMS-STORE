document.addEventListener('DOMContentLoaded', function () {
  const showPopupLink = document.getElementById('show-popup');
  const popup = document.getElementById('popup');
  const closePopupButton = document.getElementById('closePopup');

  showPopupLink.addEventListener('click', function (e) {
    e.preventDefault(); // Evitar que o link abra uma nova página
    popup.style.display = 'block';
  });

  closePopupButton.addEventListener('click', function () {
    popup.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const openModalBtns = document.querySelectorAll('.openModal'); // Получаем все три кнопки
  const modal = document.getElementById('myModal');
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeModalBtn = modal.querySelector('.close');

  const openModal = () => {
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
  };

  const closeModal = () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
  };

  const closeModalOnOverlayClick = (event) => {
    if (event.target === modalOverlay) {
      closeModal();
    }
  };

  const closeModalOnEscape = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  // Для каждой кнопки устанавливаем обработчик события клика
  openModalBtns.forEach(button => {
    button.addEventListener('click', openModal);
  });

  closeModalBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModalOnOverlayClick);
  document.addEventListener('keydown', closeModalOnEscape);
});

document.addEventListener('DOMContentLoaded', function() {
  setInterval(function() {
      // ваш код обновления контента здесь
  }, 5000); // обновлять каждые 5 секунд
});

document.addEventListener('DOMContentLoaded', function() {
  var menuItems = document.querySelectorAll('#myMenu li a');

  menuItems.forEach(function(item) {
      item.addEventListener('click', function(event) {
          event.preventDefault();
          var targetId = this.getAttribute('href').substring(1);
          var targetSection = document.getElementById(targetId);
          targetSection.scrollIntoView({ behavior: 'smooth' });
      });
  });
});


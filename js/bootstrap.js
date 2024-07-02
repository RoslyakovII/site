document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.animated-image');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          image.classList.add('animated-image-visible');
        }
      });
    });

    observer.observe(image);
  });

  document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.animated-image');
    const texts = document.querySelectorAll('.animated-text'); // Выбираем все элементы с классом ".animated-text"

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('animated-image')) {
                    entry.target.classList.add('animated-image-visible');
                } else {
                    entry.target.classList.add('animated-text-visible'); // Добавляем класс для анимации текста
                }
                observer.unobserve(entry.target); // Останавливаем наблюдение для элемента
            }
        });
    }, { threshold: 0.1 }); // Пороговое значение для запуска анимации

    observer.observe(image);
    texts.forEach(text => observer.observe(text)); // Начинаем наблюдение для каждого текстового элемента
});
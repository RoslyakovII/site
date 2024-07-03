  document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.animated-image');
    const texts = document.querySelectorAll('.animated-text'); 
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('animated-image')) {
                    entry.target.classList.add('animated-image-visible');
                } else {
                    entry.target.classList.add('animated-text-visible'); 
                }
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 }); 

    observer.observe(image);
    texts.forEach(text => observer.observe(text)); 
});
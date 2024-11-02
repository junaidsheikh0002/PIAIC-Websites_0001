document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Random lightning effect
    function triggerLightning() {
        const lightning = document.querySelector('.lightning');
        lightning.style.opacity = '0.8';
        setTimeout(() => {
            lightning.style.opacity = '0';
        }, 50);
        setTimeout(() => {
            lightning.style.opacity = '0.8';
        }, 100);
        setTimeout(() => {
            lightning.style.opacity = '0';
        }, 150);
    }

    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every second
            triggerLightning();
        }
    }, 1000);

    // Parallax effect for hero image
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Image gallery lazy loading
    const images = document.querySelectorAll('.gallery-image');
    const imageOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px 50px 0px"
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in-out';
        imageObserver.observe(img);
    });
});
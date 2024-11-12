document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70, 
                behavior: 'smooth'
            });
        });
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.5)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
        });
    });
});

const image = document.querySelector(".about-image img");

document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector(".about-image img");
    document.querySelector(".about-image").addEventListener("mouseenter", function () {
        image.style.transition = "transform 0.3s ease-out";
        image.style.transform = "scale(1.1)";
    });

    document.querySelector(".about-image").addEventListener("mouseleave", function () {
        image.style.transform = "scale(1)";
    });
});

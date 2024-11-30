// JavaScript for Interactivity

    // Smooth Scrolling for In-Page Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    window.onscroll = function() {
        changeHeaderColor();
    };

    function changeHeaderColor() {
        const header = document.querySelector('.navbar'); // Select the navbar
        const scrollPosition = window.scrollY; // Get the current scroll position

        console.log('Scrolling detected');

        if (scrollPosition > 25) { // Change color after scrolling 50 pixels    
            header.classList.add('scrolled'); // Add class to change color
        } else {
            header.classList.remove('scrolled'); // Remove class when back at the top
        }
    }

    // Carousel Auto-Slide every 1500 milliseconds
    const carousel = document.querySelector('#carouselExample');
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 7000,
        ride: 'carousel'
    });

    document.addEventListener("DOMContentLoaded", function() {
        const sections = document.querySelectorAll('.section');
    
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
    
        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing after it has become visible
                }
            });
        };
    
        const observer = new IntersectionObserver(callback, options);
    
        sections.forEach(section => {
            observer.observe(section);
        });
    });
    
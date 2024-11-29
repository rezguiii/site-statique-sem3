
// IntersectionObserver for smoother animations
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null, // Use the viewport
        threshold: 0.2 // Trigger the animation when 20% of the section is visible
    };

    // Callback function for the IntersectionObserver
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after animation starts
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});

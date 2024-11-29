document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');
    const summarySection = document.querySelector('#summary'); // Target summary section

    const observerOptions = {
        root: null, // Use the viewport
        threshold: 0.2 // Trigger the animation when 20% of the section is visible
    };

    // Callback function for the IntersectionObserver
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add visible class for smooth slide-in animation
                observer.unobserve(entry.target); // Stop observing after animation starts
                
                // If the summary section is visible, animate the text letter by letter
                if (entry.target === summarySection) {
                    animateText();
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });

    // Function to animate text in the summary section
    function animateText() {
        const text = summarySection.querySelector('.animated-text');
        const textContent = text.textContent;
        text.innerHTML = ''; // Clear the current content
        
        // Wrap each character and space in a span
        textContent.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char; // Handle space separately (non-breaking space)
            span.style.opacity = 0; // Initially set opacity to 0
            span.style.animationDelay = `${index * 0.05}s`; // Add a delay based on the index
            text.appendChild(span);
        });
    }
});

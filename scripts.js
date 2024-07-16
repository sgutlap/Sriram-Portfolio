
gsap.registerPlugin(ScrollTrigger);

//  header
gsap.from('header', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
});

gsap.from('main', {
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power2.out'
});

// navigation links
gsap.from('nav a', {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out'
});

ScrollTrigger.create({
    trigger: 'main',
    start: 'top center',
    onEnter: function () {
        gsap.to('.animated-element', { scale: 1.5, duration: 1 });
    },
    onLeaveBack: function () {
        gsap.to('.animated-element', { scale: 1, duration: 1 });
    }
});

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    alert('Form submitted! Thank you for contacting us.');
});

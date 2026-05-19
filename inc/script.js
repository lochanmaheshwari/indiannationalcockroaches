// Navbar scroll shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 40 ? '0 4px 20px rgba(0,0,0,0.1)' : 'none';
});

// Burger menu
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
burger.addEventListener('click', () => mobileNav.classList.toggle('open'));
document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
    }
});
function closeBurger() { mobileNav.classList.remove('open'); }

// Eligibility toggle
function toggleReq(n) {
    const row    = document.getElementById('req' + n);
    const circle = document.getElementById('circle' + n);
    row.classList.toggle('active');
    circle.classList.toggle('checked');
}

// Form submit
function handleForm(e) {
    e.preventDefault();
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
    e.target.reset();
}

// Scroll fade-in
const fadeEls = document.querySelectorAll('.m-row, .req-row, .mission-block, .hero-img-card, .vision-img-card, .banner-img-wrap');
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = entry.target.style.transform.replace('translateY(24px)', 'translateY(0)');
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    // keep existing transforms, just add translateY to them
    const current = el.style.transform || '';
    el.style.transform = current + ' translateY(24px)';
    io.observe(el);
});

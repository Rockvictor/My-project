// Mobile nav toggle (slide-in panel with overlay)
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');
  const navAnchors = document.querySelectorAll('.nav-links a');

  function openNav() {
    navLinks.classList.add('open');
    burger.classList.add('open');
    navOverlay.classList.add('show');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    navLinks.classList.remove('open');
    burger.classList.remove('open');
    navOverlay.classList.remove('show');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  burger.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeNav() : openNav();
  });
  navOverlay.addEventListener('click', closeNav);
  navAnchors.forEach(a => a.addEventListener('click', closeNav));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
  // Close the panel automatically if the viewport grows back to desktop size
  window.addEventListener('resize', () => { if (window.innerWidth > 980) closeNav(); });

  // Scroll reveal
  const revealEls = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // Count-up numbers
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const supEl = el.querySelector('sup');
    const supHTML = supEl ? supEl.outerHTML : '';
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.floor(eased * target);
      el.innerHTML = val.toLocaleString() + suffix + supHTML;
      if (p < 1) requestAnimationFrame(tick);
      else el.innerHTML = target.toLocaleString() + suffix + supHTML;
    }
    requestAnimationFrame(tick);
  }
  const counters = document.querySelectorAll('[data-count]');
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => cio.observe(c));

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navA = document.querySelectorAll('.nav-links a[data-nav]');
  window.addEventListener('scroll', () => {
    let current = 'top';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navA.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }, { passive: true });
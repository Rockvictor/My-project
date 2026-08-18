// Mobile nav toggle
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');
  burger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.cssText += 'flex-direction:column; position:absolute; top:64px; left:0; right:0; background:var(--cream); padding:20px 32px; border-bottom:1px solid var(--line); gap:16px; display:flex;';
  });

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
  const navA = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = 'top';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navA.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  });
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  document.querySelectorAll('.appointment-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you! Your appointment request has been received. We will contact you shortly.');
      form.reset();
    });
  });

  const animateCounter = (el, target, suffix, duration = 2000) => {
    const start = 0;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * eased);
      el.textContent = current.toLocaleString('en-IN');

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString('en-IN');
        if (suffix) {
          const suffixEl = el.parentElement.querySelector('.stat-suffix');
          if (suffixEl) suffixEl.textContent = suffix;
        }
      }
    };

    requestAnimationFrame(step);
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        const numEl = entry.target.querySelector('.stat-number-value');
        if (numEl) {
          const target = parseInt(numEl.dataset.target, 10);
          const suffix = numEl.dataset.suffix || '';
          animateCounter(numEl, target, suffix);
        }
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.stat-card').forEach(card => {
    statsObserver.observe(card);
  });

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => {
    fadeObserver.observe(el);
  });

  const params = new URLSearchParams(window.location.search);
  const doctorParam = params.get('doctor');

  if (doctorParam) {
    const doctorName = decodeURIComponent(doctorParam.replace(/\+/g, ' '));
    document.querySelectorAll('#doctor').forEach(field => {
      const option = Array.from(field.options).find(opt => opt.value === doctorName);
      if (option) {
        field.value = doctorName;
      }
    });

    const appointmentForm = document.querySelector('.appointment-form');
    if (appointmentForm) {
      appointmentForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
});

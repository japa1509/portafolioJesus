    document.addEventListener('DOMContentLoaded', () => {
      const sections = document.querySelectorAll('section');
      const navLi = document.querySelectorAll('.nav ul li a');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navLi.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href').substring(1) === entry.target.id) {
                link.classList.add('active');
              }
            });
          }
        });
      }, {
        threshold: 0.6
      });

      sections.forEach(section => {
        observer.observe(section);
      });
    });
  
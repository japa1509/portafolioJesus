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
    
    //Mostrando el texto de Preview con pasar el mouse

  //   const flecha = document.getElementsByClassName("flecha")
  //   const mostrarPreview = document.getElementsByClassName("preview")
  //   flecha.addEventListener("mouseover", () => {
  //     mostrarPreview.classList.remove("hidden");
  // });
  
  // flecha.addEventListener("mouseout", () => {
  //     mostrarPreview.classList.add("hidden");
  // });

  //   flecha = addEventListener ("click", () => {
  //     mostrarPreview.classList.toggle("hidden")
  // } )


  const flechas = document.querySelectorAll(".flecha");
const previews = document.querySelectorAll(".preview");

flechas.forEach((flecha, index) => {
    flecha.addEventListener("mouseover", () => {
        previews[index].classList.remove("hidden");
    });

    flecha.addEventListener("mouseout", () => {
        previews[index].classList.add("hidden");
    });
});
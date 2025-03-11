// Módulo 1: Carrusel de Perfiles
(function carouselModule() {
  const profileImages = document.querySelectorAll(".profile-image");
  const textContents = document.querySelectorAll(".text-content");
  const indicators = document.querySelectorAll(".indicator");

  let currentIndex = 0; // Índice actual del carrusel
  let intervalId = null; // Variable para almacenar el ID del intervalo

  // Función para cambiar al perfil especificado
  function changeProfile(index) {
    // Ocultar el perfil actual con animación
    profileImages[currentIndex].classList.remove("active");
    textContents[currentIndex].classList.remove("active");
    textContents[currentIndex].classList.add("exit"); // Agregar clase de salida
    indicators[currentIndex].classList.remove("active");

    // Esperar a que termine la animación de salida
    setTimeout(() => {
      textContents[currentIndex].classList.remove("exit"); // Limpiar clase de salida

      // Actualizar el índice
      currentIndex = index;

      // Mostrar el nuevo perfil con animación
      profileImages[currentIndex].classList.add("active");
      textContents[currentIndex].classList.add("active");
      indicators[currentIndex].classList.add("active");
    }, 500); // Duración de la animación de salida
  }

  // Función para iniciar el temporizador automático
  function startInterval() {
    if (intervalId) clearInterval(intervalId); // Detener el intervalo anterior si existe
    intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % profileImages.length;
      changeProfile(nextIndex);
    }, 15000); // Cambiar cada 10 segundos
  }

  // Iniciar el temporizador automáticamente al cargar la página
  startInterval();

  // Manejar clics en los indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      if (index !== currentIndex) {
        // Detener y reiniciar el temporizador al hacer clic
        clearInterval(intervalId);
        changeProfile(index);
        startInterval(); // Reiniciar el temporizador
      }
    });
  });

  // Inicializar con el primer perfil activo
  document.addEventListener("DOMContentLoaded", () => {
    profileImages[0].classList.add("active");
    textContents[0].classList.add("active");
    indicators[0].classList.add("active");
  });
})();

(function menuModule() {
  // Espera a que el DOM esté completamente cargado
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-menu a");
    const logoCursor = document.querySelector(".logo .cursor");

    if (!logoCursor) {
      console.error("El elemento .logo .cursor no fue encontrado.");
      return;
    }

    // Añadir eventos a los enlaces del menú
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        logoCursor.style.opacity = "0"; // Oculta el cursor del título
        logoCursor.style.animation = "none"; // Detiene la animación
      });

      link.addEventListener("mouseleave", () => {
        logoCursor.style.opacity = "1"; // Muestra el cursor del título
        setTimeout(() => {
          logoCursor.style.animation = "blink 1s infinite"; // Reactiva la animación
        }, 10); // Pequeño retraso para evitar problemas de renderizado
      });
    });
  });
})();

// Módulo 3: Tooltips
(function tooltipModule() {
  const orbitCircles = document.querySelectorAll(".orbit-circle");

  // Crear un elemento tooltip
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  document.body.appendChild(tooltip);

  // Añadir eventos para mostrar el tooltip
  orbitCircles.forEach((circle) => {
    circle.addEventListener("mouseenter", () => {
      const tooltipHTML = circle.getAttribute("data-tooltip"); // Obtener el contenido HTML
      tooltip.innerHTML = tooltipHTML; // Insertar el contenido como HTML

      // Posicionar el tooltip cerca del círculo
      const rect = circle.getBoundingClientRect();
      tooltip.style.top = `${
        rect.top + window.scrollY - tooltip.offsetHeight - 15
      }px`; // Ajuste de posición
      tooltip.style.left = `${
        rect.left +
        window.scrollX +
        circle.offsetWidth / 2 -
        tooltip.offsetWidth / 2
      }px`;
      tooltip.style.opacity = "1"; // Hacer visible el tooltip
    });

    circle.addEventListener("mouseleave", () => {
      tooltip.style.opacity = "0"; // Ocultar el tooltip
    });
  });
})();

// Módulo 4: Menú Hamburguesa
(function hamburgerMenuModule() {
  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (!hamburger || !navMenu) {
      console.error("El botón de hamburguesa o el menú no fueron encontrados.");
      return;
    }

    hamburger.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        setTimeout(() => {
          navMenu.style.maxHeight = "0";
        }, 300); // Esconde el menú después de la animación
      } else {
        navMenu.style.maxHeight = "500px"; // Ajusta según necesidad
        navMenu.classList.add("active");
      }
    });

    document.addEventListener("click", (event) => {
      if (
        !navMenu.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        navMenu.classList.remove("active");
        setTimeout(() => {
          navMenu.style.maxHeight = "0";
        }, 300);
      }
    });
  });
})();

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

// Módulo 2: Interacciones del Menú
(function menuModule() {
  const navLinks = document.querySelectorAll(".nav-menu a");
  const logoCursor = document.querySelector(".logo .cursor");

  // Añadir eventos a los enlaces del menú
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      logoCursor.style.opacity = "0"; // Oculta el cursor del título
      logoCursor.style.animation = "none"; // Detiene la animación
    });
    link.addEventListener("mouseleave", () => {
      logoCursor.style.opacity = "1"; // Muestra el cursor del título
      logoCursor.style.animation = "blink 1s infinite"; // Reactiva la animación
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

// Seleccionar todos los círculos orbitales
// const orbitCircles = document.querySelectorAll('.orbit-circle');
/* const orbitCircles = "";

// Función para detener todas las animaciones
function stopAllAnimations() {
    orbitCircles.forEach(circle => {
        circle.style.animationPlayState = 'paused';
    });
}

// Función para reanudar todas las animaciones
function resumeAllAnimations() {
    orbitCircles.forEach(circle => {
        circle.style.animationPlayState = 'running';
    });
}

// Añadir eventos de hover a cada círculo
orbitCircles.forEach(circle => {
    circle.addEventListener('mouseenter', stopAllAnimations); // Detener al entrar
    circle.addEventListener('mouseleave', resumeAllAnimations); // Reanudar al salir
}); */

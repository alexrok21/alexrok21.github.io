// Seleccionar elementos
const profileImages = document.querySelectorAll(".profile-image");
const textContents = document.querySelectorAll(".text-content");
const indicators = document.querySelectorAll(".indicator");

// Seleccionar elementos del nav
const navLinks = document.querySelectorAll(".nav-menu a");
const logoCursor = document.querySelector(".logo .cursor");

let currentIndex = 0; // Índice actual del carrusel

// Función para cambiar al perfil especificado
function changeProfile(index) {
  // Ocultar el perfil actual
  profileImages[currentIndex].classList.remove("active");
  textContents[currentIndex].classList.remove("active");
  indicators[currentIndex].classList.remove("active");

  // Actualizar el índice
  currentIndex = index;

  // Mostrar el nuevo perfil
  profileImages[currentIndex].classList.add("active");
  textContents[currentIndex].classList.add("active");
  indicators[currentIndex].classList.add("active");
}

// Añadir eventos a los botones
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    changeProfile(index);
  });
});

// Inicializar con el primer perfil activo
document.addEventListener("DOMContentLoaded", () => {
  profileImages[0].classList.add("active");
  textContents[0].classList.add("active");
  indicators[0].classList.add("active");
});

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

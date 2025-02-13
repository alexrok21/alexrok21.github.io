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

// Seleccionar elementos
const profileImages = document.querySelectorAll(".profile-image");
const textContents = document.querySelectorAll(".text-content");
const indicators = document.querySelectorAll(".indicator");

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

// Cambiar de perfil automáticamente cada 10 segundos
setInterval(() => {
  const nextIndex = (currentIndex + 1) % profileImages.length;
  changeProfile(nextIndex);
}, 10000);

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

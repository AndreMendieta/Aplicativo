let timer;
let isRunning = false;
let timeLeft = 25 * 60; // 25 minutos en segundos
let points = 0;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pointsDisplay = document.getElementById("points");
const plant = document.getElementById("plant");

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    startFocus();
  }
});

function startFocus() {
  isRunning = true;
  startBtn.disabled = true;
  timer = setInterval(() => {
    timeLeft--;
    updateDisplay();

    // Animación de planta cada 5 minutos
    if (timeLeft % 300 === 0) {
      plant.style.transform = "scale(1.1)";
      setTimeout(() => plant.style.transform = "scale(1)", 500);
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      isRunning = false;
      completeFocus();
    }
  }, 1000);
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function completeFocus() {
  timeLeft = 25 * 60; // reiniciar
  startBtn.disabled = false;
  points += 10;
  pointsDisplay.textContent = points;
  plant.textContent = "🌳"; // cambia la planta al completar sesión
  alert("¡Sesión completada! +10 puntos.");
  updateDisplay();
}
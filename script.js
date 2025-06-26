const clockTime = document.getElementById("clock-time");
const clockDate = document.getElementById("clock-date");
const toggleFormat = document.getElementById("toggle-format");
const toggleTheme = document.getElementById("toggle-theme");
const tickSound = document.getElementById("tick-sound");

let is24Hour = true;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let ampm = "";
  if (!is24Hour) {
    ampm = hours >= 12 ? " PM" : " AM";
    hours = hours % 12 || 12;
  }

  const timeStr =
    [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":") + ampm;

  const dateStr = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  clockTime.textContent = timeStr;
  clockDate.textContent = dateStr;

  if (tickSound) {
    tickSound.currentTime = 0;
    tickSound.play();
  }
}

const toggle = document.getElementById("toggle-format");
const formatLabel = document.getElementById("format-label");

toggle.addEventListener("change", () => {
  is24Hour = !toggle.checked; 
  formatLabel.textContent = toggle.checked ? "12-Hour" : "24-Hour";
});

updateClock();
setInterval(updateClock, 1000);
const darkModeSwitch = document.getElementById("darkModeSwitch");
const body = document.body;

// Load dark mode preference
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  darkModeSwitch.checked = true;
}

// Toggle dark mode and save preference
darkModeSwitch.addEventListener("change", () => {
  const isDarkMode = darkModeSwitch.checked;
  body.classList.toggle("dark-mode", isDarkMode);
  localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");
});

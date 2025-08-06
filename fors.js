// Typing Animation
const welcomeText = document.getElementById("welcome-text");
const titleElement = document.getElementById("professional-title");
const greetings = ["Hello", "Welcome", "Karibu", "Hola"];
const titles = [
  "Ethical Hacker | Software Engineer",
  "Security Specialist",
  "Penetration Tester",
];

let greetIndex = 0;
let titleIndex = 0;

function typeGreeting() {
  welcomeText.textContent = greetings[greetIndex];
  greetIndex = (greetIndex + 1) % greetings.length;
  setTimeout(typeGreeting, 2000);
}

function rotateTitles() {
  titleElement.textContent = titles[titleIndex];
  titleIndex = (titleIndex + 1) % titles.length;
  setTimeout(rotateTitles, 3000);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  typeGreeting();
  setTimeout(rotateTitles, 1000);
});

// Resume Download
function downloadResume() {
  const link = document.createElement("a");
  link.href = "resume.pdf";
  link.download = "Florence_Mwita_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Typing Animation
const welcomeText = document.getElementById("welcome-text");
const titleElement = document.getElementById("professional-title");
const greetings = ["Hello World!", "Welcome", "Karibu", "Hola", "你好"];
const titles = [
  "Ethical Hacker | Software Engineer",
  "Security Specialist",
  "Penetration Tester",
  "Full Stack Developer",
  "Cyber Security Analyst",
];

let greetIndex = 0;
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 100;

function typeGreeting() {
  const currentGreet = greetings[greetIndex];

  welcomeText.textContent = isDeleting
    ? currentGreet.substring(0, charIndex - 1)
    : currentGreet.substring(0, charIndex + 1);

  charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

  if (!isDeleting && charIndex === currentGreet.length) {
    isDeleting = true;
    speed = 50;
    setTimeout(typeGreeting, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    greetIndex = (greetIndex + 1) % greetings.length;
    speed = 100;
    setTimeout(typeGreeting, 500);
  } else {
    setTimeout(typeGreeting, speed);
  }
}

function rotateTitles() {
  titleIndex = (titleIndex + 1) % titles.length;
  titleElement.textContent = titles[titleIndex];
  setTimeout(rotateTitles, 3000);
}

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
  typeGreeting();
  setTimeout(rotateTitles, 2000);
});

// Resume Download Function
function downloadResume() {
  const link = document.createElement("a");
  link.href = "docs/Florence_Mwita_Resume.pdf";
  link.download = "Florence_Mwita_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

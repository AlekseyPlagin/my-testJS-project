// Находим элементы
const button = document.getElementById("magicBtn");
const output = document.getElementById("output");

// Список крутых фраз
const phrases = [
  "Ты — гений!",
  "JS — это магия!",
  "Кликни ещё раз!",
  "Ух ты! 🎉",
  "Ты открыл секрет!",
  "Вау, работает!",
  "JS живёт здесь!",
];

// Меняем цвет фона при клике
let clicks = 0;
button.addEventListener("click", () => {
  clicks++;

  // Меняем текст
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  output.textContent = `${randomPhrase} (Кликов: ${clicks})`;

  // Меняем цвет фона
  const colors = ["#667eea", "#f093fb", "#4facfe", "#43e97b", "#fa709a"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(135deg, ${randomColor}, #764ba2)`;

  // Добавляем анимацию кнопке
  button.style.transform = "scale(1.1)";
  setTimeout(() => (button.style.transform = ""), 150);
});

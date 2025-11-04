// === КНОПКА "МАГИЯ" (оставляем) ===
const magicBtn = document.getElementById("magicBtn");
const output = document.getElementById("output");

const phrases = [
  "Ты — гений!",
  "JS — это магия!",
  "Кликни ещё!",
  "Ух ты!",
  "Секрет открыт!",
];
let clicks = 0;

magicBtn.addEventListener("click", () => {
  clicks++;
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  output.textContent = `${phrase} (Кликов: ${clicks})`;

  const colors = ["#667eea", "#f093fb", "#4facfe", "#43e97b", "#fa709a"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(135deg, ${color}, #764ba2)`;

  magicBtn.style.transform = "scale(1.1)";
  setTimeout(() => (magicBtn.style.transform = ""), 150);
});

// === КАЛЬКУЛЯТОР ===
const calcResult = document.getElementById("calcResult");
const calcButtons = document.querySelectorAll(".buttons button");

calcButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const op = button.getAttribute("data-op");

    // Проверка на ввод
    if (isNaN(num1) || isNaN(num2)) {
      calcResult.textContent = "Ошибка: введи оба числа!";
      calcResult.style.color = "#ff6b6b";
      return;
    }

    let result;
    switch (op) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          calcResult.textContent = "Ошибка: на ноль делить нельзя!";
          calcResult.style.color = "#ff6b6b";
          return;
        }
        result = num1 / num2;
        break;
    }

    calcResult.textContent = `Результат: ${result}`;
    calcResult.style.color = "#fff";
  });
});

// ================== Навігація ==================
let isNavLocked = false;

function toggleMenu() {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  button.classList.toggle("selected");
  nav.classList.toggle("active");

  document.removeEventListener("click", closeModalOnOutsideClick);
  setTimeout(() => {
    document.addEventListener("click", closeModalOnOutsideClick);
  }, 0);
}

function toggleLock() {
  isNavLocked = !isNavLocked;
  const lockBtn = document.querySelector(".lock-toggle");
  lockBtn.classList.toggle("locked", isNavLocked);

  if (isNavLocked) {
    document.querySelector(".nav").classList.add("active");
    document.querySelector(".menu-toggle").classList.add("selected");
  }
}

function deactivateAllSections() {
  document.querySelectorAll(".section").forEach(btn => btn.classList.remove("selected"));
  [".main-home", ".main-particle", ".main-times", ".main-settings"].forEach(sel => {
    const el = document.querySelector(sel);
    if (el) el.classList.remove("active");
  });
}

function activateSection(btnClass, pageClass) {
  deactivateAllSections();
  document.querySelector(btnClass).classList.add("selected");
  document.querySelector(pageClass).classList.add("active");

  if (!isNavLocked) {
    document.querySelector(".nav").classList.remove("active");
    document.querySelector(".menu-toggle").classList.remove("selected");
  }
}

function navigateHome() {
  activateSection(".nav-home", ".main-home");
}

function navigateParticle() {
  activateSection(".nav-particle", ".main-particle");
}

function navigateTimes() {
  activateSection(".nav-times", ".main-times");
}

function navigateSettings() {
  activateSection(".nav-settings", ".main-settings");
}

window.addEventListener("DOMContentLoaded", navigateHome);

// ================== Модальне вікно ==================
const infoMap = {
   the: [
    "The – означений артикль.",
    "Вказує на конкретний предмет або особу.",
    "Коли йдеться про щось відоме або вже згадане.",
    "Приклад: The sun is shining."
  ],
  a: [
    "A – неозначений артикль.",
    "Вживається перед іменниками в однині.",
    "Перед словами, що починаються з приголосного звука, якщо предмет згадується вперше.",
    "Приклад: A car is parked outside."
  ],
  an: [
    "An – неозначений артикль.",
    "Вживається перед іменниками в однині.",
    "Перед словами, що починаються з голосного звука, якщо предмет згадується вперше.",
    "Приклад: An apple a day keeps the doctor away."
  ],
  in: [
    "In – прийменник.",
    "Означає 'всередині'.",
    "Вживається для вказівки на розміщення всередині об'єкта або простору.",
    "Приклад: The keys are in the bag."
  ],
  on: [
    "On – прийменник.",
    "Означає 'на поверхні'.",
    "Вживається для вказівки на розміщення на чомусь.",
    "Приклад: The book is on the table."
  ],
  at: [
    "At – прийменник.",
    "Вказує на точне місце або час.",
    "Вживається для вказівки на конкретну точку в просторі або часі.",
    "Приклад: She is at school."
  ],
  under: [
    "Under – прийменник.",
    "Означає 'під чимось'.",
    "Вживається, коли об'єкт знаходиться нижче іншого об'єкта.",
    "Приклад: The cat is under the bed."
  ],
  over: [
    "Over – прийменник.",
    "Означає 'над чимось'.",
    "Вживається, коли об'єкт розміщений вище іншого без дотику.",
    "Приклад: The lamp is over the table."
  ],
  behind: [
    "Behind – прийменник.",
    "Означає 'позаду'.",
    "Вживається, якщо об'єкт знаходиться за іншим.",
    "Приклад: The car is behind the house."
  ],
  "next to": [
    "Next to – прийменник.",
    "Означає 'поруч з чимось'.",
    "Вживається, коли об'єкти розміщені поряд один з одним.",
    "Приклад: He sat next to me."
  ],
  of: [
    "Of – прийменник.",
    "Означає приналежність або частину чогось.",
    "Вживається для вказівки на приналежність, властивості або частину цілого.",
    "Приклад: A piece of cake."
  ],
  for: [
    "For – прийменник.",
    "Означає 'для' або 'заради'.",
    "Вживається для вказівки на мету або одержувача дії.",
    "Приклад: This gift is for you."
  ],
  by: [
    "By – прийменник.",
    "Означає 'біля, поруч', також вказує на виконавця дії.",
    "Вживається для вказівки авторства або розміщення поруч.",
    "Приклад: A book by Tolstoy."
  ],
  with: [
    "With – прийменник.",
    "Означає 'з кимось/чимось'.",
    "Вказує на спільне виконання дії або наявність інструмента.",
    "Приклад: I went with my friend."
  ],
  about: [
    "About – прийменник.",
    "Означає 'про щось'.",
    "Вживається, коли йдеться про тему розмови або думки.",
    "Приклад: This book is about space."
  ],
  to: [
    "To – прийменник і частка.",
    "Означає напрямок або ціль дії.",
    "Вказує на рух до чогось або на виконання дії.",
    "Приклад: I am going to school."
  ],
  not: [
    "Not – частка.",
    "Означає заперечення.",
    "Вживається для заперечення дієслів або тверджень.",
    "Приклад: I do not like it."
  ],
  up: [
    "Up – прислівник/прийменник.",
    "Означає рух вгору.",
    "Вживається при русі в напрямку зверху або вгору.",
    "Приклад: He climbed up the ladder."
  ],
  off: [
    "Off – прислівник/прийменник.",
    "Означає 'вимкнено' або 'геть'.",
    "Вживається для вказівки на від'єднання або віддалення.",
    "Приклад: Turn off the light."
  ],
  out: [
    "Out – прислівник/прийменник.",
    "Означає 'зовні' або 'поза'.",
    "Вживається для вказівки на вихід за межі чогось.",
    "Приклад: He went out of the room."
  ],
  away: [
    "Away – прислівник.",
    "Означає 'далеко' або 'геть'.",
    "Вживається, щоб показати віддалення в просторі або часі.",
    "Приклад: She ran away quickly."
  ],
  and: [
    "And – сполучник.",
    "Означає поєднання або додавання.",
    "Вживається для з'єднання слів, фраз або речень.",
    "Приклад: I like tea and coffee."
  ],
  but: [
    "But – сполучник.",
    "Означає протиставлення.",
    "Вживається для вираження контрасту або протилежності.",
    "Приклад: He is smart but lazy."
  ],
  or: [
    "Or – сполучник.",
    "Означає вибір або альтернативу.",
    "Вживається для вказівки на один із можливих варіантів.",
    "Приклад: Do you want tea or coffee?"
  ],
  because: [
    "Because – сполучник.",
    "Означає причину.",
    "Вживається для пояснення причин дії.",
    "Приклад: I stayed home because it was raining."
  ],
  if: [
    "If – сполучник.",
    "Означає умову.",
    "Вживається в умовних реченнях.",
    "Приклад: If it rains, we’ll stay inside."
  ],
  so: [
    "So – сполучник/прислівник.",
    "Означає наслідок або результат.",
    "Вживається для зв'язку причини та її результату.",
    "Приклад: He was tired, so he went to bed."
  ],
  can: [
    "Can – модальне дієслово.",
    "Означає можливість або здатність.",
    "Вживається для вираження вміння, дозволу або можливості.",
    "Приклад: She can swim."
  ],
  could: [
    "Could – модальне дієслово.",
    "Минула форма від 'can', також вживається для ввічливого прохання.",
    "Вживається для вказівки на минулі можливості або ввічливі форми.",
    "Приклад: Could you help me?"
  ],
  must: [
    "Must – модальне дієслово.",
    "Означає необхідність або обов’язок.",
    "Вживається для вираження строгої потреби.",
    "Приклад: You must wear a seatbelt."
  ],
  should: [
    "Should – модальне дієслово.",
    "Означає пораду або рекомендацію.",
    "Вживається, коли мовник вважає щось правильним або потрібним.",
    "Приклад: You should see a doctor."
  ],
  will: [
    "Will – модальне дієслово.",
    "Вказує на майбутню дію.",
    "Вживається для утворення майбутнього часу.",
    "Приклад: I will call you later."
  ],
  would: [
    "Would – модальне дієслово.",
    "Виражає 'б' в умовних або ввічливих конструкціях.",
    "Вживається в гіпотетичних ситуаціях або ввічливих проханнях.",
    "Приклад: I would go if I had time."
  ],
  "Present Simple": ["Present Simple – простий теперішній час.", "Регулярні дії, факти.", "Структура: I/You/We/They play, He/She/It plays.", "Приклад: She plays the piano."],
  "Present Continuous": ["Present Continuous – тривалий теперішній час.", "Дії, які відбуваються зараз.", "Структура: am/is/are + V-ing.", "Приклад: I am reading."],
  "Present Perfect": ["Present Perfect – доконаний теперішній час.", "Завершена дія з результатом в теперішньому.", "Структура: have/has + V3.", "Приклад: He has eaten."],
  "Present Perfect Continuous": ["Тривала дія, що почалась у минулому і триває досі.", "Структура: have/has been + V-ing.", "Приклад: I have been learning for 2 hours."],
  "Past Simple": ["Past Simple – простий минулий час.", "Дія, яка завершилась у минулому.", "Структура: V2 або -ed.", "Приклад: I visited London."],
  "Past Continuous": ["Тривала дія в минулому.", "Структура: was/were + V-ing.", "Приклад: They were playing football."],
  "Past Perfect": ["Дія, що завершилась до іншої в минулому.", "Структура: had + V3.", "Приклад: She had left before I arrived."],
  "Past Perfect Continuous": ["Тривала дія до іншої в минулому.", "Структура: had been + V-ing.", "Приклад: I had been waiting for an hour."],
  "Future Simple": ["Future Simple – просте майбутнє.", "Структура: will + V.", "Приклад: I will go tomorrow."],
  "Future Continuous": ["Тривала дія в майбутньому моменті.", "Структура: will be + V-ing.", "Приклад: I will be working at 5 p.m."],
  "Future Perfect": ["Завершена дія до певного моменту в майбутньому.", "Структура: will have + V3.", "Приклад: I will have finished by noon."],
  "Future Perfect Continuous": ["Тривала дія до майбутнього моменту.", "Структура: will have been + V-ing.", "Приклад: She will have been working for 3 hours."]
};


const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

function closeModalOnOutsideClick(e) {
  if (!modalContent.contains(e.target) && !e.target.closest(".index, .index-times")) {
    modal.classList.add("hidden");
  }
}

document.querySelectorAll(".index, .index-times").forEach(element => {
  element.addEventListener("click", () => {
    const text = element.textContent.trim();
    const data = infoMap[text];

    if (Array.isArray(data)) {
      modalContent.innerHTML = data.map((line, i) => `<p class="modal-line line-${i}">${line}</p>`).join("");
    } else {
      modalContent.innerHTML = `<p class="modal-line not-found">Інформація не знайдена.</p>`;
    }

    modal.classList.remove("hidden");
  });
});

document.addEventListener("click", closeModalOnOutsideClick);

// ================== Повідомлення ==================
const textarea = document.getElementById("message-input");
const messagesBlock = document.getElementById("messages");
let messages = JSON.parse(localStorage.getItem("messagesList")) || [];

function renderMessages() {
  messagesBlock.innerHTML = "";
  messages.forEach((text, index) => {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message");
    msgDiv.textContent = text;

    const delBtn = document.createElement("button");
    delBtn.onclick = () => {
      messages.splice(index, 1);
      localStorage.setItem("messagesList", JSON.stringify(messages));
      renderMessages();
    };

    msgDiv.appendChild(delBtn);
    messagesBlock.appendChild(msgDiv);
  });
}

renderMessages();

textarea?.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    const text = textarea.value.trim();
    if (text) {
      messages.push(text);
      localStorage.setItem("messagesList", JSON.stringify(messages));
      renderMessages();
      textarea.value = "";
    }
  }
});

// ================== Авторизація / Реєстрація ==================
function register() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!username || !email || !password || !confirmPassword) {
    alert("Будь ласка, заповніть всі поля.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Паролі не співпадають.");
    return;
  }

  window.location.href = "./main.html";
}

function login() {
  const username = document.getElementById("usernameLogin").value.trim();
  const password = document.getElementById("passwordLogin").value.trim();

  const correctUsername = "user";
  const correctPassword = "123";

  if (!username || !password) {
    alert("Будь ласка, заповніть всі поля.");
    return;
  }

  if (username === correctUsername && password === correctPassword) {
    window.location.href = "./main.html";
  } else {
    alert("Невірний логін або пароль.");
  }
}

function showLogin() {
  document.getElementById("reg").style.display = "none";
  document.getElementById("log").style.display = "block";
}

function showRegister() {
  document.getElementById("reg").style.display = "block";
  document.getElementById("log").style.display = "none";
}






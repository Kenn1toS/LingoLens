function handleClick() {
  const button = document.querySelector(".ButtonOpen");
  const nav = document.querySelector(".nav");

  button.classList.toggle("activeNav");
  nav.classList.toggle("none");
}

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
  ]
};


const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const modalContent = document.getElementById("modal-content");

document.querySelectorAll(".index").forEach((element) => {
  element.addEventListener("click", (e) => {
    const text = element.textContent.trim();
    const data = infoMap[text];

    if (Array.isArray(data)) {
      modalContent.innerHTML = data
        .map((line, index) => `<p class="modal-line line-${index}">${line}</p>`)
        .join("");
    } else if (typeof data === "string") {
      modalContent.innerHTML = `<p class="modal-line single-line">${data}</p>`;
    } else {
      modalContent.innerHTML = `<p class="modal-line not-found">Информация не найдена.</p>`;
    }
    

    modal.classList.remove("none");
    e.stopPropagation(); 
  });
});

document.addEventListener("click", (e) => {
  if (!modal.classList.contains("none") && !modalContent.contains(e.target)) {
    modal.classList.add("none");
  }
});
function deactivateAllSections() {
  document.querySelectorAll(".section").forEach(btn => btn.classList.remove("activeNav"));

  const allMainBlocks = [".mainHome", ".mainParticle", ".mainTimes", ".mainSettings"];
  allMainBlocks.forEach(selector => {
    const el = document.querySelector(selector);
    if (el) el.classList.remove("active");
  });
}

function activateSection(sectionClass, mainClass) {
  deactivateAllSections();
  document.querySelector(sectionClass).classList.add("activeNav");
  document.querySelector(mainClass).classList.add("active");
}

function handleClickHome() {
  activateSection(".sectionHome", ".mainHome");
}

function handleClickParticle() {
  activateSection(".sectionParticle", ".mainParticle");
}

function handleClickTimes() {
  activateSection(".sectionTimes", ".mainTimes");
}

function handleClickSettings() {
  activateSection(".sectionSettings", ".mainSettings");
}

window.addEventListener("DOMContentLoaded", handleClickHome);

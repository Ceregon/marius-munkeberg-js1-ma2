// question 1

const firstButton = document.querySelector("#bg");
const body = document.querySelector("body");

firstButton.onclick = function() {
  body.style.background = "green";
};

// question 2

const secondButton = document.querySelector(".toggler");
const togglee = document.querySelector(".togglee");

secondButton.onclick = function() {
  togglee.classList.toggle("extra");
};

// question 3

const select = document.querySelector("select");
const paragraphs = document.querySelector(".paragraphs-container");

select.onchange = function() {
  paragraphs.innerHTML = "";
  for (let i=1; i <= this.value; i++) {
    paragraphs.innerHTML += `<p class="content"></p>`;
  };
};

// question 4

const characters = document.querySelector(".input");
const count = document.querySelector(".char-count b");

characters.onkeyup = function() {
  const len = event.target.value.length;

  count.innerHTML = len;
};

// question 5

function scroll() {
  const scrolled = window.scrollY;

  if (scrolled >= 35) {
    body.classList.add("highlight");
  } else {
    body.classList.remove("highlight");
  };
};

window.onscroll = scroll;

import "../src/style.css";
import { dotsArr } from "./dotsData.js";

const container = document.querySelector(".container");

function createDot(color, top, left, id, textContent) {
  const text = document.createElement("p");
  text.className = "text";

  const dots = document.createElement("div");
  dots.classList.add("dot");
  dots.setAttribute(
    "style",
    `background: ${color}; top: ${top}; left: ${left};`
  );
  dots.setAttribute("id", `${id}`);
  dots.dataset.dot = "";

  const image = document.createElement("div");
  image.classList.add("img");
  text.textContent = `${textContent}`;

  dots.append(image);
  dots.append(text);
  container.append(dots);
}

window.addEventListener("click", (e) => {
  const targetDot = e.target.closest('.dot')
  if (targetDot) {
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      const img = e.target.querySelector(".img");
      img.classList.remove("img-minus");
      return;
    }
    clearDots();

    const image = targetDot.querySelector(".img");
    const text = targetDot.querySelector("p");

    image.classList.toggle("img-minus");

    targetDot.append(text);
    targetDot.classList.add("active");
  } else {
    clearDots();
  }
});

function clearDots() {
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot) => {
    const img = dot.querySelector(".img");
    img.classList.remove("img-minus");
    dot.classList.remove("active");
  });
}

for (let i = 0; i < dotsArr.length; i++) {
  createDot(
    dotsArr[i].color,
    dotsArr[i].top,
    dotsArr[i].left,
    i,
    dotsArr[i].text
  );
}

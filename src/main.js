import "../src/style.css";
import { dotsArr } from "../src/dotsData.js";

const container = document.querySelector(".container");
const text = document.createElement("p");

function createDot(color, top, left, id, textContent) {
  const dots = document.createElement("div");
  dots.classList.add('dot');
  dots.setAttribute("style", `background: ${color}; top: ${top}; left: ${left};`);
  dots.setAttribute("id", `${id}`);

  const image = document.createElement("div");
  image.classList.add('img');

  dots.append(image);
  container.append(dots);

  dots.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active');
      const img = e.currentTarget.querySelector('.img');
      img.classList.remove('img-minus');
      return
    }

    const allDots = document.querySelectorAll('.dot');
    allDots.forEach(dot => {
      const img = dot.querySelector('.img');
      img.classList.remove('img-minus');
      dot.classList.remove('active');
    })

    image.classList.toggle('img-minus');

    text.classList.add("text");
    text.textContent = `${textContent}`;
    dots.append(text);

    dots.classList.add('active');
  });
}

for (let i = 0; i < dotsArr.length; i++) {
  createDot(dotsArr[i].color, dotsArr[i].top, dotsArr[i].left, i, dotsArr[i].text);
}
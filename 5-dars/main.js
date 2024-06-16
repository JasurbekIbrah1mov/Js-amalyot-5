let left = document.querySelector(".l");
let right = document.querySelector(".r");

// o'zgartirmoachi bo'lgan elementim
let slide = document.querySelector(".slide");

let n = 0;

left.addEventListener("click", () => {
  n++;

  if (n > 1) {
    n = 1;
  }

  slide.style.transform = `translate(${n * 300}px, 0 ) `;
  slide.style.transition = `all 1s ease`;
});
right.addEventListener("click", () => {
  n--;

  if (n < -1) {
    n = -1;
  }
  slide.style.transform = `translate(${n * 300}px, 0 )`;
  slide.style.transition = `all 1s ease`;
});

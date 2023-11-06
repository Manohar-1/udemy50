let icons = document.querySelectorAll("nav ul li");
let images = document.querySelectorAll(".content");

icons.forEach((icon, idx) => {
  icon.addEventListener("mouseover", () => {
    icon.classList.add("active");
    images[idx].classList.add("show");

    icons.forEach((secondIcon, secondIdx) => {
      if (idx != secondIdx) {
        secondIcon.classList.remove("active");
        images[secondIdx].classList.remove("show");
      }
    });
  });
});

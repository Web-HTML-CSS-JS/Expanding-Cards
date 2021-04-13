const cards = document.querySelectorAll(".card");

setActiveClass();

function setActiveClass() {
  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      removeActiveClasses();
      card.classList.add("active");
    });
  });
}

function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}

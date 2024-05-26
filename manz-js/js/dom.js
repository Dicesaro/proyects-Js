const d = document;

const $main = d.querySelector(".main");
const $card = d.querySelectorAll(".card");
const $button = d.querySelector(".btn-event");
const $parrafos = d.querySelectorAll(".parrafo");

$main.insertAdjacentText("beforeend", "EL PEPEEEE");

function changeFontColor(color) {
  $button.addEventListener("click", () => {
    $parrafos.forEach((parrafo) => {
      parrafo.style.color = color;
    });
  });
}

changeFontColor("#fe3");

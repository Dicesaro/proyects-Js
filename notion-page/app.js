const d = document;

const $cont = d.querySelector(".div__cont");

$cont.style.backgroundColor = "steelBlue";

let template = `
  <img src="" alt="img" />
  <p></p>
  <span></span>
  <a href=""></a>
`;

for (let i = 0; i < 5; i++) {
  const $aside = d.createElement("aside");
  $aside.classList.add("cont__asd");
  $aside.innerHTML += template;
  $cont.appendChild($aside);
}

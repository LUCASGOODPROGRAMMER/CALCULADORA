const capturaBtn = document.getElementById("bt-calc");
const captura1 = document.querySelector("#number");
const captura2 = document.querySelector("#multiplicador");
const captura3 = document.querySelector("#exibir");

capturaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  captura3.innerHTML = "";
  const number = Number(captura1.value);
  const multiplicador = Number(captura2.value);
  const aviso = document.createElement("span");
  if (!number || !multiplicador) {
    if (!document.querySelector("#aviso-erro")) {
      aviso.textContent = "PREENCHA OS CAMPOS CORRETAMENTE";
      aviso.id = "aviso-erro";
      aviso.style.color = "red";
      aviso.style.display = "block";
      aviso.style.marginTop = "10px";
      capturaBtn.parentElement.appendChild(aviso);
    }
    return;
  }
  for (let i = 0; i <= multiplicador; i++) {
    const p = document.createElement("p");
    p.textContent = `${number} x ${i} = ${number * i}`;
    captura3.appendChild(p);
  }
});
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o envio do formulário
});

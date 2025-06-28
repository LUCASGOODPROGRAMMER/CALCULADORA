const capturaBtn = document.getElementById("bt-calc")
const captura1 = document.querySelector("#number")
const captura2 = document.querySelector("#multiplicador")
const captura3 = document.querySelector("#exibir")

capturaBtn.addEventListener("click", () => {
    captura3.innerHTML = ''
    const number = Number(captura1.value)
    const multiplicador = Number(captura2.value)
    for(let i = 0; i <= multiplicador; i++) {
        const p = document.createElement("p")
        p.textContent = `${number} x ${i} = ${number * i}`
        captura3.appendChild(p)
    };
})

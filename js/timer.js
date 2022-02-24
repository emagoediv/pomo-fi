const BTN = document.getElementById("btn");
const TIME = document.getElementById("time");
const CIRCLE = document.getElementById("progressCircle");

timerCount = "";
segundos = 1500;
let pausar = false;
vez = 1;

BTN.addEventListener("click", () => {
    if (pausar == true) {
        window.clearInterval(timerCount);
    } else if (pausar == false) {
        goTimer(pausar);
    }
    if (pausar == false) {
        pausar = true;
    } else {
        pausar = false;
    }
});

function goTimer(pausado) {
    timerCount = setInterval(() => {
        let time = segundosParaMinutos(segundos);
        TIME.innerHTML = time;
        segundos--;
        if (segundos < 0) {
            window.clearInterval(timerCount);
        }

        if (segundos == 1500 - 15 * vez) {
            vez++;
            CIRCLE.style.strokeDashoffset = 440 - (440 * vez) / 100;
        }

        console.log(time);
    }, 10);
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = "0" + campoSegundos;
    }
    return campoMinutos + ":" + campoSegundos;
}

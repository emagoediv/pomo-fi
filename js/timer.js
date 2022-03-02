const BTN = document.getElementById("btn");
const TIME = document.getElementById("time");
const CIRCLE = document.getElementById("progressCircle");
const CIRCLESTOP = document.getElementById("progressCircleStop");

timerCount = "";
segundos = 1500;
vez = 1;
metadeVez = 0.5;
pausar = false;
BTN.addEventListener("click", () => {
    playPomodoroTimer();
});

function playPomodoroTimer() {
    if (pausar == true) {
        window.clearInterval(timerCount);
    } else if (pausar == false) {
        goTimer(pausar, 1500);
    }
    if (pausar == false) {
        pausar = true;
    } else {
        pausar = false;
    }
}

function goTimer(pausado, timeS, stopTime = false) {
    timerCount = setInterval(() => {
        let time = segundosParaMinutos(timeS);
        TIME.innerHTML = time;
        timeS--;
        if (timeS < 0) {
            window.clearInterval(timerCount);
            if (stopTime == false) {
                stopTimer();
            }
        }

        if (stopTime == false) {
            if (timeS == 1500 - 15 * vez) {
                vez++;
                metadeVez += 0.5;
                CIRCLE.style.strokeDashoffset = 440 - (440 * vez) / 100;
                console.log(440 - (440 * metadeVez) / 100);
                console.log(440 - 15 * vez);
            }
        }
        if (stopTime == true) {
            if (timeS == 300 - 3 * vez) {
                vez++;
                metadeVez += 0.5;
                CIRCLESTOP.style.strokeDashoffset = 440 - (440 * vez) / 100;
                console.log(440 - (440 * metadeVez) / 100);
                console.log(440 - 15 * vez);
            }
            if (timeS < 0) {
                if (stopTime == false) {
                    goTimer(pausar, 1500);
                } else {
                    window.clearInterval(timerCount);
                    pausar = false;
                    playPomodoroTimer();
                    CIRCLE.style.strokeDashoffset = 440;
                    CIRCLESTOP.style.strokeDashoffset = 440;
                }
            }
        }

        if (vez == 100) {
            vez = 1;
            metadeVez = 0.5;
        }

        console.log(time);
    }, 1000);
}

function stopTimer() {
    goTimer(false, 300, true);
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = "0" + campoSegundos;
    }
    return campoMinutos + ":" + campoSegundos;
}

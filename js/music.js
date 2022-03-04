let musicas = [
    {
        titulo: "lofi 1",
        src: "./musics/lofi1.mp3",
    },
    {
        titulo: "lofi 2",
        src: "./musics/lofi2.mp3",
    },
    {
        titulo: "lofi 3",
        src: "./musics/lofi3.mp3",
    },
    {
        titulo: "lofi 4",
        src: "./musics/lofi4.mp3",
    },
    {
        titulo: "lofi 5",
        src: "./musics/lofi5.mp3",
    },
];

musicaAtual = 0;

const PLAYERMUSIC = document.getElementById("playerMusic");

function playMusic() {
    PLAYERMUSIC.addEventListener("loadeddata", () => {
        PLAYERMUSIC.play();
        let tempoMusica = PLAYERMUSIC.duration;
        let timerMusic = setInterval(() => {
            tempoMusica--;
            console.log(tempoMusica);
            if (tempoMusica < 1) {
                clearInterval(timerMusic);
                mudarMusica();
            }
        }, 1000);
    });
}

function mudarMusica() {
    musicaAtual++;
    if (musicaAtual == musicas.length) {
        musicaAtual = 0;
    }
    PLAYERMUSIC.src = musicas[musicaAtual]["src"];
    playMusic();
}

playMusic();

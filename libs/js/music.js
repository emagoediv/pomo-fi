let musicas = [
    {
        titulo: "lofi 1",
        src: "./libs/musics/lofi1.mp3",
    },
    {
        titulo: "lofi 2",
        src: "./libs/musics/lofi2.mp3",
    },
    {
        titulo: "lofi 3",
        src: "./libs/musics/lofi3.mp3",
    },
    {
        titulo: "lofi 4",
        src: "./libs/musics/lofi4.mp3",
    },
    {
        titulo: "lofi 5",
        src: "./libs/musics/lofi5.mp3",
    },
    {
        titulo: "lofi 6",
        src: "./libs/musics/lofi6.mp3",
    },
];

musicaAtual = 0;

const PLAYERMUSIC = document.getElementById("playerMusic");

function playMusic() {
    PLAYERMUSIC.addEventListener("loadeddata", () => {
        let tempoMusica = PLAYERMUSIC.duration;
        PLAYERMUSIC.play();
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

BTN.addEventListener("click", () => {
    PLAYERMUSIC.play();
});

const video = document.getElementById("memoryVideo");
const playPauseBtn = document.getElementById("playPauseBtn");

playPauseBtn.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = "⏸️";
    } else {
        video.pause();
        playPauseBtn.textContent = "▶️";
    }
});

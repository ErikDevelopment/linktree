const enterBtn = document.getElementById("enter-button");
const enterScreen = document.getElementById("enter-screen");
const mainContent = document.getElementById("main-content");
const music = document.getElementById("background-music");

enterBtn.addEventListener("click", () => {
    enterScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");

    music.volume = 0.5;
    music.play();
});

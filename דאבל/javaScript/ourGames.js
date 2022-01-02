let closesGameAnouncement = () => {
    let modalBox = document.querySelector(".alert");
    modalBox.style.display = "block";
    window.setTimeout(() => {
        modalBox.style.display = "none"
    }, 2000)


}
let closesGame = document.querySelectorAll(".closesGames")
for (let index = 0; index < closesGame.length; index++) {
    closesGame[index].addEventListener('click', closesGameAnouncement);

}
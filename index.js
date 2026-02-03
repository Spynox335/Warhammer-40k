const astart = document.querySelector(".astart");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (astart.style.display === "none") {
            astart.style.display = "flex";
        } else {
            astart.style.display = "none";
        }
    })
})


const astart = document.querySelector(".astart");
const buttons = document.querySelectorAll("button");
const good = document.querySelector(".good");
const buttons2 = document.querySelectorAll(".adeptus");
const bad = document.querySelector(".bad");
const buttons3 = document.querySelectorAll(".heretic");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (astart.style.display === "none") {
            astart.style.display = "flex"
            good.style.display === "flex"
            good.style.display = "none"
            bad.style.display === "flex"
            bad.style.display = "none";

        } else {
            astart.style.display = "none";
        }
    })
})

let codex = [];
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        codex = data;
        console.log(data);
    });

buttons2.forEach((button) => {
    button.addEventListener("click", () => {
        if (good.style.display === "none") {
            good.style.display = "flex"
            astart.style.display === "flex"
            astart.style.display = "none";
        } else {
            good.style.display = "none";
        }
    })
})

buttons3.forEach((button) => {
    button.addEventListener("click", () => {
        if (bad.style.display === "none") {
            bad.style.display = "flex"
            astart.style.display === "flex"
            astart.style.display = "none";
        } else {
            bad.style.display = "none";
        }
    })
})
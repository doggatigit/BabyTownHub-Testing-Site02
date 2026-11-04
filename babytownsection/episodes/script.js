
const slctdropdownBtn = document.querySelector(".sectiondropbutton")
const slctdropdownMenu = document.querySelector(".sectionsdropped")
const slctdropdownBtnd = document.querySelector(".sectiondropbuttond")
const slctdropdownMenud = document.querySelector(".sectionsdroppedd")

slctdropdownBtn.addEventListener("click", () => {
    //get dropdown menu
    slctdropdownMenu.classList.toggle("hide");
    //remove hide class
})


window.addEventListener("click", (e) => {
    if (e.target !== slctdropdownBtn) {
        slctdropdownMenu.classList.add("hide");
    }
})


slctdropdownBtnd.addEventListener("click", () => {
    //get dropdown menu
    slctdropdownMenud.classList.toggle("hide");
    //remove hide class
})


window.addEventListener("click", (e) => {
    if (e.target !== slctdropdownBtnd) {
        slctdropdownMenud.classList.add("hide");
    }
})
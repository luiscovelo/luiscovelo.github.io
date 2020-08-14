document.querySelector(".btn-toggle").addEventListener("click", () => {
    if (document.querySelector("#navList").style.display == "block") {
        document.querySelector("#navList").style.display = "none";
    } else if (document.querySelector("#navList").style.display = "none") {
        document.querySelector("#navList").style.display = "block";
    }
})
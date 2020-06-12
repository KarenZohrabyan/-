document.querySelector(".start").addEventListener('click', (e) => {
    document.getElementById("first-block").style.display = "none";
    document.getElementById("second-block").style.display = "block"
})  

document.querySelector("#ml50").addEventListener('click', (e) => {
    document.getElementById("second-block").style.display = "none"
    document.getElementById("third-block").style.display = "block"
})  


document.querySelector("#ml63").addEventListener('click', (e) => {
    document.getElementById("second-block").style.display = "none"
    document.getElementById("fourth-block").style.display = "block"
})  
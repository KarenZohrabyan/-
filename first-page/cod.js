let count = 0

document.querySelector(".start").addEventListener('click', (e) => {
    document.getElementById("first-block").style.display = "none";
    document.getElementById("second-block").style.display = "block"
})  

document.querySelector("#ml50").addEventListener('click', (e) => {
    document.getElementById("second-block").style.display = "none"
    document.getElementById("third-block").style.display = "block"
})  

document.querySelector("#ml63").addEventListener('click', (e) => {
    count++
    document.getElementById("second-block").style.display = "none"
    document.getElementById("fourth-block").style.display = "block"
    console.log(count)
})  

document.querySelector("#ml1").addEventListener('click', (e) => {
    document.getElementById("second-block").style.display = "none"
    document.getElementById("fifth-block").style.display = "block"
})  

document.querySelector("#shtr").addEventListener('click', (e) => {
    document.getElementById("second-block").style.display = "none"
    document.getElementById("sixth-block").style.display = "block"
})  


//First answer continue
document.querySelector("#continueN1").addEventListener('click', (e) => {
    document.getElementById("fourth-block").style.display = "none"
    document.getElementById("secondQuestion").style.display = "block"
})

document.querySelector("#continueN2").addEventListener('click', (e) => {
    document.getElementById("fifth-block").style.display = "none"
    document.getElementById("secondQuestion").style.display = "block"
})

document.querySelector("#continueN3").addEventListener('click', (e) => {
    document.getElementById("third-block").style.display = "none"
    document.getElementById("secondQuestion").style.display = "block"
})

document.querySelector("#continueN4").addEventListener('click', (e) => {
    document.getElementById("sixth-block").style.display = "none"
    document.getElementById("secondQuestion").style.display = "block"
})




//answers
document.querySelector("#fire").addEventListener('click', (e) => {
    document.getElementById("secondQuestion").style.display = "none";
    document.getElementById("question2-1-block").style.display = "block"
    count++
    console.log(count)
})  

document.querySelector("#played").addEventListener('click', (e) => {
    document.getElementById("secondQuestion").style.display = "none";
    document.getElementById("question2-2-block").style.display = "block"
}) 

document.querySelector("#down").addEventListener('click', (e) => {
    document.getElementById("secondQuestion").style.display = "none";
    document.getElementById("question2-3-block").style.display = "block"
}) 

document.querySelector("#dontbuy").addEventListener('click', (e) => {
    document.getElementById("secondQuestion").style.display = "none";
    document.getElementById("question2-4-block").style.display = "block"
}) 




///////////////////////////////////
document.querySelector("#continueN5").addEventListener('click', (e) => {
    document.getElementById("question2-1-block").style.display = "none"
    document.getElementById("thirdQuestion").style.display = "block"
})

document.querySelector("#continueN6").addEventListener('click', (e) => {
    document.getElementById("question2-2-block").style.display = "none"
    document.getElementById("thirdQuestion").style.display = "block"
})

document.querySelector("#continueN7").addEventListener('click', (e) => {
    document.getElementById("question2-3-block").style.display = "none"
    document.getElementById("thirdQuestion").style.display = "block"
})

document.querySelector("#continueN8").addEventListener('click', (e) => {
    document.getElementById("question2-4-block").style.display = "none"
    document.getElementById("thirdQuestion").style.display = "block"
})






//////////////////////////
//question 3
document.querySelector("#N3-1").addEventListener('click', (e) => {
    document.getElementById("thirdQuestion").style.display = "none";
    document.getElementById("question3-1-block").style.display = "block"
    count++
    console.log(count)
})  

document.querySelector("#N3-2").addEventListener('click', (e) => {
    document.getElementById("thirdQuestion").style.display = "none";
    document.getElementById("question3-2-block").style.display = "block"
}) 

document.querySelector("#N3-3").addEventListener('click', (e) => {
    document.getElementById("thirdQuestion").style.display = "none";
    document.getElementById("question3-3-block").style.display = "block"
}) 

document.querySelector("#N3-4").addEventListener('click', (e) => {
    document.getElementById("thirdQuestion").style.display = "none";
    document.getElementById("question3-4-block").style.display = "block"
}) 



/////////////////////////////////////////////////
/////////////////////////////////////////////////
document.querySelector("#continueN9").addEventListener('click', (e) => {
    document.getElementById("question3-1-block").style.display = "none"
    document.getElementById("fourthQuestion").style.display = "block"
})

document.querySelector("#continueN10").addEventListener('click', (e) => {
    document.getElementById("question3-2-block").style.display = "none"
    document.getElementById("fourthQuestion").style.display = "block"
})

document.querySelector("#continueN11").addEventListener('click', (e) => {
    document.getElementById("question3-3-block").style.display = "none"
    document.getElementById("fourthQuestion").style.display = "block"
})

document.querySelector("#continueN12").addEventListener('click', (e) => {
    document.getElementById("question3-4-block").style.display = "none"
    document.getElementById("fourthQuestion").style.display = "block"
})





//////////////////////////
//question 4
document.querySelector("#N4-1").addEventListener('click', (e) => {
    document.getElementById("fourthQuestion").style.display = "none";
    document.getElementById("question4-1-block").style.display = "block"
    count++
    console.log(count)
})  

document.querySelector("#N4-2").addEventListener('click', (e) => {
    document.getElementById("fourthQuestion").style.display = "none";
    document.getElementById("question4-2-block").style.display = "block"
}) 

document.querySelector("#N4-3").addEventListener('click', (e) => {
    document.getElementById("fourthQuestion").style.display = "none";
    document.getElementById("question4-3-block").style.display = "block"
}) 

document.querySelector("#N4-4").addEventListener('click', (e) => {
    document.getElementById("fourthQuestion").style.display = "none";
    document.getElementById("question4-4-block").style.display = "block"
}) 



//////////////////////////////////////////////////////
document.querySelector("#continueN13").addEventListener('click', (e) => {
    document.getElementById("question4-1-block").style.display = "none"
    document.getElementById("fifthQuestion").style.display = "block"
})

document.querySelector("#continueN14").addEventListener('click', (e) => {
    document.getElementById("question4-2-block").style.display = "none"
    document.getElementById("fifthQuestion").style.display = "block"
})

document.querySelector("#continueN15").addEventListener('click', (e) => {
    document.getElementById("question4-3-block").style.display = "none"
    document.getElementById("fifthQuestion").style.display = "block"
})

document.querySelector("#continueN16").addEventListener('click', (e) => {
    document.getElementById("question4-4-block").style.display = "none"
    document.getElementById("fifthQuestion").style.display = "block"
})








//////////////////////////
//question 7
document.querySelector("#N5-1").addEventListener('click', (e) => {
    document.getElementById("fifthQuestion").style.display = "none";
    document.getElementById("question5-1-block").style.display = "block"
    count++
    console.log(count)
})  

document.querySelector("#N5-2").addEventListener('click', (e) => {
    document.getElementById("fifthQuestion").style.display = "none";
    document.getElementById("question5-2-block").style.display = "block"
}) 

document.querySelector("#N5-3").addEventListener('click', (e) => {
    document.getElementById("fifthQuestion").style.display = "none";
    document.getElementById("question5-3-block").style.display = "block"
}) 

document.querySelector("#N5-4").addEventListener('click', (e) => {
    document.getElementById("fifthQuestion").style.display = "none";
    document.getElementById("question5-4-block").style.display = "block"
}) 


//////////////////////////////////////////////////////
document.querySelector("#continueN17").addEventListener('click', (e) => {
    document.getElementById("question5-1-block").style.display = "none"
    document.getElementById("sixthQuestion").style.display = "block"
})

document.querySelector("#continueN18").addEventListener('click', (e) => {
    document.getElementById("question5-2-block").style.display = "none"
    document.getElementById("sixthQuestion").style.display = "block"
})

document.querySelector("#continueN19").addEventListener('click', (e) => {
    document.getElementById("question5-3-block").style.display = "none"
    document.getElementById("sixthQuestion").style.display = "block"
})

document.querySelector("#continueN20").addEventListener('click', (e) => {
    document.getElementById("question5-4-block").style.display = "none"
    document.getElementById("sixthQuestion").style.display = "block"
})






//////////////////////////
//question 6
document.querySelector("#N6-1").addEventListener('click', (e) => {
    document.getElementById("sixthQuestion").style.display = "none";
    document.getElementById("question6-1-block").style.display = "block"
    count++
    console.log(count)
})  

document.querySelector("#N6-2").addEventListener('click', (e) => {
    document.getElementById("sixthQuestion").style.display = "none";
    document.getElementById("question6-2-block").style.display = "block"
}) 

document.querySelector("#N6-3").addEventListener('click', (e) => {
    document.getElementById("sixthQuestion").style.display = "none";
    document.getElementById("question6-3-block").style.display = "block"
}) 

document.querySelector("#N6-4").addEventListener('click', (e) => {
    document.getElementById("sixthQuestion").style.display = "none";
    document.getElementById("question6-4-block").style.display = "block"
}) 


/////////////////////////////
document.querySelector("#continueN21").addEventListener('click', (e) => {
    document.getElementById("question6-1-block").style.display = "none"
    document.getElementById("seventhQuestion").style.display = "block"
})

document.querySelector("#continueN22").addEventListener('click', (e) => {
    document.getElementById("question6-2-block").style.display = "none"
    document.getElementById("seventhQuestion").style.display = "block"
})

document.querySelector("#continueN23").addEventListener('click', (e) => {
    document.getElementById("question6-3-block").style.display = "none"
    document.getElementById("seventhQuestion").style.display = "block"
})

document.querySelector("#continueN24").addEventListener('click', (e) => {
    document.getElementById("question6-4-block").style.display = "none"
    document.getElementById("seventhQuestion").style.display = "block"
})





//question 7
document.querySelector("#N7-1").addEventListener('click', (e) => {
    document.getElementById("seventhQuestion").style.display = "none";
    document.getElementById("question7-1-block").style.display = "block"
    count++
    console.log(count)
})  

document.querySelector("#N7-2").addEventListener('click', (e) => {
    document.getElementById("seventhQuestion").style.display = "none";
    document.getElementById("question7-2-block").style.display = "block"
}) 

document.querySelector("#N7-3").addEventListener('click', (e) => {
    document.getElementById("seventhQuestion").style.display = "none";
    document.getElementById("question7-3-block").style.display = "block"
}) 

document.querySelector("#N7-4").addEventListener('click', (e) => {
    document.getElementById("seventhQuestion").style.display = "none";
    document.getElementById("question7-4-block").style.display = "block"
}) 


/////////////////////////////
document.querySelector("#continueN25").addEventListener('click', (e) => {
    document.getElementById("question7-1-block").style.display = "none"
    document.getElementById("eighthQuestion").style.display = "block"
})

document.querySelector("#continueN26").addEventListener('click', (e) => {
    document.getElementById("question7-2-block").style.display = "none"
    document.getElementById("eighthQuestion").style.display = "block"
})

document.querySelector("#continueN27").addEventListener('click', (e) => {
    document.getElementById("question7-3-block").style.display = "none"
    document.getElementById("eighthQuestion").style.display = "block"
})

document.querySelector("#continueN28").addEventListener('click', (e) => {
    document.getElementById("question7-4-block").style.display = "none"
    document.getElementById("eighthQuestion").style.display = "block"
})






//question 8
document.querySelector("#N8-1").addEventListener('click', (e) => {
    document.getElementById("eighthQuestion").style.display = "none";
    document.getElementById("question8-1-block").style.display = "block"
    count++
    console.log(count)
})  

document.querySelector("#N8-2").addEventListener('click', (e) => {
    document.getElementById("eighthQuestion").style.display = "none";
    document.getElementById("question8-2-block").style.display = "block"
}) 

document.querySelector("#N8-3").addEventListener('click', (e) => {
    document.getElementById("eighthQuestion").style.display = "none";
    document.getElementById("question8-3-block").style.display = "block"
}) 

document.querySelector("#N8-4").addEventListener('click', (e) => {
    document.getElementById("eighthQuestion").style.display = "none";
    document.getElementById("question8-4-block").style.display = "block"
}) 




/////////////////////////////
document.querySelector("#continueN29").addEventListener('click', (e) => {
    if (count >= 0 && count < 3) {
        document.getElementById("question8-1-block").style.display = "none"
        document.getElementById("third-1").style.display = "block"
        document.getElementById("result-1").textContent = `${count} из 8 правильных ответов`
    } else if (count >=3 && count < 5) {
        document.getElementById("question8-1-block").style.display = "none"
        document.getElementById("third-2").style.display = "block"
        document.getElementById("result-2").textContent = `${count} из 8 правильных ответов`
    } else if(count >= 5 && count < 7) {
        document.getElementById("question8-1-block").style.display = "none"
        document.getElementById("third-3").style.display = "block"
        document.getElementById("result-3").textContent = `${count} из 8 правильных ответов`

    } else if (count === 7) {
        document.getElementById("question8-1-block").style.display = "none"
        document.getElementById("third-4").style.display = "block"
        document.getElementById("result-4").textContent = `${count} из 8 правильных ответов`

    } else if (count === 8) {
        document.getElementById("question8-1-block").style.display = "none"
        document.getElementById("third-5").style.display = "block"
        document.getElementById("result-5").textContent = `${count} из 8 правильных ответов`

    }
})

document.querySelector("#continueN30").addEventListener('click', (e) => {
    if (count >= 0 && count < 3) {
        document.getElementById("question8-2-block").style.display = "none"
        document.getElementById("third-1").style.display = "block"
        document.getElementById("result-1").textContent = `${count} из 8 правильных ответов`

    } else if (count >=3 && count < 5) {
        document.getElementById("question8-2-block").style.display = "none"
        document.getElementById("third-2").style.display = "block"
        document.getElementById("result-2").textContent = `${count} из 8 правильных ответов`

    } else if(count >= 5 && count < 7) {
        document.getElementById("question8-2-block").style.display = "none"
        document.getElementById("third-3").style.display = "block"
        document.getElementById("result-3").textContent = `${count} из 8 правильных ответов`

    } else if (count === 7) {
        document.getElementById("question8-2-block").style.display = "none"
        document.getElementById("third-4").style.display = "block"
        document.getElementById("result-4").textContent = `${count} из 8 правильных ответов`
    } else if (count === 8) {
        document.getElementById("question8-2-block").style.display = "none"
        document.getElementById("third-5").style.display = "block"
        document.getElementById("result-5").textContent = `${count} из 8 правильных ответов`
    }
})

document.querySelector("#continueN31").addEventListener('click', (e) => {
    if (count >= 0 && count < 3) {
        document.getElementById("question8-3-block").style.display = "none"
        document.getElementById("third-1").style.display = "block"
        document.getElementById("result-1").textContent = `${count} из 8 правильных ответов`
    } else if (count >=3 && count < 5) {
        document.getElementById("question8-3-block").style.display = "none"
        document.getElementById("third-2").style.display = "block"
        document.getElementById("result-2").textContent = `${count} из 8 правильных ответов`

    } else if(count >= 5 && count < 7) {
        document.getElementById("question8-3-block").style.display = "none"
        document.getElementById("third-3").style.display = "block"
        document.getElementById("result-3").textContent = `${count} из 8 правильных ответов`

    } else if (count === 7) {
        document.getElementById("question8-3-block").style.display = "none"
        document.getElementById("third-4").style.display = "block"
        document.getElementById("result-4").textContent = `${count} из 8 правильных ответов`
    } else if (count === 8) {
        document.getElementById("question8-3-block").style.display = "none"
        document.getElementById("third-5").style.display = "block"
        document.getElementById("result-5").textContent = `${count} из 8 правильных ответов`
    }
})

document.querySelector("#continueN32").addEventListener('click', (e) => {
    if (count >= 0 && count < 3) {
        document.getElementById("question8-4-block").style.display = "none"
        document.getElementById("third-1").style.display = "block"
        document.getElementById("result-1").textContent = `${count} из 8 правильных ответов`

    } else if (count >=3 && count < 5) {
        document.getElementById("question8-4-block").style.display = "none"
        document.getElementById("third-2").style.display = "block"
        document.getElementById("result-2").textContent = `${count} из 8 правильных ответов`

    } else if(count >= 5 && count < 7) {
        document.getElementById("question8-4-block").style.display = "none"
        document.getElementById("third-3").style.display = "block"
        document.getElementById("result-3").textContent = `${count} из 8 правильных ответов`

    } else if (count === 7) {
        document.getElementById("question8-4-block").style.display = "none"
        document.getElementById("third-4").style.display = "block"
        document.getElementById("result-4").textContent = `${count} из 8 правильных ответов`
    } else if (count === 8) {
        document.getElementById("question8-4-block").style.display = "none"
        document.getElementById("third-5").style.display = "block"
        document.getElementById("result-5").textContent = `${count} из 8 правильных ответов`
    }
})





document.getElementById("onemoretime1").addEventListener("click", (e) => {
    count = 0
    document.getElementById("third-1").style.display = "none"
    document.getElementById("first-block").style.display = "block";
})


document.getElementById("onemoretime2").addEventListener("click", (e) => {
    count = 0
    document.getElementById("third-2").style.display = "none"
    document.getElementById("first-block").style.display = "block";
})


document.getElementById("onemoretime3").addEventListener("click", (e) => {
    count = 0
    document.getElementById("third-3").style.display = "none"
    document.getElementById("first-block").style.display = "block";
})

document.getElementById("onemoretime4").addEventListener("click", (e) => {
    count = 0
    document.getElementById("third-4").style.display = "none"
    document.getElementById("first-block").style.display = "block";
})


document.getElementById("onemoretime5").addEventListener("click", (e) => {
    count = 0
    document.getElementById("third-5").style.display = "none"
    document.getElementById("first-block").style.display = "block";
})
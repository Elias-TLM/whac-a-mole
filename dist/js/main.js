/* VARIABLES */

/* GAME STATE */
var gamerunning = false;
var molescore = 0;


function startGame() {
    gamerunning = true;
    document.getElementById("start").style.display = "none";
    document.getElementById("mole").style.visibility = "visible";

    // should do a const for moles and hole, should get graphics for them too

    document.getElementById("mole").addEventListener("click", function clickMole() {
        console.log("A Mole has been clicked!")
    })
}



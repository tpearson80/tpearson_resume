
let answers = document.getElementById("modal-answers");
let q1b = document.getElementById("q1b");
let q2a = document.getElementById("q2a");
let q3b = document.getElementById("q3b");
let q4f = document.getElementById("q4f");
let q5a = document.getElementById("q5a");
let q6d = document.getElementById("q6d");
let q7f = document.getElementById("q7f");
let q8f = document.getElementById("q8f");
let q9c = document.getElementById("q9c");
let count = 0;

function correctCount() {
    const correctAnswers = [q1b, q2a, q3b, q4f, q5a, q6d, q7f, q8f, q9c, q10a];

    for (let i = 0; i < correctAnswers.length; i++) {
        if (correctAnswers[i].checked) {
            count++
        }
    }
    answers.textContent = "" + count + "";
    displayModalMessage();
    console.log(count + " correct answers");
}

function displayModalMessage() {
    let modalMessage = document.getElementById("modalMessage");

    if (count == 10) {
        modalMessage.innerText = "Amazing Job! You got them all!";
    }
    else if (count >= 7) {
        modalMessage.innerText = "Pretty Solid Job!";
    }
    else if (count >= 5) {
        modalMessage.innerText = "You could use some more studying.";
    }
    else if (count < 5) {
        modalMessage.innerText = "Programming may not be for you.";
    }
    else {
        console.log("Error in program");
    }
    modalMessage.removeAttribute("hidden");
}

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", correctCount);
 


console.log("JS is connected and running."); //For Debugging

const answer1 = "1903";
const answer2 = "gazankulu";
const answer3 = "1960s";

const correctFeedback = "🎉 Congratulations!! You've won a 🤑 40% Discount on our Art Work! 🖼️";
const wrongFeedback = "❌ Oops! That’s incorrect. 😅 Try again for a chance to win the discount! 💸 (Psst... Hints are now provided! 😉)";


$(document).ready(function() {

    $("#feedback-div").hide();
    $(".hint").hide();
    $("#quiz-discount").hide();
    $(".discounted").hide();
    $("#amount").hide();
    

});

function checkAnswer() {
    const selected1 = document.querySelector('input[name="quiz-answer1"]:checked');
    const selected2 = document.querySelector('input[name="quiz-answer2"]:checked');
    const selected3 = document.querySelector('input[name="quiz-answer3"]:checked');
    
    if(!selected1 && !selected2 && !selected3) {
        alert("please select from the options above before checking!")
        return false;
    } else if(selected1.value === answer1 && selected2.value === answer2 && selected3.value === answer3) {
        document.querySelector('#feedback').innerHTML = correctFeedback;
        $("#feedback").css('color','var(--success)');
        $("#quizSec").css('border-color','var(--success)');
        $("#check-answer").hide("slow");
        $(".hint").hide();
        $("#feedback-div").show("fast");

    } else {
        document.querySelector('#feedback').innerHTML = wrongFeedback;
        $("#feedback").css('color','var(--error)');
        $("#quizSec").css('border-color','var(--error)');
        $("#feedback-div").show("fast");
        $(".hint").css({"color":"var(--warning)","font-size":"120%"});
        $(".hint").show("slow");
    }
    return false;
}

function toggleCardDetails() {
    const cardRadio = document.getElementById("card");
    const cardSection = document.getElementById("cardSection");

    if (cardRadio.checked) {
        $("#cardSection").show("slow");
    } else {
        $("#cardSection").hide("slow");
    }
    
}

function toggleSelect() {
    const select = document.querySelector('select');
    if(select) {
        $("#amount").show("fast");

    }
}




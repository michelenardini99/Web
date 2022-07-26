document.querySelectorAll("button").forEach(function(btn){
    btn.addEventListener("click", function () {
        playSoundListener(btn.innerHTML);
        buttonAnimation(btn.innerHTML);
    });
});

document.addEventListener("keydown", function (event) {
    playSoundListener(event.key);
    buttonAnimation(event.key);
});

function playSoundListener(inputText){
    var text = inputText;
    switch (text) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {  activeButton.classList.remove("pressed") }, 100);
}








for(var i = 0; i <document.querySelectorAll(".drum").length; i++){n
var clickMe = document.querySelectorAll("button")[i]// 
clickMe.addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}
document.addEventListener("keypress",function(e){
    makeSound(e.key);
    buttonAnimation(e.key)
});
function makeSound (key)
{    switch (key) {
        case "w":
            var audioW = new Audio("sounds/tom-1.mp3");//we are creating audio evertime key is pressed!
            audioW.play();           
            break;
        case "a":
            var audioA = new Audio("sounds/tom-2.mp3");
            audioA.play();
            
            break;
        case "s":
            var audioS = new Audio("sounds/tom-3.mp3");
            audioS.play();
            
            break;
         case "d":
            var audioD = new Audio("sounds/tom-4.mp3");
            audioD.play();
            
            break;
            case "j":
            var audioJ = new Audio("sounds/snare.mp3");
            audioJ.play();
            
            break;
            case "k":
            var audioK = new Audio("sounds/crash.mp3");
            audioK.play();
            
            break;

            case "l":
            var audioL = new Audio("sounds/kick-bass.mp3");
            audioL.play();
            
            break;
            default:
            console.log("ss");
    }
};
function buttonAnimation(pr){
    document.querySelector("." + pr).classList.add("love");
    setTimeout(function(){
        document.querySelector("." + pr).classList.remove("love");
    },100);}

var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = document.getElementById("counter");
var count = 0;
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
    count += 1;
    counter.innerHTML = count;
}
var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop >=130){
        block.style.animation = "none";
        block.style.display = "none";
        counter.innerHTML = 0;
        count = 0;
        alert("you're dead");
    }
},10);
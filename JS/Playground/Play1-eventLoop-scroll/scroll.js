function animateSomething(){
    console.log("animate something");
    document.getElementById("head").innerHTML = "scrolling"
}
function justATest(){
    document.getElementById("head").innerHTML = "testing"
}
$('button').on('click', justATest);
$('#target').on('scroll', animateSomething);
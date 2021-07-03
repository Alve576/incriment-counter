var intT = setInterval(countingT,1.5)
var intY = setInterval(countingY,1.5)
var intF = setInterval(countingF,1.5)

var countT = 1;
var countY = 1;
var countF = 1;

function countingT() {

    countT++
    if(countT === 1200){
        clearInterval(intT)
    }
    document.getElementById("twitter").innerHTML = countT;
}
function countingY() {

    countY++
    if(countY === 2000){
        clearInterval(intY)
    }
    document.getElementById("youtube").innerHTML = countY;
}
function countingF() {

    countF++
    if(countF === 1800){
        clearInterval(intF)
    }
    document.getElementById("facebook").innerHTML = countF;
}
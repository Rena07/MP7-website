
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function setup(){
var numbers = shuffleArray(["1","2","3","4","5","6","7","8","9"]);
document.getElementById('topleft').innerHTML=numbers[0];
document.getElementById('topcenter').innerHTML=numbers[1];
document.getElementById('topright').innerHTML=numbers[2];
document.getElementById('centerleft').innerHTML=numbers[3];
document.getElementById('centercenter').innerHTML=numbers[4];
document.getElementById('centerright').innerHTML=numbers[5];
document.getElementById('bottomleft').innerHTML=numbers[6];
document.getElementById('bottomcenter').innerHTML=numbers[7];
document.getElementById('bottomright').innerHTML=numbers[8];
}


var i = 1;
var myVar = setInterval(cycleBG, 6000);
function cycleBG() {
    document.getElementsByClassName("hero").heroImg.style.backgroundImage=`url('img/bg${i}.jpg')`;
    i = (i < 8) ? i+1:1;        
}

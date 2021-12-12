function loading(){
    window.alert("loading weather report");
}
function rid() {
const cook = document.getElementById('col3');
cook.remove();

}
function deg(elm){
    console.log(elm);
    var temp = document.querySelectorAll('.hot');
    var temp2 = document.querySelectorAll('.cold');
    for (i =0; i < temp.length; i++){
        var y = Math.round(temp[i].innerText * 1.8 +32);
        temp[i].innerText = y;
        var x = Math.round(temp2[i].innerText * 1.8 +32);
        temp2[i].innerText = x;
    }
}
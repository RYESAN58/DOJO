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
        console.log(document.getElementById('dropdown').value)
        if (document.getElementById('dropdown').value =='f'){
            var y = Math.round(temp[i].innerText * 1.8 +32);
            temp[i].innerText = y;
            var x = Math.round(temp2[i].innerText * 1.8 +32);
            temp2[i].innerText = x;
        }
        else{
            var z = Math.round((temp[i].innerText - 32)* (5/9));
            var l = Math.round((temp2[i].innerText - 32)* (5/9));
            temp[i].innerText = z
            temp2[i].innerText = l
        }

        }
}
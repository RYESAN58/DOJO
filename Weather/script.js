function loading(){
    window.alert("loading weather report");
}
function rid() {
const cook = document.getElementById('col3');
cook.remove();

}


async function getCoderData() {
    var response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=san%20jose,ca,usa&appid=eb8ae1a8b42a97ae78902ca924a362a4");
    var coderData = await response.json();
    var temp = document.querySelectorAll('.hot');
    var temp2 = document.querySelectorAll('.cold');
    for (i =0; i < temp.length; i++){
        temp[i].innerText = Math.round(coderData.main.temp -273.15);
        temp2[i].innerText = Math.round(coderData.main.feels_like -273.15);
    }

    console.log(coderData.main.temp -273.15)
    return coderData;
}
console.log('THIS IS ', getCoderData)

getCoderData()
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


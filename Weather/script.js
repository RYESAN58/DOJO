let city = 'san%20jose'
let state = 'ca'
function loading(elm){
    window.alert("loading weather report");
    city = elm.innerText
    if (city == 'Chicago'){
        state = 'il'
    }
    else if(city == 'Dallas'){
        state = 'tx'
    }
    else{
        state = 'ca'
    }
    console.log(elm.innerText)
    getCoderData()
    document.querySelector('h2').innerText = city
}
console.log(city,state)
function rid() {
const cook = document.getElementById('col3');
cook.remove();

}

async function getCoderData() {
    var response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${state},usa&appid=eb8ae1a8b42a97ae78902ca924a362a4`);
    var coderData = await response.json();
    var temp = document.querySelectorAll('.hot');
    var temp2 = document.querySelectorAll('.cold');
    var desc = document.querySelectorAll('.info');

    for (i =0; i < temp.length; i++){
        temp[i].innerText = Math.round(coderData.list[i].main.temp_max -273.15);
        temp2[i].innerText = Math.round(coderData.list[i].main.temp_min -273.15);
    }
    for (i=0; i < desc.length; i++){
        desc[i].innerText = coderData.list[i].weather[0].description
    }

    //console.log(coderData.main.temp -273.15)
    return coderData;
}

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


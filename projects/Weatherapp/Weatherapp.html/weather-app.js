var APPID = "e284e117c06c5586f3f7061fe7b9976a";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;

function updateByZip(zip) {
    var url = "http" + 
    "://api.openweathermap.org/data/2.5/weather?" + 
    "zip=" + zip +
    "&APPID=" + APPID;
    sendRequest(url);
}

function sendRequest (url){
    var xmlhttps = new XMLHttpRequest();
    xmlhttps.onreadystatechange = function() {
        if (xmlhttps.readyState == 4 && xmlhttps.status == 200){
            var data = JSON.parse(xmlhttps.responseText);
            var weather = {};
            weather.icon = data.weather[0].id;
            weather.humidity = data.main.humidity;
            weather.wind = data.wind.speed;
            weather.direction = data.wind.deg;
            weather.loc = data.name;
            weather.temp = data.main.temp;
            update(weather);
        }
    };
    xmlhttps.open("GET", url, true);
    xmlhttps.send();
}
function update (weather){
    wind.innerHTML = weather.wind;
    direction.innerHTML = weather.direction;
    humidity.innerHTML = weather.humidity;
    loc.innerHTML = weather.loc;
    temp.innerHTML = weather.temp;
    icon.src = "image/codes/" + weather.icon + ".png";
    console.log(icon.src);
} 

window.onload = function () {
    temp = document.getElementById("temperature");
    loc = document.getElementById("location");
    icon = document.getElementById("icon");
    humidity = document.getElementById("humidity");
    wind = document.getElementById("wind");
    direction = document.getElementById("direction");

    updateByZip(60634);
   
};
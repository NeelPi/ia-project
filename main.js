var fanOff = 'fanOff.py';
var fanOn = 'fanOn.py';
var lightOff = 'lightOff.py';
var lightOn = 'lightOn.py';
var fan = false;
var light = false;
var fanB = document.getElementById("id_wf327dQCK");
var lightB = document.getElementById("id_V1PdXwqzK");
var stateF = 0;
var stateL = 0;

function http_get(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

fanB.addEventListener('touchstart', function touchF() {
    stateF++;
    if(stateF %2==0){
        fan=false;
        http_get('http://localhost:8080/api/fanOff');
        console.log(fan);
    }
    else{
        fan=true;
        http_get('http://localhost:8080/api/fanOn');
        console.log(fan);
    }
    
},false);
lightB.addEventListener('touchstart', function touchF() {
    stateL++;
    if (stateL % 2 == 0) {
        light = false;
        http_get('http://localhost:8080/api/lightOff');
        console.log(light);
    }
    else {
        light = true;
        http_get('http://localhost:8080/api/lightOn');
        console.log(light);
    }

}, false);

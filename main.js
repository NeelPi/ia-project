import { PythonShell } from 'python-shell';
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

fanB.addEventListener('touchstart', function touchF() {
    stateF++;
    if(stateF %2==0){
        fan=false;
        // PythonShell.run(fanOff, null, function (err) {
        //     if (err) throw err;
        //     console.log('finished');
        // });
        console.log(fan);
    }
    else{
        fan=true;
        // PythonShell.run(fanOn, null, function (err) {
        //     if (err) throw err;
        //     console.log('finished');
        // });
        console.log(fan);
    }
    
},false);
lightB.addEventListener('touchstart', function touchF() {
    stateL++;
    if (stateL % 2 == 0) {
        light = false;
        // PythonShell.run(lightOff, null, function (err) {
        //     if (err) throw err;
        //     console.log('finished');
        // });
        console.log(light);
    }
    else {
        light = true;
        // PythonShell.run(lightOn, null, function (err) {
        //     if (err) throw err;
        //     console.log('finished');
        // });
        console.log(light);
    }

}, false);

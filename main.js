import {PythonShell} from 'python-shell';
var fan = false;
var light = false;
var fanB = document.getElementById("id_wf327dQCK");
var lightB = document.getElementById("id_V1PdXwqzK");
var stateF = 0;
var stateL = 0;

fanB.addEventListener('touchstart', function touchF(ev) {
    stateF++
    if(stateF %2==0){
        fan=false;
        PythonShell.run('fanOff.py', null, function (err) {
            if (err) throw err;
            console.log('finished');});
        console.log(fan);
    }
    else{
        fan=true;
        PythonShell.run('fanOn.py', null, function (err) {
            if (err) throw err;
            console.log('finished');
        });
        console.log(fan);
    }
    
},false);
lightB.addEventListener('touchstart', function touchF() {
    stateL++
    if (stateL % 2 == 0) {
        light = false;
        PythonShell.run('lightOff.py', null, function (err) {
            if (err) throw err;
            console.log('finished');
        });
        console.log(light);
    }
    else {
        light = true;
        PythonShell.run('lightOn.py', null, function (err) {
            if (err) throw err;
            console.log('finished');
        });
        console.log(light);
    }

}, false);

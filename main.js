
var fan = false;
var light = false;
var fanB = document.getElementById("id_wf327dQCK");
var lightB = document.getElementById("id_V1PdXwqzK");
var stateF = 0;
var stateL = 0;
const spawn = require("child_process").spawn;
fanB.addEventListener('touchstart', function touchF(ev) {
    stateF++;
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
    stateL++;
    if (stateL % 2 == 0) {
        light = false;
        const pythonProcess = spawn('python', ["lightOff.py"]);
        console.log(light);
    }
    else {
        light = true;
        const pythonProcess = spawn('python', ["lightOn.py"]);
        console.log(light);
    }

}, false);

const clock = document.getElementById("clock");



setInterval(function() {
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString();

    // console.log("data1", date.toLocaleTimeString()) //gives time
    // console.log("data2", date.toLocaleString(), )   //gives date & time
    // console.log("data3", date.toLocaleDateString()) //gives date
}, 1000)
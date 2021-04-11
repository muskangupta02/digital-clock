function displaytime() {
    let t= new Date();
    let hr = t.getHours();
    let min = t.getMinutes();
    let sec = t.getSeconds();
    let currentTime = hr + ":" + min + ":" + sec;
    document.getElementById('time').innerHTML = currentTime;
   
}
setInterval(displaytime,1000);
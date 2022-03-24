// CLOCK
function timeStamp() {
    let timer = new Date()
    let fop = timer.toLocaleTimeString()
    document.getElementById('clock').innerHTML = fop
}
setInterval(timeStamp, 1000)
timeStamp()
// END CLOCK
// NAV BTN
function openNav(){
    document.getElementById('nav').classList.toggle('open')
    document.getElementById('burger').classList.toggle('btn-work')
}
// END NAV BTN




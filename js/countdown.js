var oHours = document.getElementById("hours")
var oMinutes = document.getElementById("minutes")
var oSeconds = document.getElementById("seconds")

function fn() {
    var LDate = new Date()
    var endTimes = new Date(2019, 10 , 8)
    var step = endTimes - LDate
    var Ahours = parseInt(step / 1000 / 60 / 60 % 24)
    var Aminutes = parseInt(step / 1000 / 60 % 60)
    var Aseconds = parseInt(step / 1000 % 60)
    Ahours = Ahours < 10 ? "0" + Ahours : Ahours
    Aminutes = Aminutes < 10 ? "0" + Aminutes : Aminutes
    Aseconds = Aseconds < 10 ? "0" + Aseconds : Aseconds
    hours.innerHTML = Ahours
    minutes.innerHTML = Aminutes
    seconds.innerHTML = Aseconds

}
fn()
setInterval(fn, 1000)
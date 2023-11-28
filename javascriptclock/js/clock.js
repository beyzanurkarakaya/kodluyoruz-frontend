document.querySelector("#myName").innerHTML = prompt("Adınız Nedir?")

function showTime() {
    let currentTime = new Date()
    let hour = currentTime.getHours()
    let minute = currentTime.getMinutes()
    let second = currentTime.getSeconds()
    minute = minute < 10 ? minute = "0" + minute : minute
    second = second < 10 ? second = "0" + second : second
    document.querySelector("#myClock").innerHTML = `${hour} : ${minute} : ${second}`

    const weekDays = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumasrtesi", "Pazar"]
    document.querySelector("#myDay").innerHTML = weekDays[currentTime.getDay()]
}
setTimeout(showTime, 0)
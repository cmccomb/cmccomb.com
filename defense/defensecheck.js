function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date().getTime();
        var distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            window.location = "../index.html";
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id+'d').innerHTML = zeroPad(days, 2);
        document.getElementById(id+'h').innerHTML = zeroPad(hours, 2);
        document.getElementById(id+'m').innerHTML = zeroPad(minutes, 2);
        document.getElementById(id+'s').innerHTML = zeroPad(seconds, 2);
    }

    timer = setInterval(showRemaining, 1000);
}

CountDownTimer(Date.UTC(2016, 7, 25, 17, 0, 0), 'countdown');
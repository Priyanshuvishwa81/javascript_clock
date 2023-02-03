var date = new Date();
var time = date.getMinutes();


var hour = date.getHours();
var min =date.getMinutes();
var sec =date.getSeconds();
var h_deg = 6*5*hour;
var m_deg = 6*min;
var s_deg = 6*sec;

var hour_angle = document.getElementById("hour");
var min_angle = document.getElementById("min");
var sec_angle = document.getElementById("sec");

var rotate = () => {
    min_angle.style.transform = "rotate("+m_deg+"deg)";
    hour_angle.style.transform = "rotate("+h_deg+"deg)";
    sec_angle.style.transform = "rotate("+s_deg+"deg)";

    if (sec == 60) {
        min=min+1;
        m_deg=m_deg+6;
        s_deg=0;
    }
    else if (min == 60) {
        h_deg=h_deg+6;
        hour=hour+1;
        m_deg=0;
    }
    else if(hour == 12){
        h_deg = 0;
    }

    s_deg=s_deg+6;
    sec= sec+1;
}

setInterval(rotate,1000);

// hour_angle.style.transform = "rotate(180deg)"
rotate();
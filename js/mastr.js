// Cheng backgroundImags
let sliedPage = document.querySelector(".slider");

let imagsArrya = ["bg_1.jpg", "bg_3.jpg"];

setInterval(function () {
    let randomNumber = Math.floor(Math.random() * imagsArrya.length);
    sliedPage.style.backgroundImage = 'url("images/' + imagsArrya[randomNumber] + '")';
}, 5000);


// Counter Times

let finshDis = new Date("Dec 30, 2022 23:59:59").getTime();
    // console.log(startCount);

    let countre = setInterval( () => {
        let nowDate = new Date().getTime();

        let timeDiff = finshDis - nowDate;

        let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor(timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(timeDiff % (1000 * 60) / (1000));
        document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
        document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
        document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

        if(timeDiff < 0){
            clearInterval(countre);
        };

        
        document.querySelector(".days").innerHTML = days == 0 ? `Done` : days;
        document.querySelector(".hours").innerHTML = hours == 0 ? `Done` : hours;
        document.querySelector(".minutes").innerHTML = minutes == 0 ? `Done` : minutes;
        document.querySelector(".seconds").innerHTML = seconds == 0 ? `Done` : seconds;

    },1000)
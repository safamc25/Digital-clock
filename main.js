function clockTime(){
// // to get system date
  
// Add audio control here
   const audio = document.getElementById("clockAudio");

   // Play audio
   audio.play();
   
   // Pause audio when it's midnight
//    if (hour === "00" && minute === "00" && second === "00") {
//        audio.pause();
//    }
    let date=new Date()
    let hour=date.getHours()
    let minute=date.getMinutes()
    let second=date.getSeconds()
    let am=hour>=12?"PM":"AM";
    
    
    // convert 24 hour clock to 12hr clock
    if(hour>12){
        hour=hour-12;
    }

    // add zero before single digit number

    hour=(hour<10)?"0"+hour:hour;
    minute=(minute<10)?"0"+minute:minute;
    second=(second<10)?"0"+second:second;

    // time.innerHTML=`${hour}:${minute}:${second} `

    hours.innerHTML=hour;
    minutes.innerHTML=minute;
    seconds.innerHTML=second;
    ampm.innerHTML=am;
    setTimeout(()=>{clockTime()
    },1000)
}
clockTime()
//function to update time
function updateTime(){
  var time = moment().format("H:mm:ss");
  $('#currentTime').text(time);
  setTimeout(updateTime, 1000);
}

//Variable holding audio file
var alarmEffect = new Audio('audio/alarmeffect.mp3');

//Function to start alarmEffect
function playAlarm() {
  alarmEffect.play();
}
//Function to stop alarmEffect
function stopAlarm() {
  alarmEffect.pause();
}


//Main Function to execute
$(document).ready(function() {
  updateTime();
  $('#alarm-clock-form').submit(function(event) {
    var timeSet = $('#timeSet').val();
    var timeCurrent = moment().format("H:mm");
    $('#displaySetTime').text(timeSet);
    if(timeCurrent === timeSet){
      playAlarm();
      console.log("RING!");
    }
    event.preventDefault();
  });
});

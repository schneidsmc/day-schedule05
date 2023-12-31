

$(document).ready(function () {
  
  var nowTime = dayjs().format ('MMMM-DD-YYYY, hh:mm a');
  $("#currentDay").text(nowTime);
  

  function updateCurrent() {
    var nowTime = dayjs().hour();

      $(".time-block").each(function () {
        var hour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( hour, nowTime)

        if (hour < nowTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (hour === nowTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
    
    $('.saveBtn').on('click', function () {

      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, text);
      
    console.log(time, text);

    })
  
}

updateCurrent(); //re-run function

})


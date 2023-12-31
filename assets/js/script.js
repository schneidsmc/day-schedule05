var clearBtn = document.querySelector(".clearBtn")

// This function runs as soon as the page is loaded.
$(document).ready(function () {
  
  var nowTime = dayjs().format ('MMMM-DD-YYYY, hh:mm a');
  $("#currentDay").text(nowTime);
// This function designates the date and time at the top of the page. It also used to update the class applied to each time block according to the time. Past/Present/Future.
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
    // This function saves the task to local storage.
    $('.saveBtn').on('click', function () {

      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      var logStored = $('.logStored');

      localStorage.setItem(time, text);

      if(text || time !== 'null') {
        $('#logStored').addClass("logStored").text('Task Stored!');
        setTimeout(function () {

          location.reload();
        }, 1000);
      
    }
    console.log(time, text);

    }) 
    
}

// These make sure to display the task associated with the specific hour it is saved from. 
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


updateCurrent(); //re-run function

// This button clears all the tasks.
clearBtn.addEventListener('click', function clearLocalStorage() {
  localStorage.clear();
  clearList()
})
function clearList(){
  $('.description').val('');
}
})






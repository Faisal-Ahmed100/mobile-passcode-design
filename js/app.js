var count = 0;
var circleCount = [];
var error = false;

$(".digit").on("click", function () {
  console.log(error);
  var num = $(this).clone().children().remove().end().text();
  if (count < 6) {
    $("#circles span.circleOutline:nth-child(" + (count + 1) + ")").addClass(
      "active"
    );
    error = false;
    if (!error) {
      $(".passcode-title-wrapper").css("display", "block");
      $("#errorPasscode").css("display", "none");
      $(".backspace").css("opacity", 1);
      $("#circles").removeClass("error");
    }

    count++;
  }
  if (count > 5) {
    error = true;
    if (error) {
      $(".passcode-title-wrapper").css("display", "none");
      $("#errorPasscode").css("display", "block");
      $(".backspace").css("opacity", 0);
      $("#circles").addClass("error");

      // removing all filled background of circle
      $("#circles span.circleOutline").removeClass("active");
    }

    count = 0;
  }
});

// back space js
$(".backspace").on("click", function () {
  if (count > 0) {
    $("#circles span.circleOutline:nth-child(" + count + ")").removeClass(
      "active"
    );
    count--;
  }
});

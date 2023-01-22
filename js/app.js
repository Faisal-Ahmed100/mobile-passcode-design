var count = 0;
var circleCount = [];

$(".digit").on("click", function () {
  var num = $(this).clone().children().remove().end().text();
  if (count < 6) {
    $("#circles span.circleOutline:nth-child(" + (count + 1) + ")").addClass(
      "active"
    );

    count++;
  }
});

$(".backspace").on("click", function () {
  if (count > 0) {
    $("#circles span.circleOutline:nth-child(" + count + ")").removeClass(
      "active"
    );
    count--;
  }
});


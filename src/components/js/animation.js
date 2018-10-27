
$(document).ready(function() {
  $("#hello").fadeIn(2000);
  $("#hello").fadeOut(1000, function() {
    $("#welcome").fadeIn(2000);
    $("#footer").fadeIn(1000);
  });
});

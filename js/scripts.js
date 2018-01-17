$(document).ready(function() {
  $("button").click(function() {
    $("#pageTwo").show();
});

  $("#test").submit(function(event){
    var appAnswer = $("input:radio[name=app]:checked").val();
    var easyHardAnswer = $("input:radio[name=easyHard]:checked").val();
    var teachAnswer = $("input:radio[name=teach]:checked").val();
    var lengthAnswer = $("input:radio[name=length]:checked").val();
    var slowOrFastAnswer = $("input:radio[name=slowOrFast]:checked").val();

    if (appAnswer === "appJava" && easyHardAnswer === "easyPython" && teachAnswer === "teachPython" && lengthAnswer === "shortPython" && slowOrFastAnswer === "fastPython"){
      var trackResult = "track 1"
    } else {
      var trackResult = "track 2"
    }if (appAnswer && easyHardAnswer && teachAnswer && lengthAnswer && slowOrFastAnswer) {

  $("#track").empty().append(trackResult);
  $("#result").show();
  }
  event.preventDefault();
});
});

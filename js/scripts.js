$(document).ready(function() {
  $("button").click(function() {
    $("#pageTwo").show();
});

  $("#test").submit(function(event){
    var appAnswer = $("input:radio[name=app]:checked").val();
    var easyHardAnswer = $("input:radio[name=easyHard]:checked").val();
    var teachAnswer = $("input:radio[name=teach]:checked").val();
    var teachAnswer = $("input:radio[name=teach]:checked").val();
    var lengthAnswer = $("input:radio[name=length]:checked").val();
    var slowOrFastAnswer = $("input:radio[name=slowOrFast]:checked").val();

    if (appAnswer === "appJava" && easyHardAnswer ==="easyPython" && teachAnswer ==="teachPython" && lengthAnswer === "shortPython" && slowOrFastAnswer === "fastPython"){
      var trackResults = "track 1"
    }
    else if (appAnswer === "appRuby" && easyHardAnswer ==="hardJava" && teachAnswer === "noTeachJava" && lengthAnswer === "longJava" && slowOrFastAnswer === "slowJava"){
      var trackResults = "track 2"
    }
    if (appAnswer && easyHardAnswer && teachAnswer && lengthAnswer && slowOrFastAnswer) {
  $("#track").empty().append(trackResults);
  $("#result").show();
  }
  event.preventDefault();
});
});

$(document).ready(function(){
  $("#appform").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var descriptionInput = $("input#description").val();
    var timeInput = $("input#time").val();
    var dateInput = $("input#date").val();

    $("#nameInput").text(nameInput);
    $("#descriptionInput").text(descriptionInput);
    $("#timeInput").text(timeInput);
    $("#dateInput").text(dateInput);
  });
});

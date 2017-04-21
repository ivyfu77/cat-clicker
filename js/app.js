var counter = 0;
$('#cat').click(function(e) {
  console.log(++counter);
  $("#counter").text("You have clicked " + counter + " times.");
});

$('#clear').click(function(e) {
	counter = 0;
	$("#counter").text("Click the picture.");
});
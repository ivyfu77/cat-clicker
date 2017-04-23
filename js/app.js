
$( document ).ready(function() {
    var catName1 = "Jess";
    var catName2 = "Momo";
    $('#name1').text(catName1);
    $('#name2').text(catName2);

	var counter1 = 0;
	var counter2 = 0;
	$('#cat1').click(function(e) {
	  console.log(++counter1);
	  $("#counter1").text("You have clicked " + catName1 + " " + counter1 + " times.");
	});
	$('#cat2').click(function(e) {
	  console.log(++counter2);
	  $("#counter2").text("You have clicked " + catName2 + " " + counter2 + " times.");
	});

	$('#clear').click(function(e) {
		counter1 = 0;
		counter2 = 0;
		$("#counter1").text("Click the picture.");
		$("#counter2").text("Click the picture.");
	});
});
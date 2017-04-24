
$( document ).ready(function() {

	var cats = [{name:'Jess', id:'cat1', img:'img/cute-cat-jess.jpg', counter:0},
				{name:'Momo', id:'cat2', img:'img/cute-cat-momo.jpg', counter:0},
				{name:'Alen', id:'cat3', img:'img/cute-cat-alen.jpg', counter:0},
				{name:'Angel', id:'cat4', img:'img/cute-cat-angel.jpg', counter:0},
				{name:'Dala & Deby', id:'cat5', img:'img/cute-cat-dala-deby-small.jpg', counter:0},
				{name:'Star', id:'cat6', img:'img/cute-cat-star.jpg', counter:0}];
	var curCounter = 0;
	var curCat = cats[0];

	var selectCat = function(theCat) {
		return function() {
			curCat = theCat;
			console.log(curCat);
			curCounter = theCat.counter;
			$("#catName").text(theCat.name);
			$("#catImgBox img").attr("src", theCat.img);
			if (curCounter == 0) {
				$("#counter").text("Click the picture.");
			} else {
				$("#counter").text("You have clicked " + curCat.name + " " + curCounter + " times.");
			}
		};
	};

	$('#catImgBox').click(function(e) {
	  console.log(++curCounter);
	  $("#counter").text("You have clicked " + curCat.name + " " + curCounter + " times.");
	  curCat.counter = curCounter;
	  $("#"+curCat.id+" span").text(" ("+curCounter+")");
	});

	$('#clear').click(function(e) {
		curCounter = 0;
		curCat.counter = curCounter;
		$("#counter").text("Click the picture.");
		$("#"+curCat.id+" span").text(" ("+curCounter+")");
	});

	for (var i = 0; i < cats.length; i++) {
		var item = '<li id="' + cats[i].id + '"><a href="#"><img src="' + cats[i].img + '" />' + 
					cats[i].name + '<span> (' + cats[i].counter + ')' + '<span></a></li>';
		$("aside ul").append(item);
		var cat = cats[i];
		$("#" + cats[i].id).click(selectCat(cat));
	}

});
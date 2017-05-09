
$(function() {

	var data = {
		cats:  [{name:'Jess', id:'cat1', img:'img/cute-cat-jess.jpg', counter:0},
				{name:'Momo', id:'cat2', img:'img/cute-cat-momo.jpg', counter:0},
				{name:'Alen', id:'cat3', img:'img/cute-cat-alen.jpg', counter:0},
				{name:'Angel', id:'cat4', img:'img/cute-cat-angel.jpg', counter:0},
				{name:'Dala & Deby', id:'cat5', img:'img/cute-cat-dala-deby-small.jpg', counter:0},
				{name:'Star', id:'cat6', img:'img/cute-cat-star.jpg', counter:0},
				{name:'Orbit', id:'cat7', img:'img/cute-cat-orbit.jpg', counter:0}],
		curCat: null
	};

	var octopus = {
		setCounter: function (counter) {
			data.curCat.counter = counter;
		},
		getCurCat: function() {
			return data.curCat;
		},
		getCats: function() {
			return data.cats;
		},
		setCurCat: function(cat) {
			data.curCat = cat;
		},
		getCounterText: function(num) {
			if (num == 0) {
				return "Click the picture.";
			} else {
				return "You have clicked " + data.curCat.name + " " + num + " times."
			}
		},
		addCounter: function(num) {
			data.curCat.counter += num;
			return data.curCat.counter;
		},
		init: function() {
			this.setCurCat(data.cats[0]);
			view.init();
		}
	};

	var view = {
		init: function() {
			var curCat = octopus.getCurCat();

			this.catName = $("#catName");
			this.catImage = $("#catImgBox img");
			this.counter = $("#counter");

			this.renderCat(curCat);

			this.renderCatList();

			$('#catImgBox').click(function(e) {
				var clickCat = octopus.getCurCat();
				octopus.addCounter(1);
				view.counter.text(octopus.getCounterText(clickCat.counter));
				$("#"+clickCat.id+" span").text(" ("+clickCat.counter+")");
			});

			$('#clear').click(function(e) {
				var clearCat = octopus.getCurCat();
				octopus.setCounter(0);
				view.counter.text(octopus.getCounterText(0));
				$("#"+clearCat.id+" span").text(" (0)");
			});
		},
		renderCat: function(cat) {
			this.catName.text(cat.name);
			this.catImage.attr("src", cat.img);
			this.counter.text(octopus.getCounterText(cat.counter));
		},
		selectCat: function(theCat) {
			return function() {
				octopus.setCurCat(theCat);
				view.renderCat(theCat);
			};
		},
		renderCatList: function() {
			var cats = octopus.getCats();
			for (var i = 0; i < cats.length; i++) {
				var item = '<li id="' + cats[i].id + '"><a href="#"><img src="' + cats[i].img + '" />' + 
							cats[i].name + '<span> (' + cats[i].counter + ')' + '<span></a></li>';
				$("aside ul").append(item);
				var cat = cats[i];
				$("#" + cats[i].id).click(this.selectCat(cat));
			}
			
		}
	};

	octopus.init();

});
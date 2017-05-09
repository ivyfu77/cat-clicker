
$(function() {

	var data = {
		cats:  [{name:'Jess', id:'cat1', img:'img/cute-cat-jess.jpg', counter:0},
				{name:'Momo', id:'cat2', img:'img/cute-cat-momo.jpg', counter:0},
				{name:'Alen', id:'cat3', img:'img/cute-cat-alen.jpg', counter:0},
				{name:'Angel', id:'cat4', img:'img/cute-cat-angel.jpg', counter:0},
				{name:'Dala & Deby', id:'cat5', img:'img/cute-cat-dala-deby-small.jpg', counter:0},
				{name:'Star', id:'cat6', img:'img/cute-cat-star.jpg', counter:0}],
		curCat: null
	};

	var octopus = {
		setCounter: function (counter) {
			data.curCat.counter = counter;
		},
		getCurCounter: function () {
			return data.curCat.counter;
		},
		getCurCat: function() {
			return data.curCat;
		},
		getCat: function(index) {
			return data.cats[index];
		},
		getCats: function() {
			return data.cats;
		},
		setCurCat: function(cat) {
			data.curCat = cat;
		},
		getCounterText: function() {
			var num = this.getCurCounter();
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
			view.init;
		}
	};

	var view = {
		init: function() {

			this.renderCatList();

			$('#catImgBox').click(function(e) {
				console.log(octopus.addCounter(1));
				$("#counter").text(octopus.getCounterText());
				$("#"+data.curCat.id+" span").text(" ("+octopus.getCurCounter()+")");
			});

			$('#clear').click(function(e) {
				octopus.setCounter(0);
				$("#counter").text("Click the picture.");
				$("#"+data.curCat.id+" span").text(" (0)");
			});
		},
		selectCat: function(theCat) {
			return function() {
				octopus.setCurCat(theCat);
				console.log(theCat);
				$("#catName").text(theCat.name);
				$("#catImgBox img").attr("src", theCat.img);
				$("#counter").text(octopus.getCounterText());
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

}());
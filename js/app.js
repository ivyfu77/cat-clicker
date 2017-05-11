var Cat = function (data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nickNames = ko.observableArray(data.nickNames);

	this.level = ko.computed(function() {
		if (this.clickCount() < 10) {
			return "Newborn";
		} else if(this.clickCount() >= 10 && this.clickCount() < 20) {
			return "Infant";
		} else if(this.clickCount() >= 20) {
			return "Teen";
		}
	}, this);
};

var initialCats = [ {name:'Jess', id:'cat1', imgSrc:'img/cute-cat-jess.jpg', clickCount:0, nickNames:[{ name: 'cucu' }]},
					{name:'Momo', id:'cat2', imgSrc:'img/cute-cat-momo.jpg', clickCount:0, nickNames:[{ name: 'tibi' }]},
					{name:'Alen', id:'cat3', imgSrc:'img/cute-cat-alen.jpg', clickCount:0, nickNames:[{ name: 'chou' }]},
					{name:'Angel', id:'cat4', imgSrc:'img/cute-cat-angel.jpg', clickCount:0, nickNames:[{ name: 'mini' }]},
					{name:'Dala & Deby', id:'cat5', imgSrc:'img/cute-cat-dala-deby-small.jpg', clickCount:0, nickNames:[{ name: 'twin' }]},
					{name:'Star', id:'cat6', imgSrc:'img/cute-cat-star.jpg', clickCount:0, nickNames:[{ name: 'nana' }]},
					{name:'Orbit', id:'cat7', imgSrc:'img/cute-cat-orbit.jpg', clickCount:0, nickNames:[{ name: 'dan' }]}
				  ];

var ViewModel = function() {
	//When add with: curCat binding in view, click img will get the binding context this -> curCat
	//Use self as a pointer to keep the ViewModel link
	var self = this; 

	this.catList = ko.observableArray([]);
	initialCats.forEach(function(cat) {
		self.catList.push(new Cat(cat));
	});
	this.curCat = ko.observable(self.catList()[0]);

	this.incrementCounter = function() {
		//console.log(this);  => Will console the Cat object
 		self.curCat().clickCount(self.curCat().clickCount() + 1);
	};

};

ko.applyBindings(new ViewModel());
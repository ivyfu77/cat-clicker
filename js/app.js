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

var ViewModel = function() {
	//When add with: curCat binding in view, click img will get the binding context this -> curCat
	//Use self as a pointer to keep the ViewModel link
	var self = this; 
	this.curCat = ko.observable(new Cat({
		clickCount: 0,
		name: "Jess",
		imgSrc: "img/cute-cat-jess.jpg",
		imgAttribution: "https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg",
		nickNames: [{ name: 'Bert' },
			        { name: 'Charles'},
			        { name: 'Denise'}]
	}));

	this.incrementCounter = function() {
		//console.log(this);  => Will console the Cat object
 		self.curCat().clickCount(self.curCat().clickCount() + 1);
	};

};

ko.applyBindings(new ViewModel());
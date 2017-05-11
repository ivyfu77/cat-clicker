var Cat = function () {
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Jess");
	this.imgSrc = ko.observable("img/cute-cat-jess.jpg");
	this.imgAttribution = ko.observable("https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg");

	this.nickNames = ko.observableArray([
        { name: 'Bert' },
        { name: 'Charles' },
        { name: 'Denise' }
    ]);
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
	this.curCat = ko.observable(new Cat());

	this.incrementCounter = function() {
		this.curCat().clickCount(this.curCat().clickCount() + 1);
	};

};

ko.applyBindings(new ViewModel());
var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Jess");
	this.imgSrc = ko.observable("img/cute-cat-jess.jpg");
	this.imgAttribution = ko.observable("https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg");

	this.nickNames = ko.observableArray([
        { name: 'Bert' },
        { name: 'Charles' },
        { name: 'Denise' }
    ]);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

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

ko.applyBindings(new ViewModel());
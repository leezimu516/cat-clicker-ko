var ViewModel = function() {
    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
        
        
    };
}

var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('flicker');
    
    //cat level using clickcount
    this.level = ko.computed(function() {
        var level;
        var clicks = this.clickCount();
        if (clicks < 10) {
            level = 'newborn';
        }
        else if (clicks < 20) {
            level = 'infant';
        } else {
            level = 'adult';
        }

        return level;
    }, this);

    this.nickname = ko.observableArray([
        {catname:'ki'}, 
        {catname:'kk'}, 
        {catname:'kki'}
    ]);
}

ko.applyBindings(new ViewModel());
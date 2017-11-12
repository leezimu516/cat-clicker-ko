var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('flicker');
    this.level = ko.observable('newborn');
    this.nickname = ko.observableArray([
        {catname:'ki'}, 
        {catname:'kk'}, 
        {catname:'kki'}
    ]);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
        
        if (this.clickCount() > 10) {
            this.level('infant');
        }
    };
}

ko.applyBindings(new ViewModel());
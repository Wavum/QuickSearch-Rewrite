"use strict";
var QuickSearch;
(function (QuickSearch) {
    var Clock = (function () {
        function Clock(clockID) {
            this.separator = ":";
            this.clock = $("#" + clockID);
        }
        Clock.prototype.initInterval = function () {
            this.updateTime();
            setInterval(this.updateTime.bind(this), 10000);
        };
        Clock.prototype.updateTime = function () {
            var date = new Date();
            var hours = this.format(date.getHours());
            var minutes = this.format(date.getMinutes());
            this.clock.text(hours + this.separator + minutes);
        };
        Clock.prototype.format = function (num) {
            return ("0" + num.toString()).slice(-2);
        };
        return Clock;
    }());
    QuickSearch.Clock = Clock;
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var Search = (function () {
        function Search(searchID) {
            this.searchInput = $("#" + searchID);
            this.searchInput.keyup(this.keyPressed.bind(this));
        }
        Search.prototype.keyPressed = function (ev) {
            var originalEvent = ev.originalEvent;
            var value = this.searchInput.val();
            console.log(value);
        };
        return Search;
    }());
    QuickSearch.Search = Search;
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var Index = (function () {
        function Index() {
        }
        Index.main = function () {
            var clock = new QuickSearch.Clock("main-clock");
            clock.initInterval();
            var search = new QuickSearch.Search("main-searchInput");
        };
        return Index;
    }());
    QuickSearch.Index = Index;
    Index.main();
})(QuickSearch || (QuickSearch = {}));

//# sourceMappingURL=index.js.map

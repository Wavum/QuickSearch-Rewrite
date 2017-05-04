"use strict";
var QuickSearch;
(function (QuickSearch) {
    var Index = (function () {
        function Index() {
        }
        Index.main = function () {
            var clock = new QuickSearch.Clock("clock");
            clock.initInterval();
        };
        return Index;
    }());
    QuickSearch.Index = Index;
    Index.main();
})(QuickSearch || (QuickSearch = {}));

"use strict";
var QuickSearch;
(function (QuickSearch) {
    var Clock = (function () {
        function Clock(clockID) {
            this.separator = ":";
            this.clock = $("." + clockID);
        }
        Object.defineProperty(Clock.prototype, "Seperator", {
            set: function (value) {
                this.separator = value;
                this.updateTime();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Clock.prototype, "Color", {
            set: function (value) {
                this.clock.css("color", value);
                this.updateTime();
            },
            enumerable: true,
            configurable: true
        });
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

//# sourceMappingURL=index.js.map

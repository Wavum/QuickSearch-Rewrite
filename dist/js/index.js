"use strict";
String.prototype.startsWith = function startsWith(value) {
    return this.lastIndexOf(value, 0) === 0;
};
String.prototype.startsWithAny = function startsWithAny(values) {
    for (var i = 0; i < values.length; i++) {
        if (this.startsWith(values[i])) {
            return true;
        }
    }
    return false;
};
String.prototype.isEmpty = function isEmpty() {
    return (this.length === 0 || !this.trim());
};
String.prototype.upperFirstChar = function upperFirstChar() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
var QuickSearch;
(function (QuickSearch) {
    var Utilities;
    (function (Utilities) {
        var KeyCodes;
        (function (KeyCodes) {
            KeyCodes[KeyCodes["BACKSPACE"] = 8] = "BACKSPACE";
            KeyCodes[KeyCodes["TAB"] = 9] = "TAB";
            KeyCodes[KeyCodes["ENTER"] = 13] = "ENTER";
            KeyCodes[KeyCodes["SHIFT"] = 16] = "SHIFT";
            KeyCodes[KeyCodes["CTRL"] = 17] = "CTRL";
            KeyCodes[KeyCodes["ALT"] = 18] = "ALT";
            KeyCodes[KeyCodes["PAUSE_BREAK"] = 19] = "PAUSE_BREAK";
            KeyCodes[KeyCodes["CAPSLOCK"] = 20] = "CAPSLOCK";
            KeyCodes[KeyCodes["ESCAPE"] = 27] = "ESCAPE";
            KeyCodes[KeyCodes["PAGE_UP"] = 33] = "PAGE_UP";
            KeyCodes[KeyCodes["PAGE_DOWN"] = 34] = "PAGE_DOWN";
            KeyCodes[KeyCodes["END"] = 35] = "END";
            KeyCodes[KeyCodes["HOME"] = 36] = "HOME";
            KeyCodes[KeyCodes["LEFT_ARROW"] = 37] = "LEFT_ARROW";
            KeyCodes[KeyCodes["UP_ARROW"] = 38] = "UP_ARROW";
            KeyCodes[KeyCodes["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
            KeyCodes[KeyCodes["DOWN_ARROW"] = 40] = "DOWN_ARROW";
            KeyCodes[KeyCodes["INSERT"] = 45] = "INSERT";
            KeyCodes[KeyCodes["DELETE"] = 46] = "DELETE";
            KeyCodes[KeyCodes["KEY_0"] = 48] = "KEY_0";
            KeyCodes[KeyCodes["KEY_1"] = 49] = "KEY_1";
            KeyCodes[KeyCodes["KEY_2"] = 50] = "KEY_2";
            KeyCodes[KeyCodes["KEY_3"] = 51] = "KEY_3";
            KeyCodes[KeyCodes["KEY_4"] = 52] = "KEY_4";
            KeyCodes[KeyCodes["KEY_5"] = 53] = "KEY_5";
            KeyCodes[KeyCodes["KEY_6"] = 54] = "KEY_6";
            KeyCodes[KeyCodes["KEY_7"] = 55] = "KEY_7";
            KeyCodes[KeyCodes["KEY_8"] = 56] = "KEY_8";
            KeyCodes[KeyCodes["KEY_9"] = 57] = "KEY_9";
            KeyCodes[KeyCodes["KEY_A"] = 65] = "KEY_A";
            KeyCodes[KeyCodes["KEY_B"] = 66] = "KEY_B";
            KeyCodes[KeyCodes["KEY_C"] = 67] = "KEY_C";
            KeyCodes[KeyCodes["KEY_D"] = 68] = "KEY_D";
            KeyCodes[KeyCodes["KEY_E"] = 69] = "KEY_E";
            KeyCodes[KeyCodes["KEY_F"] = 70] = "KEY_F";
            KeyCodes[KeyCodes["KEY_G"] = 71] = "KEY_G";
            KeyCodes[KeyCodes["KEY_H"] = 72] = "KEY_H";
            KeyCodes[KeyCodes["KEY_I"] = 73] = "KEY_I";
            KeyCodes[KeyCodes["KEY_J"] = 74] = "KEY_J";
            KeyCodes[KeyCodes["KEY_K"] = 75] = "KEY_K";
            KeyCodes[KeyCodes["KEY_L"] = 76] = "KEY_L";
            KeyCodes[KeyCodes["KEY_M"] = 77] = "KEY_M";
            KeyCodes[KeyCodes["KEY_N"] = 78] = "KEY_N";
            KeyCodes[KeyCodes["KEY_O"] = 79] = "KEY_O";
            KeyCodes[KeyCodes["KEY_P"] = 80] = "KEY_P";
            KeyCodes[KeyCodes["KEY_Q"] = 81] = "KEY_Q";
            KeyCodes[KeyCodes["KEY_R"] = 82] = "KEY_R";
            KeyCodes[KeyCodes["KEY_S"] = 83] = "KEY_S";
            KeyCodes[KeyCodes["KEY_T"] = 84] = "KEY_T";
            KeyCodes[KeyCodes["KEY_U"] = 85] = "KEY_U";
            KeyCodes[KeyCodes["KEY_V"] = 86] = "KEY_V";
            KeyCodes[KeyCodes["KEY_W"] = 87] = "KEY_W";
            KeyCodes[KeyCodes["KEY_X"] = 88] = "KEY_X";
            KeyCodes[KeyCodes["KEY_Y"] = 89] = "KEY_Y";
            KeyCodes[KeyCodes["KEY_Z"] = 90] = "KEY_Z";
            KeyCodes[KeyCodes["LEFT_WINDOW_KEY"] = 91] = "LEFT_WINDOW_KEY";
            KeyCodes[KeyCodes["RIGHT_WINDOW_KEY"] = 92] = "RIGHT_WINDOW_KEY";
            KeyCodes[KeyCodes["SELECT_KEY"] = 93] = "SELECT_KEY";
            KeyCodes[KeyCodes["NUMPAD_0"] = 96] = "NUMPAD_0";
            KeyCodes[KeyCodes["NUMPAD_1"] = 97] = "NUMPAD_1";
            KeyCodes[KeyCodes["NUMPAD_2"] = 98] = "NUMPAD_2";
            KeyCodes[KeyCodes["NUMPAD_3"] = 99] = "NUMPAD_3";
            KeyCodes[KeyCodes["NUMPAD_4"] = 100] = "NUMPAD_4";
            KeyCodes[KeyCodes["NUMPAD_5"] = 101] = "NUMPAD_5";
            KeyCodes[KeyCodes["NUMPAD_6"] = 102] = "NUMPAD_6";
            KeyCodes[KeyCodes["NUMPAD_7"] = 103] = "NUMPAD_7";
            KeyCodes[KeyCodes["NUMPAD_8"] = 104] = "NUMPAD_8";
            KeyCodes[KeyCodes["NUMPAD_9"] = 105] = "NUMPAD_9";
            KeyCodes[KeyCodes["MULTIPLY"] = 106] = "MULTIPLY";
            KeyCodes[KeyCodes["ADD"] = 107] = "ADD";
            KeyCodes[KeyCodes["SUBTRACT"] = 109] = "SUBTRACT";
            KeyCodes[KeyCodes["DECIMAL_POINT"] = 110] = "DECIMAL_POINT";
            KeyCodes[KeyCodes["DIVIDE"] = 111] = "DIVIDE";
            KeyCodes[KeyCodes["F1"] = 112] = "F1";
            KeyCodes[KeyCodes["F2"] = 113] = "F2";
            KeyCodes[KeyCodes["F3"] = 114] = "F3";
            KeyCodes[KeyCodes["F4"] = 115] = "F4";
            KeyCodes[KeyCodes["F5"] = 116] = "F5";
            KeyCodes[KeyCodes["F6"] = 117] = "F6";
            KeyCodes[KeyCodes["F7"] = 118] = "F7";
            KeyCodes[KeyCodes["F8"] = 119] = "F8";
            KeyCodes[KeyCodes["F9"] = 120] = "F9";
            KeyCodes[KeyCodes["F10"] = 121] = "F10";
            KeyCodes[KeyCodes["F11"] = 122] = "F11";
            KeyCodes[KeyCodes["F12"] = 123] = "F12";
            KeyCodes[KeyCodes["NUM_LOCK"] = 144] = "NUM_LOCK";
            KeyCodes[KeyCodes["SCROLL_LOCK"] = 145] = "SCROLL_LOCK";
            KeyCodes[KeyCodes["SEMICOLON"] = 186] = "SEMICOLON";
            KeyCodes[KeyCodes["EQUAL_SIGN"] = 187] = "EQUAL_SIGN";
            KeyCodes[KeyCodes["COMMA"] = 188] = "COMMA";
            KeyCodes[KeyCodes["DASH"] = 189] = "DASH";
            KeyCodes[KeyCodes["PERIOD"] = 190] = "PERIOD";
            KeyCodes[KeyCodes["FORWARD_SLASH"] = 191] = "FORWARD_SLASH";
            KeyCodes[KeyCodes["GRAVE_ACCENT"] = 192] = "GRAVE_ACCENT";
            KeyCodes[KeyCodes["OPEN_BRACKET"] = 219] = "OPEN_BRACKET";
            KeyCodes[KeyCodes["BACK_SLASH"] = 220] = "BACK_SLASH";
            KeyCodes[KeyCodes["CLOSE_BRAKET"] = 221] = "CLOSE_BRAKET";
            KeyCodes[KeyCodes["SINGLE_QUOTE"] = 222] = "SINGLE_QUOTE";
        })(KeyCodes = Utilities.KeyCodes || (Utilities.KeyCodes = {}));
    })(Utilities = QuickSearch.Utilities || (QuickSearch.Utilities = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var Utilities;
    (function (Utilities) {
        var Validation = (function () {
            function Validation() {
            }
            Validation.isFQDN = function (url) {
                var regex = new RegExp(/^([-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?)$/gmi);
                return regex.test(url);
            };
            return Validation;
        }());
        Utilities.Validation = Validation;
    })(Utilities = QuickSearch.Utilities || (QuickSearch.Utilities = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var Config = (function () {
        function Config() {
            this.useSearchSuggestions = true;
            this.numberOfSearchSuggestions = 4;
            this.homepage = "https://start.duckduckgo.com/?q={0}";
            this.quickSearchPattern = "{0} ";
            this.clockSeperator = ":";
            this.shapeColor = "#3a5b83";
            this.quickSearches = [{ key: "d", site: "https://start.duckduckgo.com/?q={0}" },
                { key: "s", site: "https://startpage.com/do/search?query={0}" },
                { key: "g", site: "https://encrypted.google.com/#q={0}" },
                { key: "y", site: "https://youtube.com/results?search_query={0}" },
                { key: "r", site: "https://reddit.com/search?q={0}" },
                { key: "sr", site: "https://reddit.com/r/{0}" },
                { key: "sx", site: "https://stackexchange.com/search?q={0}" },
                { key: "so", site: "https://stackoverflow.com/search?q={0}" },
                { key: "gh", site: "https://github.com/search?q={0}" },
                { key: "f", site: "https://www.facebook.com/public?query={0}" },
                { key: "dict", site: "http://www.dict.cc/?s={0}" }];
        }
        Config.prototype.parseJSON = function (json) {
            var parsedConfig = JSON.parse(json);
            this.useSearchSuggestions = parsedConfig.useSearchSuggestions;
            this.numberOfSearchSuggestions = parsedConfig.numberOfSearchSuggestions;
            this.homepage = parsedConfig.homepage;
            this.quickSearchPattern = parsedConfig.quickSearchPattern;
            this.clockSeperator = parsedConfig.clockSeperator;
            this.shapeColor = parsedConfig.shapeColor;
            this.quickSearches = parsedConfig.quickSearches;
        };
        Object.defineProperty(Config.prototype, "UseSearchSuggestions", {
            get: function () {
                return this.useSearchSuggestions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "NumberOfSearchSuggestions", {
            get: function () {
                return this.numberOfSearchSuggestions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "Homepage", {
            get: function () {
                return this.homepage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "QuickSearchPattern", {
            get: function () {
                return this.quickSearchPattern;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "ClockSeperator", {
            get: function () {
                return this.clockSeperator;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "ShapeColor", {
            get: function () {
                return this.shapeColor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "QuickSearches", {
            get: function () {
                return this.quickSearches;
            },
            enumerable: true,
            configurable: true
        });
        return Config;
    }());
    QuickSearch.Config = Config;
})(QuickSearch || (QuickSearch = {}));
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
    var Search;
    (function (Search) {
        var SearchInputHandler = (function () {
            function SearchInputHandler(homepage) {
                this.homepage = homepage;
            }
            SearchInputHandler.prototype.workInput = function (text) {
            };
            SearchInputHandler.prototype.openSite = function (text) {
                if (QuickSearch.Utilities.Validation.isFQDN(text)) {
                    if (!text.startsWith("http")) {
                        window.open("http://" + text, "_self");
                    }
                    else {
                        window.open(text, "_self");
                    }
                    return;
                }
                window.open(this.homepage + encodeURIComponent(text), "_self");
            };
            return SearchInputHandler;
        }());
        Search.SearchInputHandler = SearchInputHandler;
    })(Search = QuickSearch.Search || (QuickSearch.Search = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var Search;
    (function (Search) {
        var SearchInput = (function () {
            function SearchInput(searchID) {
                this.inputHandler = new Search.SearchInputHandler("");
                this.keyCodes = QuickSearch.Utilities.KeyCodes;
                this.searchInput = $("#" + searchID);
                this.searchInput.keyup(this.keyPressed.bind(this));
            }
            SearchInput.prototype.keyPressed = function (ev) {
                var originalEvent = ev.originalEvent;
                var value = this.searchInput.val();
                switch (originalEvent.keyCode) {
                    case this.keyCodes.ENTER:
                        this.inputHandler.openSite(value.trim());
                        break;
                    default:
                        break;
                }
            };
            return SearchInput;
        }());
        Search.SearchInput = SearchInput;
    })(Search = QuickSearch.Search || (QuickSearch.Search = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var Main = (function () {
        function Main() {
        }
        Main.main = function () {
            var clock = new QuickSearch.Clock("main-clock");
            clock.initInterval();
            var search = new QuickSearch.Search.SearchInput("main-searchInput");
        };
        return Main;
    }());
    QuickSearch.Main = Main;
})(QuickSearch || (QuickSearch = {}));
QuickSearch.Main.main();

//# sourceMappingURL=index.js.map

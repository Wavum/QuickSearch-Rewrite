"use strict";
var QuickSearch;
(function (QuickSearch) {
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
    })(KeyCodes = QuickSearch.KeyCodes || (QuickSearch.KeyCodes = {}));
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
    var Search = (function () {
        function Search(searchID) {
            this.searchInput = $("#" + searchID);
            this.searchInput.keyup(this.keyPressed.bind(this));
        }
        Search.prototype.keyPressed = function (ev) {
            var originalEvent = ev.originalEvent;
            var value = this.searchInput.val();
            switch (originalEvent.keyCode) {
                case QuickSearch.KeyCodes.ENTER:
                    console.log("enter");
                    break;
                default:
                    break;
            }
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

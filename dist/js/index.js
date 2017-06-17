"use strict";
String.prototype.isEmpty = function isEmpty() {
    return (this.length === 0 || !this.trim());
};
String.prototype.format = function format(valuesParm) {
    var values = valuesParm;
    var formatted = this;
    if (values instanceof Array) {
        for (var i = 0; i < values.length; i++) {
            formatted = formatted.replaceAll("{" + i + "}", values[i]);
        }
    }
    else {
        formatted = formatted.replaceAll("{0}", values);
    }
    return formatted;
};
String.prototype.startsWith = function startsWith(value) {
    return this.lastIndexOf(value, 0) === 0;
};
String.prototype.startsWithAny = function startsWithAny(valuesParm) {
    var values = valuesParm;
    for (var i = 0; i < values.length; i++) {
        if (this.startsWith(values[i])) {
            return true;
        }
    }
    return false;
};
String.prototype.replaceAll = function replaceAll(searchValue, replaceValue) {
    var text = this;
    return text.split(searchValue).join(replaceValue);
};
String.prototype.upperFirstChar = function upperFirstChar() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
(function ($) {
    $.fn.clickOutside = function (callback) {
        $(document).mouseup(function (ev) {
            if (!this.is(ev.target) && this.has(ev.target).length === 0) {
                callback();
            }
        }.bind(this));
        return this;
    };
}(jQuery));
var QuickSearch;
(function (QuickSearch) {
    var Utilities;
    (function (Utilities) {
        var KeyCodes;
        (function (KeyCodes) {
            KeyCodes[KeyCodes["Backspace"] = 8] = "Backspace";
            KeyCodes[KeyCodes["Tab"] = 9] = "Tab";
            KeyCodes[KeyCodes["Enter"] = 13] = "Enter";
            KeyCodes[KeyCodes["Shift"] = 16] = "Shift";
            KeyCodes[KeyCodes["Ctrl"] = 17] = "Ctrl";
            KeyCodes[KeyCodes["Alt"] = 18] = "Alt";
            KeyCodes[KeyCodes["PauseBreak"] = 19] = "PauseBreak";
            KeyCodes[KeyCodes["Capslock"] = 20] = "Capslock";
            KeyCodes[KeyCodes["Escape"] = 27] = "Escape";
            KeyCodes[KeyCodes["PageUp"] = 33] = "PageUp";
            KeyCodes[KeyCodes["PageDown"] = 34] = "PageDown";
            KeyCodes[KeyCodes["End"] = 35] = "End";
            KeyCodes[KeyCodes["Home"] = 36] = "Home";
            KeyCodes[KeyCodes["LeftArrow"] = 37] = "LeftArrow";
            KeyCodes[KeyCodes["UpArrow"] = 38] = "UpArrow";
            KeyCodes[KeyCodes["RightArrow"] = 39] = "RightArrow";
            KeyCodes[KeyCodes["DownArrow"] = 40] = "DownArrow";
            KeyCodes[KeyCodes["Insert"] = 45] = "Insert";
            KeyCodes[KeyCodes["Delete"] = 46] = "Delete";
            KeyCodes[KeyCodes["Key0"] = 48] = "Key0";
            KeyCodes[KeyCodes["Key1"] = 49] = "Key1";
            KeyCodes[KeyCodes["Key2"] = 50] = "Key2";
            KeyCodes[KeyCodes["Key3"] = 51] = "Key3";
            KeyCodes[KeyCodes["Key4"] = 52] = "Key4";
            KeyCodes[KeyCodes["Key5"] = 53] = "Key5";
            KeyCodes[KeyCodes["Key6"] = 54] = "Key6";
            KeyCodes[KeyCodes["Key7"] = 55] = "Key7";
            KeyCodes[KeyCodes["Key8"] = 56] = "Key8";
            KeyCodes[KeyCodes["Key9"] = 57] = "Key9";
            KeyCodes[KeyCodes["KeyA"] = 65] = "KeyA";
            KeyCodes[KeyCodes["KeyB"] = 66] = "KeyB";
            KeyCodes[KeyCodes["KeyC"] = 67] = "KeyC";
            KeyCodes[KeyCodes["KeyD"] = 68] = "KeyD";
            KeyCodes[KeyCodes["KeyE"] = 69] = "KeyE";
            KeyCodes[KeyCodes["KeyF"] = 70] = "KeyF";
            KeyCodes[KeyCodes["KeyG"] = 71] = "KeyG";
            KeyCodes[KeyCodes["KeyH"] = 72] = "KeyH";
            KeyCodes[KeyCodes["KeyI"] = 73] = "KeyI";
            KeyCodes[KeyCodes["KeyJ"] = 74] = "KeyJ";
            KeyCodes[KeyCodes["KeyK"] = 75] = "KeyK";
            KeyCodes[KeyCodes["KeyL"] = 76] = "KeyL";
            KeyCodes[KeyCodes["KeyM"] = 77] = "KeyM";
            KeyCodes[KeyCodes["KeyN"] = 78] = "KeyN";
            KeyCodes[KeyCodes["KeyO"] = 79] = "KeyO";
            KeyCodes[KeyCodes["KeyP"] = 80] = "KeyP";
            KeyCodes[KeyCodes["KeyQ"] = 81] = "KeyQ";
            KeyCodes[KeyCodes["KeyR"] = 82] = "KeyR";
            KeyCodes[KeyCodes["KeyS"] = 83] = "KeyS";
            KeyCodes[KeyCodes["KeyT"] = 84] = "KeyT";
            KeyCodes[KeyCodes["KeyU"] = 85] = "KeyU";
            KeyCodes[KeyCodes["KeyV"] = 86] = "KeyV";
            KeyCodes[KeyCodes["KeyW"] = 87] = "KeyW";
            KeyCodes[KeyCodes["KeyX"] = 88] = "KeyX";
            KeyCodes[KeyCodes["KeyY"] = 89] = "KeyY";
            KeyCodes[KeyCodes["KeyZ"] = 90] = "KeyZ";
            KeyCodes[KeyCodes["LeftWindowKey"] = 91] = "LeftWindowKey";
            KeyCodes[KeyCodes["RightWindowKey"] = 92] = "RightWindowKey";
            KeyCodes[KeyCodes["SelectKey"] = 93] = "SelectKey";
            KeyCodes[KeyCodes["Numpad0"] = 96] = "Numpad0";
            KeyCodes[KeyCodes["Numpad1"] = 97] = "Numpad1";
            KeyCodes[KeyCodes["Numpad2"] = 98] = "Numpad2";
            KeyCodes[KeyCodes["Numpad3"] = 99] = "Numpad3";
            KeyCodes[KeyCodes["Numpad4"] = 100] = "Numpad4";
            KeyCodes[KeyCodes["Numpad5"] = 101] = "Numpad5";
            KeyCodes[KeyCodes["Numpad6"] = 102] = "Numpad6";
            KeyCodes[KeyCodes["Numpad7"] = 103] = "Numpad7";
            KeyCodes[KeyCodes["Numpad8"] = 104] = "Numpad8";
            KeyCodes[KeyCodes["Numpad9"] = 105] = "Numpad9";
            KeyCodes[KeyCodes["Multiply"] = 106] = "Multiply";
            KeyCodes[KeyCodes["Add"] = 107] = "Add";
            KeyCodes[KeyCodes["Subtract"] = 109] = "Subtract";
            KeyCodes[KeyCodes["DecimalPoint"] = 110] = "DecimalPoint";
            KeyCodes[KeyCodes["Divide"] = 111] = "Divide";
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
            KeyCodes[KeyCodes["NumLock"] = 144] = "NumLock";
            KeyCodes[KeyCodes["ScrollLock"] = 145] = "ScrollLock";
            KeyCodes[KeyCodes["Semicolon"] = 186] = "Semicolon";
            KeyCodes[KeyCodes["EqualSign"] = 187] = "EqualSign";
            KeyCodes[KeyCodes["Comma"] = 188] = "Comma";
            KeyCodes[KeyCodes["Dash"] = 189] = "Dash";
            KeyCodes[KeyCodes["Period"] = 190] = "Period";
            KeyCodes[KeyCodes["ForwardSlash"] = 191] = "ForwardSlash";
            KeyCodes[KeyCodes["GraveAccent"] = 192] = "GraveAccent";
            KeyCodes[KeyCodes["OpenBracket"] = 219] = "OpenBracket";
            KeyCodes[KeyCodes["BackSlash"] = 220] = "BackSlash";
            KeyCodes[KeyCodes["CloseBraket"] = 221] = "CloseBraket";
            KeyCodes[KeyCodes["SingleQuote"] = 222] = "SingleQuote";
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
            Validation.isIPAddress = function (ipAdress) {
                var regex = new RegExp(/^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\b([/:][-a-zA-Z0-9@:%_\+.~#?&//=]*)?$/gmi);
                return regex.test(ipAdress);
            };
            Validation.isHTTPAddress = function (value) {
                return this.isFQDN(value) || this.isIPAddress(value) || value.trim().toLowerCase() === "localhost";
            };
            return Validation;
        }());
        Utilities.Validation = Validation;
    })(Utilities = QuickSearch.Utilities || (QuickSearch.Utilities = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var QuickSearchKey;
    (function (QuickSearchKey) {
        var QuickSearches = (function () {
            function QuickSearches() {
                this.keys = new Array();
            }
            QuickSearches.prototype.addQuickSearch = function (key, site) {
                this.keys.push({ key: key, site: site });
            };
            QuickSearches.prototype.startsWithKey = function (text) {
                if (this.getKey(text) === "")
                    return false;
                return true;
            };
            QuickSearches.prototype.getKey = function (text) {
                var retKey = "";
                this.keys.forEach(function (key) {
                    if (text.startsWith(key.key + " ")) {
                        retKey = key.key;
                    }
                }.bind(this));
                return retKey;
            };
            QuickSearches.prototype.removeKey = function (text) {
                return text.replace(this.getKey(text) + " ", "");
            };
            Object.defineProperty(QuickSearches.prototype, "Keys", {
                get: function () {
                    return this.keys;
                },
                enumerable: true,
                configurable: true
            });
            return QuickSearches;
        }());
        QuickSearchKey.QuickSearches = QuickSearches;
    })(QuickSearchKey = QuickSearch.QuickSearchKey || (QuickSearch.QuickSearchKey = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var Data;
    (function (Data) {
        var GoogleData = (function () {
            function GoogleData() {
            }
            GoogleData.getSearchSuggestions = function (value, callback) {
                var id = "i" + Math.random().toString(36).slice(2);
                var executionTime = $.now();
                GoogleData.getSearchSuggestions[id] = function (data) {
                    data.executionTime = executionTime;
                    callback(data);
                    delete GoogleData.getSearchSuggestions[id];
                    var script = document.getElementById("searchSuggestionsQuery" + id);
                    if (script !== null)
                        script.remove();
                };
                var script = document.createElement("script");
                script.src = "http://suggestqueries.google.com/complete/search?client=chrome&q=" + encodeURIComponent(value) + "&callback=QuickSearch.Data.GoogleData.getSearchSuggestions." + id;
                script.id = "searchSuggestionsQuery" + id;
                document.head.appendChild(script);
            };
            return GoogleData;
        }());
        Data.GoogleData = GoogleData;
    })(Data = QuickSearch.Data || (QuickSearch.Data = {}));
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
            this.quickSearches = new QuickSearch.QuickSearchKey.QuickSearches();
            this.quickSearches.addQuickSearch("d", "https://start.duckduckgo.com/?q={0}");
            this.quickSearches.addQuickSearch("s", "https://startpage.com/do/search?query={0}");
            this.quickSearches.addQuickSearch("g", "https://encrypted.google.com/#q={0}");
            this.quickSearches.addQuickSearch("y", "https://youtube.com/results?search_query={0}");
            this.quickSearches.addQuickSearch("r", "https://reddit.com/search?q={0}");
            this.quickSearches.addQuickSearch("sr", "https://reddit.com/r/{0}");
            this.quickSearches.addQuickSearch("sx", "https://stackexchange.com/search?q={0}");
            this.quickSearches.addQuickSearch("so", "https://stackoverflow.com/search?q={0}");
            this.quickSearches.addQuickSearch("gh", "https://github.com/search?q={0}");
            this.quickSearches.addQuickSearch("f", "https://www.facebook.com/public?query={0}");
            this.quickSearches.addQuickSearch("dict", "http://www.dict.cc/?s={0}");
        }
        Config.prototype.getJSON = function () {
            return JSON.stringify(this);
        };
        Config.prototype.parseJSON = function (json) {
            var parsedConfig = JSON.parse(json);
            this.useSearchSuggestions = parsedConfig.UseSearchSuggestions;
            this.numberOfSearchSuggestions = parsedConfig.NumberOfSearchSuggestions;
            this.homepage = parsedConfig.Homepage;
            this.quickSearchPattern = parsedConfig.QuickSearchPattern;
            this.clockSeperator = parsedConfig.ClockSeperator;
            this.shapeColor = parsedConfig.ShapeColor;
            this.quickSearches = parsedConfig.QuickSearches;
        };
        Object.defineProperty(Config.prototype, "UseSearchSuggestions", {
            get: function () {
                return this.useSearchSuggestions;
            },
            set: function (value) {
                this.useSearchSuggestions = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "NumberOfSearchSuggestions", {
            get: function () {
                return this.numberOfSearchSuggestions;
            },
            set: function (value) {
                this.numberOfSearchSuggestions = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "Homepage", {
            get: function () {
                return this.homepage;
            },
            set: function (value) {
                this.homepage = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "QuickSearchPattern", {
            get: function () {
                return this.quickSearchPattern;
            },
            set: function (value) {
                this.quickSearchPattern = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "ClockSeperator", {
            get: function () {
                return this.clockSeperator;
            },
            set: function (value) {
                this.clockSeperator = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "ShapeColor", {
            get: function () {
                return this.shapeColor;
            },
            set: function (value) {
                this.shapeColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "QuickSearches", {
            get: function () {
                return this.quickSearches;
            },
            set: function (value) {
                this.quickSearches = value;
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
    var ClockTime;
    (function (ClockTime) {
        var Clock = (function () {
            function Clock(clockID) {
                this.separator = ":";
                this.clock = $("#" + clockID);
            }
            Clock.prototype.initInterval = function (timeout) {
                if (timeout === void 0) { timeout = 10000; }
                this.updateTime();
                setInterval(this.updateTime.bind(this), timeout);
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
        ClockTime.Clock = Clock;
    })(ClockTime = QuickSearch.ClockTime || (QuickSearch.ClockTime = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var SearchInput;
    (function (SearchInput) {
        var Homepage = (function () {
            function Homepage(homepage) {
                this.homepage = homepage;
            }
            Homepage.prototype.openSite = function (value) {
                if (value === void 0) { value = ""; }
                if (QuickSearch.Utilities.Validation.isHTTPAddress(value)) {
                    if (!value.startsWith("http")) {
                        window.open("http://" + value, "_self");
                    }
                    else {
                        window.open(value, "_self");
                    }
                    return;
                }
                window.open(this.homepage.format(encodeURIComponent(value)), "_self");
            };
            return Homepage;
        }());
        SearchInput.Homepage = Homepage;
    })(SearchInput = QuickSearch.SearchInput || (QuickSearch.SearchInput = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var SearchInput;
    (function (SearchInput) {
        var QuickKey = (function () {
            function QuickKey(parentID) {
                this.quickKeyDiv = $("#" + parentID);
                this.quickKeyText = $("#" + parentID + " div.text");
                this.quickKeyCloseButton = $("#" + parentID + " button.close");
                this.quickKeyCloseButton.click(this.hideQuickKey.bind(this));
            }
            QuickKey.prototype.initConfig = function (config) {
                this.QuickSearches = config.QuickSearches;
            };
            QuickKey.prototype.showQuickKey = function (text) {
                if (!this.quickSearches.startsWithKey(text))
                    return text;
                this.show(this.quickSearches.getKey(text));
                return this.quickSearches.removeKey(text);
            };
            QuickKey.prototype.hideQuickKey = function () {
                this.quickKeyDiv.css("display", "none");
                this.quickKeyText.text("");
            };
            Object.defineProperty(QuickKey.prototype, "QuickSearches", {
                get: function () {
                    return this.quickSearches;
                },
                set: function (value) {
                    this.quickSearches = value;
                },
                enumerable: true,
                configurable: true
            });
            QuickKey.prototype.show = function (text) {
                if (text === void 0) { text = ""; }
                this.quickKeyDiv.css("display", "flex");
                this.quickKeyText.text(text);
            };
            return QuickKey;
        }());
        SearchInput.QuickKey = QuickKey;
    })(SearchInput = QuickSearch.SearchInput || (QuickSearch.SearchInput = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var SearchInput;
    (function (SearchInput) {
        var SearchSuggestions = (function () {
            function SearchSuggestions(parentID) {
                this.backgroundColor = "#757575";
                this.backgroundColorFocus = "#3a5b83";
                this.fontColor = "#000000";
                this.fontColorFocus = "#FFFFFF";
                this.selectedSuggestion = null;
                this.maxResults = 4;
                this.searchSuggestionsDiv = $("#" + parentID);
                this.searchSuggestionsDiv.mouseout(this.resetSelectedSuggestion.bind(this));
                this.searchSuggestionsDiv.clickOutside(this.hideSuggestions.bind(this));
            }
            SearchSuggestions.prototype.showSuggestions = function (text) {
                this.inputValue = text;
                this.resetSelectedSuggestion();
                if (!text.isEmpty()) {
                    QuickSearch.Data.GoogleData.getSearchSuggestions(text, function (data) {
                        if (this.currentSearchSuggestionsData === undefined) {
                            this.currentSearchSuggestionsData = data;
                        }
                        if (this.currentSearchSuggestionsData.executionTime <= data.executionTime && !this.inputValue.isEmpty()) {
                            this.currentSearchSuggestionsData = data;
                            this.createSearchSuggestions(data[1]);
                        }
                    }.bind(this));
                }
                else {
                    this.hideSuggestions();
                }
            };
            SearchSuggestions.prototype.hideSuggestions = function () {
                this.searchSuggestionsDiv.html("");
            };
            SearchSuggestions.prototype.selectDownwards = function () {
                var searchSuggestionButtons = this.searchSuggestionsDiv.children();
                if (searchSuggestionButtons.length !== 0) {
                    if (this.selectedSuggestion === null) {
                        this.selectedSuggestion = 0;
                    }
                    else {
                        var searchSuggestionButton_1 = searchSuggestionButtons[this.selectedSuggestion];
                        searchSuggestionButton_1.style.background = this.backgroundColor;
                        searchSuggestionButton_1.style.color = this.fontColor;
                        this.selectedSuggestion++;
                        if (this.selectedSuggestion > searchSuggestionButtons.length - 1) {
                            this.selectedSuggestion = null;
                            return this.inputValue;
                        }
                    }
                    var searchSuggestionButton = searchSuggestionButtons[this.selectedSuggestion];
                    searchSuggestionButton.style.background = this.backgroundColorFocus;
                    searchSuggestionButton.style.color = this.fontColorFocus;
                    return searchSuggestionButton.value;
                }
                else if (this.inputValue === undefined) {
                    return "";
                }
                else {
                    return this.inputValue;
                }
            };
            SearchSuggestions.prototype.selectUpwards = function () {
                var searchSuggestionButtons = this.searchSuggestionsDiv.children();
                if (searchSuggestionButtons.length != 0) {
                    if (this.selectedSuggestion === null) {
                        this.selectedSuggestion = searchSuggestionButtons.length - 1;
                    }
                    else {
                        var searchSuggestionButton_2 = searchSuggestionButtons[this.selectedSuggestion];
                        searchSuggestionButton_2.style.background = this.backgroundColor;
                        searchSuggestionButton_2.style.color = this.fontColor;
                        this.selectedSuggestion--;
                        if (this.selectedSuggestion < 0) {
                            this.selectedSuggestion = null;
                            return this.inputValue;
                        }
                    }
                    var searchSuggestionButton = searchSuggestionButtons[this.selectedSuggestion];
                    searchSuggestionButton.style.background = this.backgroundColorFocus;
                    searchSuggestionButton.style.color = this.fontColorFocus;
                    return searchSuggestionButton.value;
                }
                else if (this.inputValue === null) {
                    return "";
                }
                else {
                    return this.inputValue;
                }
            };
            Object.defineProperty(SearchSuggestions.prototype, "onclick", {
                set: function (callback) {
                    this.onClickCallback = callback;
                },
                enumerable: true,
                configurable: true
            });
            SearchSuggestions.prototype.selectMouseOver = function (ev) {
                var searchSuggestionButtons = this.searchSuggestionsDiv.children();
                if (this.selectedSuggestion !== null) {
                    var searchSuggestionButton = searchSuggestionButtons[this.selectedSuggestion];
                    searchSuggestionButton.style.background = this.backgroundColor;
                    searchSuggestionButton.style.color = this.fontColor;
                }
                for (var i = 0; i < searchSuggestionButtons.length; i++) {
                    var searchSuggestionButton = searchSuggestionButtons[i];
                    if (searchSuggestionButton.value === ev.target.value) {
                        this.selectedSuggestion = i;
                    }
                }
                if (this.selectedSuggestion !== null) {
                    var searchSuggestionButton = searchSuggestionButtons[this.selectedSuggestion];
                    searchSuggestionButton.style.background = this.backgroundColorFocus;
                    searchSuggestionButton.style.color = this.fontColorFocus;
                    return searchSuggestionButton.value;
                }
                return "";
            };
            SearchSuggestions.prototype.resetSelectedSuggestion = function () {
                if (this.selectedSuggestion !== null) {
                    var searchSuggestionButtons = this.searchSuggestionsDiv.children();
                    if (searchSuggestionButtons !== undefined && this.selectedSuggestion <= searchSuggestionButtons.length - 1) {
                        searchSuggestionButtons.css("background-color", this.backgroundColor);
                        searchSuggestionButtons.css("color", this.fontColor);
                    }
                    this.selectedSuggestion = null;
                }
            };
            SearchSuggestions.prototype.createSearchSuggestions = function (data) {
                if (data !== null) {
                    var results = data;
                    this.searchSuggestionsDiv.html("");
                    if (results !== null) {
                        if (this.maxResults > results.length) {
                            this.maxResults = results.length;
                        }
                        for (var i = 0; i < this.maxResults; i++) {
                            this.searchSuggestionsDiv.append(this.createSearchSuggestion(results[i]));
                        }
                    }
                    else {
                        this.searchSuggestionsDiv.html("");
                    }
                }
                else {
                    this.searchSuggestionsDiv.html("");
                }
            };
            SearchSuggestions.prototype.createSearchSuggestion = function (value) {
                var searchSuggestionButton = document.createElement("input");
                searchSuggestionButton.type = "button";
                searchSuggestionButton.value = value;
                searchSuggestionButton.style.backgroundColor = this.backgroundColor;
                searchSuggestionButton.style.color = this.fontColor;
                searchSuggestionButton.onmouseover = this.selectMouseOver.bind(this);
                searchSuggestionButton.onclick = this.onClickCallback;
                return searchSuggestionButton;
            };
            return SearchSuggestions;
        }());
        SearchInput.SearchSuggestions = SearchSuggestions;
    })(SearchInput = QuickSearch.SearchInput || (QuickSearch.SearchInput = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var SearchInput;
    (function (SearchInput) {
        var Search = (function () {
            function Search(searchID) {
                this.quickKey = new SearchInput.QuickKey("main-quickKey");
                this.searchSuggestions = new SearchInput.SearchSuggestions("main-searchSuggestions");
                this.homepage = new SearchInput.Homepage("https://start.duckduckgo.com/?q={0}");
                this.keyCodes = QuickSearch.Utilities.KeyCodes;
                this.searchInput = $("#" + searchID);
                this.searchInput.keyup(this.keyUp.bind(this));
                this.searchInput.keydown(this.keyDown.bind(this));
                this.searchSuggestions.onclick = this.searchSuggestionClicked.bind(this);
                this.quickKey.initConfig(new QuickSearch.Config());
            }
            Search.prototype.keyDown = function (ev) {
                var originalEvent = ev.originalEvent;
                var value = this.searchInput.val();
                switch (originalEvent.keyCode) {
                    case this.keyCodes.Backspace:
                        if (value.isEmpty())
                            this.quickKey.hideQuickKey();
                        break;
                    default:
                        break;
                }
                this.searchInput.focus();
                this.searchInput.val(value);
            };
            Search.prototype.keyUp = function (ev) {
                var originalEvent = ev.originalEvent;
                var value = this.searchInput.val();
                switch (originalEvent.keyCode) {
                    case this.keyCodes.Enter:
                        this.homepage.openSite(value);
                        break;
                    case this.keyCodes.PageUp:
                    case this.keyCodes.UpArrow:
                        value = this.searchSuggestions.selectUpwards();
                        break;
                    case this.keyCodes.PageUp:
                    case this.keyCodes.DownArrow:
                        value = this.searchSuggestions.selectDownwards();
                        break;
                    case this.keyCodes.Escape:
                        this.searchSuggestions.hideSuggestions();
                        break;
                    default:
                        value = this.quickKey.showQuickKey(value);
                        this.searchSuggestions.showSuggestions(value);
                        break;
                }
                this.searchInput.focus();
                this.searchInput.val(value);
            };
            Search.prototype.searchSuggestionClicked = function (ev) {
                this.searchInput.val(ev.target.value);
                this.searchInput.focus();
                this.searchSuggestions.showSuggestions(this.searchInput.val());
            };
            return Search;
        }());
        SearchInput.Search = Search;
    })(SearchInput = QuickSearch.SearchInput || (QuickSearch.SearchInput = {}));
})(QuickSearch || (QuickSearch = {}));
var QuickSearch;
(function (QuickSearch) {
    var Main = (function () {
        function Main() {
        }
        Main.main = function () {
            var clock = new QuickSearch.ClockTime.Clock("main-clock");
            clock.initInterval();
            var search = new QuickSearch.SearchInput.Search("main-searchInput");
        };
        return Main;
    }());
    QuickSearch.Main = Main;
})(QuickSearch || (QuickSearch = {}));
QuickSearch.Main.main();

//# sourceMappingURL=index.js.map

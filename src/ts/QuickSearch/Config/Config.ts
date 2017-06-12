namespace QuickSearch
{
    export class Config
    {
        // http://jeremydorn.com/json-editor/?schema=N4IgLglmA2CmIC4QGED2A7AZhA5iANOAJ4AO8SqARgFawDGYBIJATqmS5LAM6KgAWqALawSAQxzlQYUuRDcwLCOjyFIMOQAlhoifAC+hAK7dYAZVhiWdfmaM5JCiBl4JpsxCEqpUcMeiZ1OE8AVVMAAgsrG0j7R0gXEEMQdCMhSlgWAHlMKOtbOJ4E9Fd3Mk9U9MzAqGCkADk0jJZwnMjLfNiHIucSpiFlCCE0xABGZIBHIwg6AGs8mwAFMTAwTIC3YnKkBSUVGo1PAEVpuYX+cOXV9aTCKZn5jpsePi25KxYxIgO6kBOH84vQiYVAsIQrTxgMSUYKEKCwISlN6eKi0BhMVjsTJcJGzWDfTYybbyRTKPDJbjw15EuS7MlJfSMwh0aCoM6iTIrUHUjw7Un7NS1OTIVlzdocLksW7yfhiMhoVlSwm8kl7VTgIWeMyysjhBXc4Gg8GMJB0Xzcxn6IAA&value=N4IgFg9gtgpgDgQwOYxALnAF03AzmgegN0wQCdMA6AEwFcBjAazqaQkvugIH4BHAXmAAGAL4gANCFq4YAZRjl6YWbSQoSASwgA7XOkxlaMSdtpQARjDIB5AGbzFy1esxbd6ACyTetDUwdkSgAKCNhW2uggwiIABBIgPn6MAUowemgA2qCMMACekdTxuBqYqBhg2HiExKQUNAzMDWwcXHyCoiAi4tl5kXqSxaWRFTj4RCTkOMgwLVAE1BDECoFgfEZkue1iXT35GEhFJWVYo9Uw2vQbcKXUlGwQSAA2M5xzAMQC0Z3dIDl7IPkBkdhpUxgRchBaJhaJZZgQyGlaI9MLhuDJHAB9HxWTZfHa/XoYMiHIblUHVBHUaglOHolZtPE/P59YlA0knKpESnUqiveEERm7PoADxJxxGnJqCCYMGFSgQ2hQtOWSgZHXxzIwuAgYpBp3GpCYEAAblZbI8IAB3ZWONXbJmEkBIMC6sn6ghIEpgGE2+mfdUO/62V0csGW8OUWzSmDmCAQRhwuAwx5+NY4rbfIUYan0TAhiXVcPWnO8+g8XAZkQAXUk9At/ngVlCEGJGAwAzACDgMAAwhALa2QG8AMwIACs5gAHMPOkAAAA==&theme=bootstrap3&iconlib=fontawesome4&object_layout=normal&show_errors=interaction
        private useSearchSuggestions: boolean = true;
        private numberOfSearchSuggestions: number = 4;
        private homepage: string = "https://start.duckduckgo.com/?q={0}";
        private quickSearchPattern: string = "{0} ";
        private clockSeperator: string = ":";
        private shapeColor: string = "#3a5b83";
        private quickSearches: QuickSearchKey.QuickSearches = new QuickSearchKey.QuickSearches();



        public constructor()
        {
            this.quickSearches.addSearch("d", "https://start.duckduckgo.com/?q={0}");
            this.quickSearches.addSearch("s", "https://startpage.com/do/search?query={0}");
            this.quickSearches.addSearch("g", "https://encrypted.google.com/#q={0}");
            this.quickSearches.addSearch("y", "https://youtube.com/results?search_query={0}");
            this.quickSearches.addSearch("r", "https://reddit.com/search?q={0}");
            this.quickSearches.addSearch("sr", "https://reddit.com/r/{0}");
            this.quickSearches.addSearch("sx", "https://stackexchange.com/search?q={0}");
            this.quickSearches.addSearch("so", "https://stackoverflow.com/search?q={0}");
            this.quickSearches.addSearch("gh", "https://github.com/search?q={0}");
            this.quickSearches.addSearch("f", "https://www.facebook.com/public?query={0}");
            this.quickSearches.addSearch("dict", "http://www.dict.cc/?s={0}");
        }



        /**
         * Parses a JSON text to fill up the values in this object
         * @param json JSON text to parse
         */
        public parseJSON(json: string): void
        {
            let parsedConfig: Config = <Config>JSON.parse(json);

            this.useSearchSuggestions = parsedConfig.UseSearchSuggestions;
            this.numberOfSearchSuggestions = parsedConfig.NumberOfSearchSuggestions;
            this.homepage = parsedConfig.Homepage;
            this.quickSearchPattern = parsedConfig.QuickSearchPattern;
            this.clockSeperator = parsedConfig.ClockSeperator;
            this.shapeColor = parsedConfig.ShapeColor;
            this.quickSearches = parsedConfig.QuickSearches;
        }



        public get UseSearchSuggestions(): boolean
        {
            return this.useSearchSuggestions;
        }

        public get NumberOfSearchSuggestions(): number
        {
            return this.numberOfSearchSuggestions;
        }

        public get Homepage(): string
        {
            return this.homepage;
        }

        public get QuickSearchPattern(): string
        {
            return this.quickSearchPattern;
        }

        public get ClockSeperator(): string
        {
            return this.clockSeperator;
        }

        public get ShapeColor(): string
        {
            return this.shapeColor;
        }

        public get QuickSearches(): QuickSearchKey.QuickSearches
        {
            return this.quickSearches;
        }
    }
}
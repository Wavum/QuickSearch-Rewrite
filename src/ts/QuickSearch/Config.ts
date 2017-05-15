namespace QuickSearch
{
    interface IQuickSearches
    {
        key: string;
        site: string;
    }

    export class Config
    {
        // http://jeremydorn.com/json-editor/?schema=N4IgLglmA2CmIC4QGED2A7AZhA5iANOAJ4AO8SqARgFawDGYBIJATqmS5LAM6KgAWqALawSAQxzlQYUuRDcwLCOjyFIMOQAlhoifAC+hAK7dYAZVhiWdfmaM5JCiBl4JpsxCEqpUcMeiZ1OE8AVVMAAgsrG0j7R0gXEEMQdCMhSlgWAHlMKOtbOJ4E9Fd3Mk9U9MzAqGCkADk0jJZwnMjLfNiHIucSpiFlCCE0xABGZIBHIwg6AGs8mwAFMTAwTIC3YnKkBSUVGo1PAEVpuYX+cOXV9aTCKZn5jpsePi25KxYxIgO6kBOH84vQiYVAsIQrTxgMSUYKEKCwISlN6eKi0BhMVjsTJcJGzWDfTYybbyRTKPDJbjw15EuS7MlJfSMwh0aCoM6iTIrUHUjw7Un7NS1OTIVlzdocLksW7yfhiMhoVlSwm8kl7VTgIWeMyysjhBXc4Gg8GMJB0Xzcxn6IAA&value=N4IgFg9gtgpgDgQwOYxALnAF03AzmgegN0wQCdMA6AEwFcBjAazqaQkvugIH4BHAXmAAGAL4gANCFq4YAZRjl6YWbSQoSASwgA7XOkxlaMSdtpQARjDIB5AGbzFy1esxbd6ACyTetDUwdkSgAKCNhW2uggwiIABBIgPn6MAUowemgA2qCMMACekdTxuBqYqBhg2HiExKQUNAzMDWwcXHyCoiAi4tl5kXqSxaWRFTj4RCTkOMgwLVAE1BDECoFgfEZkue1iXT35GEhFJWVYo9Uw2vQbcKXUlGwQSAA2M5xzAMQC0Z3dIDl7IPkBkdhpUxgRchBaJhaJZZgQyGlaI9MLhuDJHAB9HxWTZfHa/XoYMiHIblUHVBHUaglOHolZtPE/P59YlA0knKpESnUqiveEERm7PoADxJxxGnJqCCYMGFSgQ2hQtOWSgZHXxzIwuAgYpBp3GpCYEAAblZbI8IAB3ZWONXbJmEkBIMC6sn6ghIEpgGE2+mfdUO/62V0csGW8OUWzSmDmCAQRhwuAwx5+NY4rbfIUYan0TAhiXVcPWnO8+g8XAZkQAXUk9At/ngVlCEGJGAwAzACDgMAAwhALa2QG8AMwIACs5gAHMPOkAAAA==&theme=bootstrap3&iconlib=fontawesome4&object_layout=normal&show_errors=interaction
        private useSearchSuggestions: boolean = true;
        private numberOfSearchSuggestions: number = 4;
        private homepage: string = "https://start.duckduckgo.com/?q={0}";
        private quickSearchPattern: string = "{0} ";
        private clockSeperator: string = ":";
        private shapeColor: string = "#3a5b83";
        private quickSearches: IQuickSearches[] = [{key: "d", site: "https://start.duckduckgo.com/?q={0}"},
                                                   {key: "s", site: "https://startpage.com/do/search?query={0}"},
                                                   {key: "g", site: "https://encrypted.google.com/#q={0}"},
                                                   {key: "y", site: "https://youtube.com/results?search_query={0}"},
                                                   {key: "r", site: "https://reddit.com/search?q={0}"},
                                                   {key: "sr", site: "https://reddit.com/r/{0}"},
                                                   {key: "sx", site: "https://stackexchange.com/search?q={0}"},
                                                   {key: "so", site: "https://stackoverflow.com/search?q={0}"},
                                                   {key: "gh", site: "https://github.com/search?q={0}"},
                                                   {key: "f", site: "https://www.facebook.com/public?query={0}"},
                                                   {key: "dict", site: "http://www.dict.cc/?s={0}"}];



        public constructor()
        {

        }



        public parseJSON(json: string): void
        {
            let parsedConfig: any = JSON.parse(json);

            this.useSearchSuggestions = parsedConfig.useSearchSuggestions;
            this.numberOfSearchSuggestions = parsedConfig.numberOfSearchSuggestions;
            this.homepage = parsedConfig.homepage;
            this.quickSearchPattern = parsedConfig.quickSearchPattern;
            this.clockSeperator = parsedConfig.clockSeperator;
            this.shapeColor = parsedConfig.shapeColor;
            this.quickSearches = parsedConfig.quickSearches;
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

        public get QuickSearches(): IQuickSearches[]
        {
            return this.quickSearches;
        }
    }
}
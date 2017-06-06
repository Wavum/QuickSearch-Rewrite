namespace QuickSearch.SearchInput
{
    export class SearchSuggestions
    {
        private searchSuggestionsDiv: JQuery;
        private currentSearchSuggestionsData: any;
        private inputValue: string;
        private backgroundColor: string = "#757575";
        private backgroundColorFocus: string = "#3a5b83";
        private fontColor: string = "#000000";
        private fontColorFocus: string = "#FFFFFF";
        private selectedSuggestion: number | null = null;
        private maxResults: number = 4;



        public constructor(parentID: string)
        {
            this.searchSuggestionsDiv = $("#" + parentID);

            this.searchSuggestionsDiv.mouseout(this.resetSelectedSuggestion.bind(this));
            this.searchSuggestionsDiv.clickOutside(this.hideSearchSuggestions.bind(this));
        }



        public showSuggestions(text: string): void
        {
            this.inputValue = text;

            this.resetSelectedSuggestion();

            if (!text.isEmpty())
            {
                Data.GoogleData.getSearchSuggestions(text, function(data: any)
                {
                    if (this.currentSearchSuggestionsData === null)
                    {
                        this.currentSearchSuggestionsData = data;
                    }

                    if (this.currentSearchSuggestionsData.executionTime <= data.executionTime && !this.inputValue.isEmpty())
                    {
                        this.currentSearchSuggestionsData = data;

                        this.createSearchSuggestions(data[1]);
                    }
                }.bind(this));
            }
            else
            {
                this.hideSearchSuggestions();
            }
        }

        public hideSearchSuggestions(): void
        {

        }



        private resetSelectedSuggestion(): void
        {
            if (this.selectedSuggestion !== null)
            {
                let searchSuggestionButtons: JQuery = this.searchSuggestionsDiv.children();

                if (searchSuggestionButtons !== undefined && this.selectedSuggestion <= searchSuggestionButtons.length - 1)
                {
                    searchSuggestionButtons.css("background-color", this.backgroundColor);
                    searchSuggestionButtons.css("color", this.fontColor);
                }

                this.selectedSuggestion = null;
            }
        }

        private createSearchSuggestions(data: Data.GoogleDataSearchSuggestionsResult): void
        {
            //Check for no result
            if (data !== null)
            {
                let results: Data.GoogleDataSearchSuggestionsResult = data;

                this.searchSuggestionsDiv.innerHTML = "";

                if (results !== null)
                {
                    //Set max results
                    if (this.maxResults > results.length)
                    {
                        this.maxResults = results.length;
                    }

                    for (let i: number = 0; i < this.maxResults; i++)
                    {
                        this.searchSuggestionsDiv.appendChild(this.createSearchSuggestion(results[i]));
                    }
                }
                else
                {
                    this.searchSuggestionsDiv.innerHTML = "";
                }
            }
            else
            {
                this.searchSuggestionsDiv.innerHTML = "";
            }
        }
    }
}
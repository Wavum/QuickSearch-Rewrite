namespace QuickSearch.SearchInput
{
    export class SearchSuggestions
    {
        private searchSuggestionsDiv: JQuery;
        private currentSearchSuggestionsData: Data.GoogleDataSearchSuggestionsResult;
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
                Data.GoogleData.getSearchSuggestions(text, function(data: Data.GoogleDataSearchSuggestionsResult)
                {
                    if (this.currentSearchSuggestionsData === undefined)
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
            this.searchSuggestionsDiv.html("");
        }



        private selectMouseOver(ev: MouseEvent): string
        {
            let searchSuggestionButtons: JQuery = this.searchSuggestionsDiv.children();

            if (this.selectedSuggestion !== null)
            {
                let searchSuggestionButton: HTMLButtonElement = <HTMLButtonElement>searchSuggestionButtons[this.selectedSuggestion];

                searchSuggestionButton.style.background = this.backgroundColor;
                searchSuggestionButton.style.color = this.fontColor;
            }

            for (var i = 0; i < searchSuggestionButtons.length; i++)
            {
                let searchSuggestionButton: HTMLButtonElement = <HTMLButtonElement>searchSuggestionButtons[i];

                if (searchSuggestionButton.value === (<HTMLInputElement>ev.target).value)
                {
                    this.selectedSuggestion = i;
                }
            }

            if (this.selectedSuggestion !== null)
            {
                let searchSuggestionButton: HTMLButtonElement = <HTMLButtonElement>searchSuggestionButtons[this.selectedSuggestion];

                searchSuggestionButton.style.background = this.backgroundColorFocus;
                searchSuggestionButton.style.color = this.fontColorFocus;

                return searchSuggestionButton.value;
            }

            return "";
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

        private createSearchSuggestions(data: Array<string>): void
        {
            //Check for no result
            if (data !== null)
            {
                let results: Array<string> = data;

                this.searchSuggestionsDiv.html("");

                if (results !== null)
                {
                    //Set max results
                    if (this.maxResults > results.length)
                    {
                        this.maxResults = results.length;
                    }

                    for (let i: number = 0; i < this.maxResults; i++)
                    {
                        this.searchSuggestionsDiv.append(this.createSearchSuggestion(results[i]));
                    }
                }
                else
                {
                    this.searchSuggestionsDiv.html("");
                }
            }
            else
            {
                this.searchSuggestionsDiv.html("");
            }
        }

        private createSearchSuggestion(value: string): HTMLInputElement
        {
            let searchSuggestionButton: HTMLInputElement = document.createElement("input");

            searchSuggestionButton.type = "button";
            searchSuggestionButton.value = value;
            searchSuggestionButton.style.backgroundColor = this.backgroundColor;
            searchSuggestionButton.style.color = this.fontColor;
            searchSuggestionButton.onmouseover = this.selectMouseOver.bind(this);
            searchSuggestionButton.onclick = this.mouseClicked.bind(this);

            return searchSuggestionButton;
        }

        private mouseClicked(ev: MouseEvent): void
        {
            //this.onSuggestionClick.fire(ev.target);
        }
    }
}
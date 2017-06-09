namespace QuickSearch.SearchInput
{
    export class SearchSuggestions
    {
        private searchSuggestionsDiv: JQuery;
        private currentSearchSuggestionsData: Data.GoogleDataSearchSuggestionsResult;
        private onClickCallback: (ev: MouseEvent) => any;
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
            this.searchSuggestionsDiv.clickOutside(this.hideSuggestions.bind(this));
        }



        /**
         * Show search suggestions
         * @param text Text for search suggestions
         */
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
                this.hideSuggestions();
            }
        }

        /**
         * Hide search suggestions
         */
        public hideSuggestions(): void
        {
            this.searchSuggestionsDiv.html("");
        }

        /**
         * Selecets a suggestions downwards
         */
        public selectDownwards(): string
        {
            let searchSuggestionButtons: JQuery = this.searchSuggestionsDiv.children();

            if (searchSuggestionButtons.length !== 0)
            {
                if (this.selectedSuggestion === null)
                {
                    this.selectedSuggestion = 0;
                }
                else
                {
                    let searchSuggestionButton: HTMLButtonElement = <HTMLButtonElement>searchSuggestionButtons[this.selectedSuggestion];

                    searchSuggestionButton.style.background = this.backgroundColor;
                    searchSuggestionButton.style.color = this.fontColor;
                    this.selectedSuggestion++;

                    if (this.selectedSuggestion > searchSuggestionButtons.length - 1)
                    {
                        this.selectedSuggestion = null;

                        return this.inputValue;
                    }
                }

                let searchSuggestionButton: HTMLButtonElement = <HTMLButtonElement>searchSuggestionButtons[this.selectedSuggestion];

                searchSuggestionButton.style.background = this.backgroundColorFocus;
                searchSuggestionButton.style.color = this.fontColorFocus;

                return searchSuggestionButton.value;
            }
            else if (this.inputValue === undefined)
            {
                return "";
            }
            else
            {
                return this.inputValue;
            }
        }

        /**
         * Selecets a suggestions upwards
         */
        public selectUpwards(): string
        {
            let searchSuggestionButtons: JQuery = this.searchSuggestionsDiv.children();

            if (searchSuggestionButtons.length != 0)
            {
                if (this.selectedSuggestion === null)
                {
                    this.selectedSuggestion = searchSuggestionButtons.length - 1;
                }
                else
                {
                    let searchSuggestionButton: HTMLButtonElement = <HTMLButtonElement>searchSuggestionButtons[this.selectedSuggestion];

                    searchSuggestionButton.style.background = this.backgroundColor;
                    searchSuggestionButton.style.color = this.fontColor;
                    this.selectedSuggestion--;

                    if (this.selectedSuggestion < 0)
                    {
                        this.selectedSuggestion = null;

                        return this.inputValue;
                    }
                }

                let searchSuggestionButton: HTMLButtonElement = <HTMLButtonElement>searchSuggestionButtons[this.selectedSuggestion];

                searchSuggestionButton.style.background = this.backgroundColorFocus;
                searchSuggestionButton.style.color = this.fontColorFocus;

                return searchSuggestionButton.value;
            }
            else if (this.inputValue === null)
            {
                return "";
            }
            else
            {
                return this.inputValue;
            }
        }

        /**
         * Sets a callback when a suggestions will be clicked
         */
        public set onclick(callback: (ev: MouseEvent) => any)
        {
            this.onClickCallback = callback;
        }



        /**
         * Changes the suggestions when the mouse hovers over it
         * @param ev Event parameter
         */
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

        /**
         * Resets the selected suggestions to it's normal state
         */
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

        /**
         * Creats the suggestions
         * @param data String-Array with suggestions
         */
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

        /**
         * Creates a single search suggestion
         * @param value Value for the suggestion
         */
        private createSearchSuggestion(value: string): HTMLInputElement
        {
            let searchSuggestionButton: HTMLInputElement = document.createElement("input");

            searchSuggestionButton.type = "button";
            searchSuggestionButton.value = value;
            searchSuggestionButton.style.backgroundColor = this.backgroundColor;
            searchSuggestionButton.style.color = this.fontColor;
            searchSuggestionButton.onmouseover = this.selectMouseOver.bind(this);
            searchSuggestionButton.onclick = this.onClickCallback;

            return searchSuggestionButton;
        }
    }
}
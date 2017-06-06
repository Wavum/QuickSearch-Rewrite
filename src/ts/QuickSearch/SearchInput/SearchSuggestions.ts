namespace QuickSearch.SearchInput
{
    export class SearchSuggestions
    {
        private parentDiv: JQuery;
        private searchSuggestionsDiv: JQuery = jQuery("<div>");
        private currentSearchSuggestionsData: any;
        private inputValue: string;
        private maxResults: number = 4;



        public constructor(parentID: string)
        {
            this.parentDiv = $("#" + parentID);

            this.searchSuggestionsDiv.className = "searchSuggestionsDiv";
            this.searchSuggestionsDiv.onmouseout = this.resetSelectedButton.bind(this);

            this.parentDiv.add(this.searchSuggestionsDiv);

            document.onClickOutside(this.searchSuggestionsDiv, this.hideSearchSuggestions.bind(this));
        }



        public showSuggestions(text: string): void
        {
            this.inputValue = text;

            this.resetSelectedButton();

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



        private resetSelectedButton(): void
        {
            if (this.selectedButton !== null)
            {
                let searchSuggestionButtons: HTMLCollection = this.searchSuggestionsDiv.children;

                if (searchSuggestionButtons !== undefined && this.selectedButton <= searchSuggestionButtons.length - 1)
                {
                    let searchSuggestionButton: HTMLButtonElement = <HTMLButtonElement>searchSuggestionButtons.item(this.selectedButton);

                    searchSuggestionButton.style.background = this.backgroundColor;
                    searchSuggestionButton.style.color = this.fontColor;
                }

                this.selectedButton = null;
            }
        }

        private createSearchSuggestions(data: any): void
        {
            //Check for no result
            if (data !== null)
            {
                let results: any = data;

                this.searchSuggestionsDiv.innerHTML = "";

                if (results instanceof Array)
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
                else if (results != this.inputValue)
                {
                    this.searchSuggestionsDiv.appendChild(this.createSearchSuggestion(results));
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
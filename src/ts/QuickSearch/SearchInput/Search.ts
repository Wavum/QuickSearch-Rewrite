namespace QuickSearch.SearchInput
{
    export class Search
    {
        private searchSuggestions: SearchSuggestions = new SearchSuggestions("main-searchSuggestions");
        private homepage: Homepage = new Homepage("https://start.duckduckgo.com/?q={0}");
        private searchInput: JQuery;
        private keyCodes: typeof Utilities.KeyCodes = Utilities.KeyCodes;



        public constructor(searchID: string)
        {
            this.searchInput = $("#" + searchID);

            this.searchInput.keyup(this.keyPressed.bind(this));

            this.searchSuggestions.onclick = this.searchSuggestionClicked.bind(this);
        }



        /**
         * Handles the input when a key is pressed
         * @param ev Event parameter
         */
        private keyPressed(ev: JQueryKeyEventObject): void
        {
            let originalEvent: KeyboardEvent = <KeyboardEvent>ev.originalEvent;
            let value: string = this.searchInput.val();

            switch (originalEvent.keyCode)
            {
                case this.keyCodes.ENTER:
                    this.homepage.openSite(value);
                    break;

                case this.keyCodes.PAGE_UP:
                case this.keyCodes.UP_ARROW:
                    value = this.searchSuggestions.selectUpwards();
                    break;

                case this.keyCodes.PAGE_DOWN:
                case this.keyCodes.DOWN_ARROW:
                    value = this.searchSuggestions.selectDownwards();
                    break;

                case this.keyCodes.ESCAPE:
                    this.searchSuggestions.hideSuggestions();
                    break;

                default:
                    this.searchSuggestions.showSuggestions(value);
                    break;
            }

            this.searchInput.focus();
            this.searchInput.val(value);
        }

        /**
         * Handles the input value when a search suggestion is clicked
         * @param ev Event parameter
         */
        private searchSuggestionClicked(ev: MouseEvent): void
        {
            this.searchInput.val((<HTMLInputElement>ev.target).value);
            this.searchInput.focus();

            this.searchSuggestions.showSuggestions(this.searchInput.val());
        }
    }
}
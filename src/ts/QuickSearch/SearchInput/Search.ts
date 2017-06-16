namespace QuickSearch.SearchInput
{
    export class Search
    {
        private quickKey: QuickKey = new QuickKey("main-quickKey");
        private searchSuggestions: SearchSuggestions = new SearchSuggestions("main-searchSuggestions");
        private homepage: Homepage = new Homepage("https://start.duckduckgo.com/?q={0}");
        private searchInput: JQuery;
        private keyCodes: typeof Utilities.KeyCodes = Utilities.KeyCodes;



        public constructor(searchID: string)
        {
            this.searchInput = $("#" + searchID);

            this.searchInput.keyup(this.keyPressed.bind(this));

            this.searchSuggestions.onclick = this.searchSuggestionClicked.bind(this);

            //TODO: Rework this feature
            this.quickKey.initConfig(new Config());
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
namespace QuickSearch.SearchInput
{
    export class Search
    {
        private quickKey: QuickKey = new QuickKey("main-quickKey");
        private searchSuggestions: SearchSuggestions = new SearchSuggestions("main-searchSuggestions");
        private site: Site = new Site();
        private searchInput: JQuery;
        private keyCodes: typeof Utilities.KeyCodes = Utilities.KeyCodes;



        public constructor(searchID: string)
        {
            this.searchInput = $("#" + searchID);

            this.searchInput.keyup(this.keyUp.bind(this));
            this.searchInput.keydown(this.keyDown.bind(this));

            this.searchSuggestions.onclick = this.searchSuggestionClicked.bind(this);

            //TODO: Rework this feature
            this.quickKey.initConfig(new Config());
            this.site.initConfig(new Config());
        }



        /**
         * Handles the input when a key will be pressed
         * @param ev Event parameter
         */
        private keyDown(ev: JQueryKeyEventObject): void
        {
            let originalEvent: KeyboardEvent = <KeyboardEvent>ev.originalEvent;
            let value: string = this.searchInput.val();

            switch (originalEvent.keyCode)
            {
                case this.keyCodes.Backspace:
                    if (value.isEmpty())
                        this.quickKey.hideQuickKey();
                    break;

                default:
                    break;
            }

            this.searchInput.focus();
            this.searchInput.val(value);
        }

        /**
         * Handles the input when a key is pressed
         * @param ev Event parameter
         */
        private keyUp(ev: JQueryKeyEventObject): void
        {
            let originalEvent: KeyboardEvent = <KeyboardEvent>ev.originalEvent;
            let value: string = this.searchInput.val();

            switch (originalEvent.keyCode)
            {
                case this.keyCodes.Enter:
                    if (this.quickKey.ShowsQuickKey)
                    {
                        //Get key object
                        let keyObject: QuickSearches.QuickSearch | undefined = this.quickKey.CurrentQuickSearch;

                        //Test if key object exists
                        if (keyObject === undefined)
                        {
                            this.site.open(value);
                        }
                        else
                        {
                            this.site.open(value, keyObject.Site);
                        }

                    }
                    else
                    {
                        this.site.open(value);
                    }
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
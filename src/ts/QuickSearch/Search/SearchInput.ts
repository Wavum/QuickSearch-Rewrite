namespace QuickSearch.Search
{
    export class SearchInput
    {
        private inputHandler: SearchInputHandler = new SearchInputHandler("https://start.duckduckgo.com/?q={0}");
        private searchInput: JQuery;
        private keyCodes: typeof Utilities.KeyCodes = Utilities.KeyCodes;



        public constructor(searchID: string)
        {
            this.searchInput = $("#" + searchID);

            this.searchInput.keyup(this.keyPressed.bind(this));
        }



        private keyPressed(ev: JQueryKeyEventObject): void
        {
            let originalEvent: KeyboardEvent = <KeyboardEvent>ev.originalEvent;
            let value: string = this.searchInput.val();

            switch (originalEvent.keyCode)
            {
                case this.keyCodes.ENTER:
                    this.inputHandler.openSite(value.trim());
                    break;

                default:
                    break;
            }
        }
    }
}
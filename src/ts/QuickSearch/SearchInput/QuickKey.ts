namespace QuickSearch.SearchInput
{
    export class QuickKey
    {
        private showsQuickKey: boolean = false;
        private quickKeyDiv: JQuery;
        private quickKeyText: JQuery;
        private quickKeyCloseButton: JQuery;
        private quickSearches: QuickSearches.QuickSearches = new QuickSearches.QuickSearches();



        public constructor(parentID: string)
        {
            this.quickKeyDiv = $("#" + parentID);
            this.quickKeyText = $("#" + parentID + " div.text");
            this.quickKeyCloseButton = $("#" + parentID + " button.close");

            this.quickKeyCloseButton.click(this.hideQuickKey.bind(this));
        }



        /**
         * Initializate the class with a config
         * @param config Config for initialization
         */
        public initConfig(config: Config): void
        {
            this.quickSearches = config.QuickSearches;
        }

        /**
         * Show the QuickKey
         * @param text New text to show
         */
        public showQuickKey(text: string): string
        {
            //Get key object
            let keyObject: QuickSearches.QuickSearch | undefined = this.quickSearches.getFromKey(text);

            //Test if key object exists
            if (keyObject === undefined)
                return text;

            this.show(keyObject.Key.FullKey);

            //Remove QuickKey from text
            return text.replace(keyObject.Key.FullKey, "");
        }

        /**
         * Hide the QuickKey
         */
        public hideQuickKey(): void
        {
            this.quickKeyDiv.css("display", "none");
            this.quickKeyText.text("");

            this.showsQuickKey = false;
        }



        public get ShowsQuickKey(): boolean
        {
            return this.showsQuickKey;
        }

        public get CurrentQuickSearch(): QuickSearches.QuickSearch | undefined
        {
            return this.quickSearches.getFromKey(this.quickKeyText.text());
        }



        /**
         * Show QuickKey
         */
        private show(): void;
        /**
         * Show QuickKey with text
         * @param text Text to show
         */
        private show(text: string): void;
        private show(text: string = ""): void
        {
            this.quickKeyDiv.css("display", "flex");
            this.quickKeyText.text(text);

            this.showsQuickKey = true;
        }
    }
}
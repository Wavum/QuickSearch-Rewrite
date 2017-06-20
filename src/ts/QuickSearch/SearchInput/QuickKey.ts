namespace QuickSearch.SearchInput
{
    export class QuickKey
    {
        private quickKeyDiv: JQuery;
        private quickKeyText: JQuery;
        private quickKeyCloseButton: JQuery;
        private quickSearches: QuickSearchKey.QuickSearches;
        private showsQuickKey: boolean = false;



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
            this.QuickSearches = config.QuickSearches;
        }

        /**
         * Show the QuickKey
         * @param text New text to show
         */
        public showQuickKey(text: string): string
        {
            //Get key object
            let keyObject: QuickSearchKey.QuickSearchKeyStructure = this.quickSearches.getKeyObjectFromKey(text);

            //Test if key object exists
            if (!this.quickSearches.existsKeyObject(keyObject))
                return text;

            this.show(keyObject.Key);

            //Remove QuickKey from text
            return text.replace(keyObject.Key + " ", "");
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



        public set QuickSearches(value: QuickSearchKey.QuickSearches)
        {
            this.quickSearches = value;
        }

        public get QuickSearches(): QuickSearchKey.QuickSearches
        {
            return this.quickSearches;
        }

        public get ShowsQuickKey(): boolean
        {
            return this.showsQuickKey;
        }

        public get CurrentQuickSearchKey(): QuickSearchKey.QuickSearchKeyStructure
        {
            //HERE IT ALL FUCKS UP
            return this.quickSearches.getKeyObjectFromKey(this.quickKeyText.text());
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
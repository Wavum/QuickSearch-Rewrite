namespace QuickSearch.SearchInput
{
    export class QuickKey
    {
        private quickKeyDiv: JQuery;
        private quickKeyText: JQuery;
        private quickKeyCloseButton: JQuery;
        private quickSearches: QuickSearchKey.QuickSearches;



        public constructor(parentID: string)
        {
            this.quickKeyDiv = $("#" + parentID);
            this.quickKeyText = $("#" + parentID + " div.text");
            this.quickKeyCloseButton = $("#" + parentID + " button.close");

            this.quickKeyCloseButton.click(this.hideQuickKey.bind(this));
        }



        public initConfig(config: Config): void
        {
            this.QuickSearches = config.QuickSearches;
        }

        public showQuickKey(text: string): string
        {
            if (!this.quickSearches.startsWithKey(text))
                return text;

            this.show(this.quickSearches.getKey(text));

            return this.quickSearches.removeKey(text);
        }

        public hideQuickKey(): void
        {
            this.quickKeyDiv.css("display", "none");
            this.quickKeyText.text("");
        }



        public set QuickSearches(value: QuickSearchKey.QuickSearches)
        {
            this.quickSearches = value;
        }

        public get QuickSearches(): QuickSearchKey.QuickSearches
        {
            return this.quickSearches;
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
        }
    }
}
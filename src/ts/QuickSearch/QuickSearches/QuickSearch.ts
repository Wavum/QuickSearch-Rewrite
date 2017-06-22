namespace QuickSearch.QuickSearches
{
    export class QuickSearch
    {
        private key: QuickSearchKey;
        private site: string;



        public constructor(key: QuickSearchKey, site: string)
        {
            this.key = key;
            this.site = site;
        }



        public get Key(): QuickSearchKey
        {
            return this.key;
        }

        public set Key(value: QuickSearchKey)
        {
            this.key = value;
        }

        public get Site(): string
        {
            return this.site;
        }

        public set Site(value: string)
        {
            this.site = value;
        }
    }
}
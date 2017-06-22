namespace QuickSearch.QuickSearches
{
    export class QuickSearches
    {
        private keyStart: string = "";
        private keyEnd: string = " ";
        private quickSearches: Array<QuickSearch> = new Array<QuickSearch>();



        public constructor()
        {

        }



        /**
         * Initializate the class with a config
         * @param config Config for initialization
         */
        public initConfig(config: Config): void
        {
            this.keyStart = config.KeyStart;
            this.keyEnd = config.KeyEnd;
        }

        /**
         * Add a new QuickSearch
         * @param key Key for QuickSearch
         * @param site Site to link too
         */
        public addQuickSearch(key: string, site: string): void
        {
            let quickKey: QuickSearchKey = new QuickSearchKey(this.keyStart, key, this.keyEnd);
            let quickSearch: QuickSearch = new QuickSearch(quickKey, site);

            this.quickSearches.push(quickSearch);
        }

        public exists(key: string): boolean;
        public exists(key: QuickSearchKey): boolean;
        public exists(key: string | QuickSearchKey): boolean
        {
            if (typeof(key) === "string")
            {
                return this.getFromKey(key) !== undefined;
            }
            else
            {
                return this.getFromKey(key) !== undefined;
            }
        }

        /**
         * Get a quickSearch object from a key
         * @param fullKey Full key (with keyStart, key and keyEnd) to get a quickSearch object
         */
        public getFromKey(fullKey: string): QuickSearch | undefined;
        /**
         * Get a quickSearch object from a key
         * @param key Key to get a quickSearch object
         */
        public getFromKey(key: QuickSearchKey): QuickSearch | undefined;
        public getFromKey(key: string | QuickSearchKey): QuickSearch | undefined
        {
            let returnQuickSearch: QuickSearch | undefined = undefined;

            this.quickSearches.forEach(function(currentQuickSearch: QuickSearch)
            {
                if (typeof(key) === "string")
                {
                    if (key === currentQuickSearch.Key.FullKey)
                    {
                        returnQuickSearch = currentQuickSearch;
                    }
                }
                else
                {
                    if (key === currentQuickSearch.Key)
                    {
                        returnQuickSearch = currentQuickSearch;
                    }
                }
            });

            return returnQuickSearch;
        }



        public get QuickSearches(): Array<QuickSearch>
        {
            return this.quickSearches;
        }

        public get KeyStart(): string
        {
            return this.keyStart;
        }

        public set KeyStart(value: string)
        {
            this.keyStart = value;
        }

        public get KeyEnd(): string
        {
            return this.keyEnd;
        }

        public set KeyEnd(value: string)
        {
            this.keyEnd = value;
        }
    }
}
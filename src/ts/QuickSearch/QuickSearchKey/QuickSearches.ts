namespace QuickSearch.QuickSearchKey
{
    export class QuickSearches
    {
        private keys: Array<QuickSearchKeyStructure> = new Array<QuickSearchKeyStructure>();



        public constructor()
        {

        }



        /**
         * Add a new QuickSearch
         * @param key Key for QuickSearch
         * @param site Site to link too
         */
        public addQuickSearch(key: string, site: string): void
        {
            this.keys.push({ key: key, site: site });
        }

        /**
         * Tests if a text start with a quick key
         * @param text Text to check
         */
        public startsWithKey(text: string): boolean
        {
            if (this.getKey(text) === "")
                return false;

            return true;
        }

        /**
         * Gets a key from a text
         * @param text Text to get a key from
         */
        public getKey(text: string): string
        {
            let retKey: string = "";

            this.keys.forEach(function(key: QuickSearchKey.QuickSearchKeyStructure)
            {
                if (text.startsWith(key.key + " "))
                {
                    retKey =  key.key;
                }
            }.bind(this));

            return retKey;
        }

        /**
         * Removes a key from a text
         * @param text Text to remove the key from
         */
        public removeKey(text: string): string
        {
            return text.replace(this.getKey(text) + " ", "");
        }



        public get Keys(): QuickSearchKeyStructure[]
        {
            return this.keys;
        }
    }
}
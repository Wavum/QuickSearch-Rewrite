namespace QuickSearch.QuickSearchKey
{
    export abstract class AbstractQuickSearches
    {
        private keys: Array<QuickSearchKeyStructure> = new Array<QuickSearchKeyStructure>();



        private constructor()
        {

        }



        /**
         * Add a new QuickSearch
         * @param key Key for QuickSearch
         * @param site Site to link too
         */
        public addQuickSearch(key: string, site: string): void
        {
            this.keys.push({ Key: key, Site: site });
        }

        /**
         * Gets a key object from a original key (without keyStart and keyEnd)
         * @param text Original key to get a key object from
         */
        public getKeyObjectFromOriginalKey(key: string): QuickSearchKeyStructure
        {
            let retKey: QuickSearchKeyStructure = { Key: "", Site: "" };

            this.keys.forEach(function(currentKey: QuickSearchKeyStructure)
            {
                if (key == currentKey.Key)
                {
                    retKey.Key = currentKey.Key;
                    retKey.Site = currentKey.Site;
                }
            }.bind(this));

            return retKey;
        }

        /**
         * Gets a key object from a key
         * @param text Key to get a key object from
         */
        public getKeyObjectFromKey(key: string): QuickSearchKeyStructure
        {
            let retKey: QuickSearchKeyStructure = { Key: "", Site: "" };

            this.keys.forEach(function(currentKey: QuickSearchKeyStructure)
            {
                if (key == this.keyStart + currentKey.Key + this.keyEnd)
                {
                    retKey.Key = currentKey.Key;
                    retKey.Site = currentKey.Site;
                }
            }.bind(this));

            return retKey;
        }



        public get Keys(): QuickSearchKeyStructure[]
        {
            return this.keys;
        }
    }
}
namespace QuickSearch.QuickSearchKey
{
    export class QuickSearches
    {
        private keyStart: string = "";
        private keyEnd: string = " ";
        private keys: Array<QuickSearchKeyStructure> = new Array<QuickSearchKeyStructure>();



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
            this.keys.push({ Key: key, Site: site });
        }

        /**
         * Tests if a text start with a quick key
         * @param text Text to check
         */
        // public startsWithKey(text: string): boolean
        // {
        //     if (this.getKeyObjectFromKey(text).Key === "")
        //         return false;

        //     return true;
        // }

        public existsKeyObject(key: string): boolean;
        public existsKeyObject(key: QuickSearchKeyStructure): boolean;
        public existsKeyObject(key: string | QuickSearchKeyStructure): boolean
        {
            if (typeof(key) === "string")
            {
                return this.getKeyObjectFromKey(key) !== { Key: "", Site: "" };
            }
            else
            {
                return key !== { Key: "", Site: "" };
            }
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

        /**
         * Removes a key from a text
         * @param text Text to remove the key from
         */
        // public removeKey(text: string): string
        // {
        //     return text.replace(this.getKeyObjectFromKey(text).Key + " ", "");
        // }



        public get Keys(): QuickSearchKeyStructure[]
        {
            return this.keys;
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
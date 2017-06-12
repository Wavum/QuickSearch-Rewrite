namespace QuickSearch.QuickSearchKey
{
    interface QuickSearchKey
    {
        key: string;
        site: string;
    }

    export class QuickSearches
    {
        private keys: QuickSearchKey[];



        public constructor()
        {

        }



        public addSearch(key: string, site: string): void
        {
            this.keys.push({ key: key, site: site });
        }



        public get Keys(): QuickSearchKey[]
        {
            return this.keys;
        }
    }
}
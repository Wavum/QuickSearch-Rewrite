namespace QuickSearch.QuickSearchKey
{
    export class QuickSearches
    {
        private key: string[];
        private site: string[];



        public constructor()
        {

        }



        public addSearch(key: string, site: string): void
        {
            this.key.push(key);
            this.site.push(site);
        }



        public get Key(): string[]
        {
            return this.key;
        }

        public get Site(): string[]
        {
            return this.site;
        }
    }
}
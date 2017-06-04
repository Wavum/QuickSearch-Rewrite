namespace QuickSearch.Search
{
    export class SearchInputHandler
    {
        private homepage: Homepage;



        public constructor(homepage: string)
        {
            this.homepage = new Homepage(homepage);
        }



        public workInput(text: string): void
        {

        }
    }
}
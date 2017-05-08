namespace QuickSearch
{
    export class Search
    {
        private searchInput: JQuery;



        public constructor(searchID: string)
        {
            this.searchInput = $("#" + searchID);
        }
    }
}
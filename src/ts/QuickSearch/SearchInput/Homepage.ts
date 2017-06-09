namespace QuickSearch.SearchInput
{
    export class Homepage
    {
        protected homepage: string;



        public constructor(homepage: string)
        {
            this.homepage = homepage;
        }



        /**
         * Opens the homepage
         */
        public openSite(): void;
        /**
         * Opens the homepage, quick search site or a link
         * @param value Value for search
         */
        public openSite(value: string): void;
        public openSite(value: string = ""): void
        {
            //Test for link
            if (Utilities.Validation.isHTTPAddress(value))
            {
                if (!value.startsWith("http"))
                {
                    window.open("http://" + value, "_self");
                }
                else
                {
                    window.open(value, "_self");
                }

                return;
            }

            //Normal search
            window.open(this.homepage.format(encodeURIComponent(value)), "_self");
        }
    }
}
namespace QuickSearch.Search
{
    export class Homepage
    {
        protected homepage: string;



        public constructor(homepage: string)
        {
            this.homepage = homepage;
        }



        public openHomepage(value: string = ""): void
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
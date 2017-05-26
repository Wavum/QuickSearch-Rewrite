namespace QuickSearch.Search
{
    export class SearchInputHandler
    {
        private homepage: string;



        public constructor(homepage: string)
        {
            this.homepage = homepage;
        }



        public workInput(text: string): void
        {

        }

        public openSite(text: string): void
        {
            //Test for link
            if (Utilities.Validation.isFQDN(text) || Utilities.Validation.isIPAddress(text))
            {
                if (!text.startsWith("http"))
                {
                    window.open("http://" + text, "_self");
                }
                else
                {
                    window.open(text, "_self");
                }

                return;
            }

            //Normal search
            window.open(this.homepage.format(encodeURIComponent(text)), "_self");
        }
    }
}
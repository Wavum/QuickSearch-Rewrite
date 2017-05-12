namespace QuickSearch.Search
{
    export class SearchInputHandler
    {
        public constructor()
        {
            
        }



        public workInput(text: string): void
        {

        }

        public openSite(text: string): void
        {
            //Test for link
            if (Utilities.Validation.isFQDN(text))
            {
                // if (!text.startsWith("http"))
                {
                    window.open("http://" + text, "_self");
                }
                // else
                {
                    window.open(text, "_self");
                }

                return;
            }

            //Normal search
            // window.open(this.homepage + encodeURIComponent(text), "_self");
        }
    }
}
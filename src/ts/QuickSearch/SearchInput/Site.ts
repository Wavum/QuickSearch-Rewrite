namespace QuickSearch.SearchInput
{
    export class Site
    {
        protected defaultSite: string;



        public constructor()
        {

        }



        /**
         * Initializate the class with a config
         * @param config Config for initialization
         */
        public initConfig(config: Config): void
        {
            this.defaultSite = config.DefaultSite;
        }

        /**
         * Opens the default site
         */
        public open(): void;
        /**
         * Opens the default site
         * @param value Value for search
         */
        public open(value: string): void;
        /**
         * Opens a site
         * @param site Site to open
         */
        public open(site: string): void;
        /**
         * Opens a site with a value to search for
         * @param value Value for search
         * @param site Site to open
         */
        public open(value: string, site: string): void;
        public open(value: string = "", site: string = ""): void
        {
            //Test for site
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
            if (site === "")
            {
                window.open(this.defaultSite.format(encodeURIComponent(value)), "_self");
            }
            else
            {
                window.open(site.format(encodeURIComponent(value)), "_self");
            }
        }
    }
}
namespace QuickSearch
{
    export class Main
    {
        /**
         * Main routine
         */
        public static main(): void
        {
            let clock = new ClockTime.Clock("main-clock");

            clock.initInterval();

            let search = new SearchInput.Search("main-searchInput");
        }
    }
}
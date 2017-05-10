namespace QuickSearch
{
    export class Main
    {
        public static main(): void
        {
            let clock = new Clock("main-clock");
            
            clock.initInterval();

            let search = new Search.SearchInput("main-searchInput");
        }
    }
}
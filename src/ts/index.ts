/// <reference path="Clock/Clock.ts" />
/// <reference path="Search/Search.ts" />

namespace QuickSearch
{
    export class Index
    {
        public static main(): void
        {
            let clock = new Clock("main-clock");
            
            clock.initInterval();

            let search = new Search("main-searchInput");
        }
    }

    Index.main();
}
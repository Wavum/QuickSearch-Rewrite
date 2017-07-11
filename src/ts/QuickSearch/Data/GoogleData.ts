namespace QuickSearch.Data
{
    export interface GoogleDataSearchSuggestionsResult extends Array<any>
    {
        [0]: string;
        [1]: { [index: number]: string };
        [2]: { [index: number]: string };
        [3]: { [index: number]: string };
        [index: number]: any;
        executionTime: number;
    }

    export class GoogleData
    {
        /**
         * Asynchronously gets search suggestions data from Google
         * @param value Value to get search suggestions from
         * @param callback Callback which will be executed when the data arrived
         */
        public static getSearchSuggestions(value: string, callback: (data: GoogleDataSearchSuggestionsResult) => any): void
        {
            let id: string = "i" + Math.random().toString(36).slice(2);
            let executionTime: number = $.now();

            (<any>GoogleData.getSearchSuggestions)[id] = function(data: GoogleDataSearchSuggestionsResult): void
            {
                data.executionTime = executionTime;

                callback(data);

                delete (<any>GoogleData.getSearchSuggestions)[id];
                let script: HTMLElement | null = document.getElementById("searchSuggestionsQuery" + id);

                if (script !== null)
                    script.remove();
            };

            let script: HTMLScriptElement = document.createElement("script");

            script.src = "https://suggestqueries.google.com/complete/search?client=chrome&q=" + encodeURIComponent(value) + "&callback=QuickSearch.Data.GoogleData.getSearchSuggestions." + id;
            script.id = "searchSuggestionsQuery" + id;

            document.head.appendChild(script);
        }
    }
}

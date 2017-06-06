namespace QuickSearch.Data
{
    export class GoogleData
    {
        public static getSearchSuggestions(value: string, callback: Function): void
        {
            let id: string = "i" + Math.random().toString(36).slice(2);
            let executionTime: number = $.now();

            (<any>GoogleData.getSearchSuggestions)[id] = function(data: any)
            {
                data.executionTime = executionTime;

                callback(data);

                delete (<any>GoogleData.getSearchSuggestions)[id];
                let script: HTMLElement | null = document.getElementById("searchSuggestionsQuery" + id);

                if (script !== null)
                    script.remove();
            };

            let script: HTMLScriptElement = new HTMLScriptElement();

            script.src = "http://suggestqueries.google.com/complete/search?client=chrome&q=" + encodeURIComponent(value) + "&callback=GoogleData.getSearchSuggestions." + id;
            script.id = "searchSuggestionsQuery" + id;

            document.head.appendChild(script);
        }
    }
}
namespace QuickSearch.Search
{
    export class SearchInput
    {
        private searchInput: JQuery;



        public constructor(searchID: string)
        {
            this.searchInput = $("#" + searchID);

            this.searchInput.keyup(this.keyPressed.bind(this));
        }



        private keyPressed(ev: JQueryKeyEventObject): void
        {
            let originalEvent: KeyboardEvent = <KeyboardEvent>ev.originalEvent;
            let value: string = this.searchInput.val();
            
            switch (originalEvent.keyCode)
            {
                case KeyCodes.ENTER:
                    console.log("enter");
                    break;

                default:
                    break;
            }

            console.log(value);
        }
    }
}
namespace QuickSearch
{
    export class Clock
    {
        private clock: JQuery;
        private separator: string = ":";



        public constructor(clockID: string)
        {
            this.clock = $("#" + clockID);
        }



        public initInterval(): void
        {
            this.updateTime();

            setInterval(this.updateTime.bind(this), 10000);
        }



        private updateTime(): void
        {
            let date: Date = new Date();
            let hours: string = this.format(date.getHours());
            let minutes: string = this.format(date.getMinutes());

            this.clock.text(hours + this.separator + minutes);
        }

        private format(num: number): string
        {
            return ("0" + num.toString()).slice(-2);
        }
    }
}
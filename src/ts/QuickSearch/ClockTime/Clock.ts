namespace QuickSearch.ClockTime
{
    export class Clock
    {
        private clock: JQuery;
        private separator: string = ":";



        public constructor(clockID: string)
        {
            this.clock = $("#" + clockID);
        }



        /**
         * Initialize interval to update the clock
         */
        public initInterval(): void;
        /**
         * Initialize interval to update the clock
         * @param timeout Update timeout in milliseconds
         */
        public initInterval(timeout: number): void;
        public initInterval(timeout: number = 10000): void
        {
            this.updateTime();

            setInterval(this.updateTime.bind(this), timeout);
        }



        /**
         * Updates the time
         */
        private updateTime(): void
        {
            let date: Date = new Date();
            let hours: string = this.format(date.getHours());
            let minutes: string = this.format(date.getMinutes());

            this.clock.text(hours + this.separator + minutes);
        }

        /**
         * Pads a number (1 => 01, 8 => 08, 16 => 16)
         * @param num Number to pad
         */
        private format(num: number): string
        {
            return ("0" + num.toString()).slice(-2);
        }
    }
}
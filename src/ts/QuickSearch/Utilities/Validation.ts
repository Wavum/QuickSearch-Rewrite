namespace QuickSearch.Utilities
{
    export class Validation
    {
        private constructor()
        {

        }



        /**
         * Checks if a text is a full qualified domain name
         * @param url URL to check
         */
        public static isFQDN(url: string): boolean
        {
            let regex: RegExp = new RegExp(/^([-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?)$/gmi);

            return regex.test(url);
        }

        /**
         * Checks if a text is a ip-address
         * @param ipAdress IP-Address to check
         */
        public static isIPAddress(ipAdress: string): boolean
        {
            let regex: RegExp = new RegExp(/^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\b([/:][-a-zA-Z0-9@:%_\+.~#?&//=]*)?$/gmi);

            return regex.test(ipAdress);
        }

        /**
         * Checks if a text is HTTP-address, including localhost
         * @param value Value to check
         */
        public static isHTTPAddress(value: string): boolean
        {
            return this.isFQDN(value) || this.isIPAddress(value) || value.trim().toLowerCase() === "localhost";
        }
    }
}
namespace QuickSearch.Utilities
{
    export class Validation
    {
        private constructor()
        {

        }



        public static isFQDN(url: string): boolean
        {
            let regex: RegExp = new RegExp(/^([-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?)$/gmi);

            return regex.test(url);
        }

        public static isIPAddress(ipAdress: string): boolean
        {
            let regex: RegExp = new RegExp(/^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/gmi);

            return regex.test(ipAdress);
        }
    }
}
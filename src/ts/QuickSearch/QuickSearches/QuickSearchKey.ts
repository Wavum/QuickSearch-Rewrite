namespace QuickSearch.QuickSearches
{
    export class QuickSearchKey
    {
        private keyStart: string;
        private key: string;
        private keyEnd: string;



        public constructor(keyStart: string, key: string, keyEnd: string)
        {
            this.keyStart = keyStart;
            this.key = key;
            this.keyEnd = keyEnd;
        }



        public get KeyStart(): string
        {
            return this.keyStart;
        }

        public set KeyStart(value: string)
        {
            this.keyStart = value;
        }

        public get Key(): string
        {
            return this.key;
        }

        public set Key(value: string)
        {
            this.key = value;
        }

        public get KeyEnd(): string
        {
            return this.keyEnd;
        }

        public set KeyEnd(value: string)
        {
            this.keyEnd = value;
        }

        public get FullKey(): string
        {
            return this.keyStart + this.key + this.keyEnd;
        }
    }
}
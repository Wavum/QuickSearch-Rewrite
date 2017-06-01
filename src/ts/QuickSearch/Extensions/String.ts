interface String
{
    isEmpty(): boolean;
    format(...values: string[]): string;
    format(values: string[]): string;
    startsWith(value: string): boolean;
    startsWithAny(...values: string[]): boolean;
    startsWithAny(values: string[]): boolean;
    replaceAll(searchValue: string, replaceValue: string): string;
    upperFirstChar(): string;
}

String.prototype.isEmpty = function isEmpty(): boolean
{
    return (this.length === 0 || !this.trim());
}

String.prototype.format = function format(valuesParm: any): string
{
    let values: string[] = <string[]>valuesParm;
    let formatted = <string>this;

    for(let i = 0; i < values.length; i++)
    {
        formatted = formatted.replaceAll("{" + i + "}", values[i]);
    }
    
    return formatted;
}

String.prototype.startsWith = function startsWith(value: string): boolean
{
    return this.lastIndexOf(value, 0) === 0;
}

String.prototype.startsWithAny = function startsWithAny(valuesParm: any): boolean
{
    let values: string[] = <string[]>valuesParm;

    for (var i = 0; i < values.length; i++)
    {
        if (this.startsWith(values[i]))
        {
            return true;
        }
    }

    return false;
}

String.prototype.replaceAll = function replaceAll(searchValue: string, replaceValue: string): string
{
    let text = <string>this;
    
    return text.split(searchValue).join(replaceValue);
}

String.prototype.upperFirstChar = function upperFirstChar(): string
{
    return this.charAt(0).toUpperCase() + this.slice(1);
}
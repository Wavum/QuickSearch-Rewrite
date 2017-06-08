interface JQuery
{
    clickOutside(callback: Function): JQuery;
}

(function($)
{
    $.fn.clickOutside = function(callback: Function): JQuery
    {
        $(document).mouseup(function(ev: JQueryMouseEventObject)
        {
            if (!this.is(ev.target) && this.has(ev.target).length === 0)
            {
                callback();
            }
        }.bind(this));

        return this;
    }
}(jQuery));
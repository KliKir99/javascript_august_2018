// JavaScript source code

class Machine
{
    constructor(power)
    {
        this._power = power;
        this._enabled = false;
        var self = this;
        this.enable = function () { self._enabled = true; };
        this.disable = function () { self._enabled = false; };
    }
}


class Fridge extends Machine
{
    constructor(power)
    {
        super(power);
        _food = [];
    };

    getFood()
    {
        return _food.slice();
    };

    addFood (...args)
    {
        if (this._enabled == false)
        {
            console.log("error! fridge is switched off!");
            return;
        }
        for (var i = 0; i < args.length; i++)
        {
            if (_food.length + 1 <= _power / 100)
            {
                _food.push(args[i]);
            }
            else
            {
                console.log("too many food in fridge!");
                return;
            }
        }
    };
}





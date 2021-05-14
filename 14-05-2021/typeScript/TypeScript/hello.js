var global = 10;
var Scopes = /** @class */ (function () {
    function Scopes() {
        this.instanceValue = 30;
    }
    Scopes.prototype.display = function () {
        var localValue = 40;
        console.log('local:', +localValue);
        console.log('Instance :' + this.instanceValue);
        console.log('static:' + Scopes.staticValue);
        console.log('Global:' + global);
    };
    Scopes.staticValue = 20;
    return Scopes;
}());
var obj = new Scopes();
obj.display();

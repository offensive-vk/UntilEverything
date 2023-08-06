var Kid = /** @class */ (function () {
    function Kid(name, age) {
        this.name = name;
        this.age = age;
    }
    Kid.prototype.getInfo = function () {
        return "".concat(this.name, " (").concat(this.age, " years old)");
    };
    return Kid;
}());
var Wife = /** @class */ (function () {
    function Wife(name, age) {
        this.name = name;
        this.age = age;
        this.kids = [];
    }
    Wife.prototype.addChild = function (name, age) {
        var kid = new Kid(name, age);
        this.kids.push(kid);
    };
    Wife.prototype.getKidsInfo = function () {
        return this.kids.map(function (kid) { return kid.getInfo(); }).join(", ");
    };
    Wife.prototype.getInfo = function () {
        return "".concat(this.name, " (Wife, ").concat(this.age, " years old)");
    };
    return Wife;
}());
var Husband = /** @class */ (function () {
    function Husband(name, age) {
        this.name = name;
        this.age = age;
        this.wife = null;
    }
    Husband.prototype.marry = function (wife) {
        this.wife = wife;
    };
    Husband.prototype.getInfo = function () {
        if (this.wife) {
            return "".concat(this.name, " (Husband, ").concat(this.age, " years old) - Married to ").concat(this.wife.getInfo());
        }
        else {
            return "".concat(this.name, " (Husband, ").concat(this.age, " years old) - Single");
        }
    };
    return Husband;
}());
var wife = new Wife("Sneha", 27);
var husband = new Husband("Madhav", 30);
husband.marry(wife);
wife.addChild("John", 5);
wife.addChild("Clair", 3);
console.log(husband.getInfo());
console.log("Children: ".concat(wife.getKidsInfo()));

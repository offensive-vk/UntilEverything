var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// Decorator function with parameters
function logClass(logMessage) {
    return function (target) {
        console.log("Class ".concat(target.name, " is instantiated. Log message: ").concat(logMessage));
    };
}
// Applying the decorator to a class with a parameter
var ExampleClass = function () {
    var _classDecorators = [logClass("This is a log message")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ExampleClass = _classThis = /** @class */ (function () {
        function ExampleClass_1() {
        }
        return ExampleClass_1;
    }());
    __setFunctionName(_classThis, "ExampleClass");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ExampleClass = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ExampleClass = _classThis;
}();
// Creating an instance of the decorated class
var example = new ExampleClass();
// Another example
// Decorator function with parameters
function simpleDecorator(logToConsole) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            if (logToConsole) {
                console.log("Calling method ".concat(key, " of ").concat(target.constructor.name));
            }
            originalMethod.apply(this, arguments);
        };
    };
}
// Class using the decorator with a parameter
var ExampleClass2 = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _greet_decorators;
    return _a = /** @class */ (function () {
            function ExampleClass2() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            ExampleClass2.prototype.greet = function () {
                console.log('Hello, world!');
            };
            return ExampleClass2;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _greet_decorators = [simpleDecorator(true)];
            __esDecorate(_a, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: function (obj) { return "greet" in obj; }, get: function (obj) { return obj.greet; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
// Creating an instance of the decorated class
var exampleInstance = new ExampleClass2();
exampleInstance.greet(); // This will log method call
// Creating an instance of the decorated class with logging disabled
var exampleInstanceWithoutLogging = new ExampleClass2();
exampleInstanceWithoutLogging.greet(); // This won't log method call

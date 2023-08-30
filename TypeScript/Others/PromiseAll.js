var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
/*
Promise.all() is a high-level method in TypeScript for managing multiple asynchronous operations concurrently. It takes an iterable (usually an array) of promises as input and returns a new promise that fulfills when all the promises in the input iterable are fulfilled. If any of the input promises are rejected, the returned promise is immediately rejected with the reason of the first rejected promise.
*/
(function () { return __awaiter(_this, void 0, void 0, function () {
    var promise1, promise2, promise3, promises, promise4, promise5, promise6, _promises;
    return __generator(this, function (_a) {
        promise1 = new Promise(function (resolve) { return setTimeout(resolve, 1000, 'Resolves after 1s'); });
        promise2 = new Promise(function (resolve) { return setTimeout(resolve, 2000, 'Resolves after 2s'); });
        promise3 = new Promise(function (resolve) { return setTimeout(resolve, 3000, 'Resolves after 3s'); });
        promises = [promise1, promise2, promise3];
        Promise.all(promises)
            .then(function (values) { return console.log(values); })
            .catch(function (err) { return console.log("Oops ! Error Occurred : ".concat(err, " ")); })
            .finally(function () { return console.log("All Promises Fulfilled \n"); });
        promise4 = new Promise(function (resolve) { return setTimeout(resolve, 1000, 'Resolves after 1s'); });
        promise5 = new Promise(function (resolve) { return setTimeout(resolve, 2000, 'Resolves after 2s'); });
        promise6 = new Promise(function (resolve, reject) { return setTimeout(reject, 0, 'Rejects immediately'); });
        _promises = [promise4, promise5, promise6];
        Promise.allSettled(_promises)
            .then(function (results) {
            results.forEach(function (result) {
                if (result.status === 'fulfilled') {
                    console.log(result.value);
                }
                else {
                    console.log("Rejected: ".concat(result.reason));
                }
            });
        })
            .finally(function () { return console.log("Promises Fulfilled \n"); });
        return [2 /*return*/];
    });
}); })();

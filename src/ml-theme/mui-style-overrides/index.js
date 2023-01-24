"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var button_1 = __importDefault(require("./button"));
var css_baseline_1 = __importDefault(require("./css-baseline"));
var dialog_1 = __importDefault(require("./dialog"));
var input_1 = __importDefault(require("./input"));
var table_1 = __importDefault(require("./table"));
var MUI_STYLE_OVERRIDES = __assign(__assign(__assign(__assign(__assign({}, button_1["default"]), input_1["default"]), table_1["default"]), dialog_1["default"]), css_baseline_1["default"]);
exports["default"] = MUI_STYLE_OVERRIDES;

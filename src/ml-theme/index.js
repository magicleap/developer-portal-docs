"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mui_prop_overrides_1 = __importDefault(require("./mui-prop-overrides"));
var mui_style_overrides_1 = __importDefault(require("./mui-style-overrides"));
var palette_1 = __importDefault(require("./palette"));
var typography_1 = __importDefault(require("./typography"));
var themeOptions = {
    palette: palette_1["default"],
    typography: typography_1["default"],
    overrides: mui_style_overrides_1["default"],
    props: mui_prop_overrides_1["default"]
};
exports["default"] = themeOptions;

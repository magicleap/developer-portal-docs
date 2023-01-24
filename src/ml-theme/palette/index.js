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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var colors_1 = __importStar(require("./colors"));
var palette = __assign(__assign({ type: "light" }, colors_1["default"]), { primary: {
        contrastText: colors_1.WHITE,
        light: colors_1.ML2_PURPLE_LIGHT,
        main: colors_1.ML2_PURPLE_BASE,
        dark: colors_1.ML2_PURPLE_DARK
    }, secondary: {
        contrastText: colors_1.XXLIGHT,
        light: colors_1.LIGHT,
        main: colors_1.BASE,
        dark: colors_1.XXDARK
    }, info: {
        contrastText: "#FFFFFF",
        light: "#156BC1",
        main: "#156BC1",
        dark: "#156BC1"
    }, success: {
        contrastText: "#FFFFFF",
        light: "#0F7B45",
        main: "#0F7B45",
        dark: "#0F7B45"
    }, warning: {
        contrastText: "#FFFFFF",
        light: "#C74900",
        main: "#C74900",
        dark: "#C74900"
    }, error: {
        contrastText: "#FFFFFF",
        light: "#DD273F",
        main: "#DD273F",
        dark: "#DD273F"
    }, grey: {
        100: colors_1.XXLIGHT,
        200: colors_1.XLIGHT,
        300: colors_1.LIGHT,
        400: colors_1.BASE,
        500: colors_1.MEDIUM,
        600: colors_1.DARK,
        700: colors_1.XDARK,
        800: colors_1.XXDARK,
        900: colors_1.XXXDARK
    }, background: {
        paper: colors_1.WHITE,
        "default": colors_1.DEFAULT_BACKGROUND
    } });
exports["default"] = palette;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var palette_1 = __importDefault(require("../../palette"));
var typography_1 = __importDefault(require("../../typography"));
var TABLE_OVERRIDES = {
    MuiTableCell: {
        head: {
            fontWeight: typography_1["default"].fontWeightLight,
            color: palette_1["default"].DARK,
            borderColor: palette_1["default"].LIGHT
        },
        body: {
            fontWeight: typography_1["default"].fontWeightLight,
            color: palette_1["default"].BLACK,
            borderColor: palette_1["default"].XXLIGHT
        }
    }
};
exports["default"] = TABLE_OVERRIDES;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var palette_1 = __importDefault(require("../../palette"));
var colors_1 = require("../../palette/colors");
var BUTTON_OVERRIDES = {
    MuiButton: {
        root: {
            textTransform: "none",
            borderRadius: "25px",
            borderWidth: "2px",
            "&$containedPrimary": {
                "&$disabled": {
                    color: colors_1.WHITE,
                    backgroundColor: palette_1["default"].primary.main,
                    opacity: "0.5"
                }
            },
            "&$containedSecondary": {
                "&$disabled": {
                    color: colors_1.WHITE,
                    backgroundColor: palette_1["default"].secondary.main,
                    opacity: "0.5"
                }
            },
            "&$outlinedPrimary": {
                border: "2px solid " + palette_1["default"].primary.main,
                "&$disabled": {
                    border: "2px solid " + palette_1["default"].primary.main,
                    color: palette_1["default"].primary.main,
                    opacity: "0.5"
                },
                "&:hover": {
                    color: palette_1["default"].primary.dark,
                    border: "2px solid " + palette_1["default"].primary.dark,
                    background: "none"
                }
            },
            "&$outlinedSecondary": {
                border: "2px solid " + palette_1["default"].secondary.main,
                "&$disabled": {
                    border: "2px solid " + palette_1["default"].secondary.main
                },
                "&:hover": {
                    color: palette_1["default"].secondary.dark,
                    border: "2px solid " + palette_1["default"].secondary.dark,
                    background: "none"
                }
            },
            "&$textPrimary": {
                "&$disabled": {
                    color: palette_1["default"].primary.main,
                    opacity: "0.5"
                },
                "&:hover": {
                    background: "none",
                    color: palette_1["default"].primary.dark
                }
            },
            "&$textSecondary": {
                "&$disabled": {
                    color: palette_1["default"].secondary.main,
                    opacity: "0.5"
                },
                "&:hover": {
                    background: "none",
                    color: palette_1["default"].secondary.dark
                }
            }
        }
    }
};
exports["default"] = BUTTON_OVERRIDES;

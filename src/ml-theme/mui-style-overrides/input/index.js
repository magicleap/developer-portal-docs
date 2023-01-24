"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var palette_1 = __importDefault(require("../../palette"));
var INPUT_OVERRIDES = {
    MuiFormLabel: {
        root: {
            "&$focused": {
                color: palette_1["default"].secondary.dark
            }
        }
    },
    MuiInput: {
        underline: {
            "&:not(.Mui-disabled):hover::before": {
                borderColor: palette_1["default"].secondary.dark
            },
            "&:after": {
                borderBottom: "2px solid " + palette_1["default"].secondary.dark
            }
        }
    },
    MuiSelect: {
        select: {
            "&:focus": {
                backgroundColor: "transparent"
            }
        }
    },
    MuiSwitch: {
        root: {
            width: 48,
            height: 26,
            padding: 0,
            margin: 4
        },
        switchBase: {
            padding: 1,
            "&$colorSecondary": {
                "&$checked": {
                    color: palette_1["default"].WHITE,
                    "& + $track": {
                        backgroundColor: palette_1["default"].TATOOINE_GREEN_DARK,
                        opacity: 1,
                        border: "none"
                    }
                }
            },
            "&$checked": {
                transform: "translateX(22px)"
            },
            "&$focusVisible $thumb": {
                color: palette_1["default"].secondary.main,
                border: "6px solid " + palette_1["default"].WHITE
            }
        },
        thumb: {
            width: 24,
            height: 24,
            boxShadow: "none"
        },
        track: {
            borderRadius: 26 / 2,
            border: "1px solid " + palette_1["default"].secondary.light,
            backgroundColor: palette_1["default"].secondary.light,
            opacity: 1
        },
        checked: {}
    },
    MuiFormHelperText: {
        root: {
            "&$error": {
                fontStyle: "italic"
            }
        }
    }
};
exports["default"] = INPUT_OVERRIDES;

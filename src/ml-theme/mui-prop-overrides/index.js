"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var MUI_PROP_OVERRIDES = {
    MuiSelect: {
        IconComponent: ExpandMore_1["default"],
        MenuProps: {
            getContentAnchorEl: null,
            anchorOrigin: {
                horizontal: "left",
                vertical: "bottom"
            }
        }
    },
    MuiButton: {
        disableElevation: true
    },
    MuiPaper: {
        elevation: 0
    },
    MuiAppBar: {
        elevation: 0
    }
};
exports["default"] = MUI_PROP_OVERRIDES;

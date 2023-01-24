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
exports.EnterpriseFooter = void 0;
var core_1 = require("@material-ui/core");
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var FooterBottom_1 = require("./FooterBottom");
var FooterTop_1 = require("./FooterTop");
var useStyles = core_1.makeStyles(function (theme) { return ({
    root: {
        paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(12)
    }
}); });
var EnterpriseFooter = function (props) {
    var classes = useStyles();
    var theme = styles_1.useTheme();
    var isSmScreen = core_1.useMediaQuery(theme.breakpoints.down("sm"));
    return (react_1["default"].createElement("div", { className: isSmScreen ? "" : classes.root },
        react_1["default"].createElement(FooterTop_1.FooterTop, __assign({}, props)),
        react_1["default"].createElement(FooterBottom_1.FooterBottom, __assign({}, props))));
};
exports.EnterpriseFooter = EnterpriseFooter;

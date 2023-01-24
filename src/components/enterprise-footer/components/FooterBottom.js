"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.FooterBottom = exports.DEFAULT_LOCALE = void 0;
var core_1 = require("@material-ui/core");
var react_1 = __importDefault(require("react"));
exports.DEFAULT_LOCALE = "US English";
var useStyles = core_1.makeStyles(function (theme) {
    var _a, _b, _c, _d;
    return ({
        container: (_a = {
                display: "flex",
                alignItems: "center",
                paddingTop: theme.spacing(3),
                paddingBottom: theme.spacing(1)
            },
            _a[theme.breakpoints.down("xs")] = {
                flexDirection: "column"
            },
            _a),
        text: {
            fontSize: "0.875rem",
            color: theme.palette.text.secondary,
            textAlign: "center"
        },
        left: (_b = {
                flex: "1 1"
            },
            _b[theme.breakpoints.up("xs")] = {
                textAlign: "start"
            },
            _b),
        center: (_c = {
                flex: "1 1"
            },
            _c[theme.breakpoints.up("xs")] = {
                textAlign: "centerr"
            },
            _c),
        right: (_d = {
                flex: "1 1"
            },
            _d[theme.breakpoints.up("xs")] = {
                textAlign: "end"
            },
            _d),
        heart: {
            width: "16px",
            height: "16px",
            margin: "-4px 6px 0px",
            fill: theme.palette.primary.light,
            pointerEvents: "none",
            animation: "2s ease-in-out 0s infinite normal none running $heart"
        },
        "@keyframes heart": {
            "0%, 25%, 50%, 75%, 100%": {
                transform: "scale3d(1, 1, 1)"
            },
            "40%, 60%": {
                transform: "scale3d(1.2, 1.2, 1.2)"
            }
        }
    });
});
var FooterBottom = function (_a) {
    var locale = _a.locale, localeOptions = _a.localeOptions, handleLocaleChange = _a.handleLocaleChange;
    var classes = useStyles();
    return (react_1["default"].createElement(core_1.Grid, { container: true, className: classes.container },
        react_1["default"].createElement(core_1.Grid, { item: true, className: classes.left + " " + classes.text },
            react_1["default"].createElement(core_1.Typography, { variant: "body2" }, "Copyright \u00A9 " + new Date().getFullYear() + " Magic Leap, Inc.")),
        react_1["default"].createElement(core_1.Grid, { item: true, className: classes.center + " " + classes.text },
            react_1["default"].createElement(core_1.Typography, { variant: "body2" },
                "Made with",
                react_1["default"].createElement("svg", { viewBox: "0 0 500 500", className: classes.heart },
                    react_1["default"].createElement("title", null, "heart"),
                    react_1["default"].createElement("path", { d: "M361.84,35.64A138,138,0,0,0,250,92.69,138.16,138.16,0,0,0,0,173.8C0,324.52,249.52,464.36,249.52,464.36h1S500,324.52,500,173.8A138.16,138.16,0,0,0,361.84,35.64Z" })),
                "in Florida")),
        react_1["default"].createElement(core_1.Grid, { item: true, className: classes.right + " " + classes.text }, (localeOptions === null || localeOptions === void 0 ? void 0 : localeOptions.length) > 1 ? (react_1["default"].createElement(core_1.NativeSelect, { "data-testid": "language-select", className: classes.text, value: locale, onChange: function (e) {
                handleLocaleChange === null || handleLocaleChange === void 0 ? void 0 : handleLocaleChange(e.target.value);
            } }, localeOptions.map(function (_a) {
            var label = _a.label, value = _a.value;
            return (react_1["default"].createElement("option", { value: value, key: value }, label));
        }))) : (react_1["default"].createElement(core_1.Typography, { variant: "body2" }, exports.DEFAULT_LOCALE)))));
};
exports.FooterBottom = FooterBottom;

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
exports.FooterTop = exports.linkDescriptors = void 0;
var core_1 = require("@material-ui/core");
var react_1 = __importDefault(require("react"));
var useStyles = core_1.makeStyles(function (theme) { return ({
    links: {
        paddingBottom: theme.spacing(1),
        borderBottom: "1px solid " + theme.palette.LIGHT,
        margin: 0,
        width: "100%"
    },
    link: {
        fontWeight: 400,
        textDecoration: "none",
        color: theme.palette.text.primary,
        "&:hover": {
            color: theme.palette.text.secondary,
            textDecoration: "none"
        }
    },
    gridItem: {
        display: "flex",
        alignItems: "center"
    }
}); });
var LinkComponent = function (_a) {
    var to = _a.to, id = _a.id, label = _a.label;
    var classes = useStyles();
    return (react_1["default"].createElement(core_1.Link, { "data-testid": id, key: id, component: "a", className: classes.link, href: to, target: "_blank", rel: "noopener noreferrer" }, label));
};
var CookiePreferences = function (_a) {
    var id = _a.id, label = _a.label, _b = _a.handleClickCookiePreferences, handleClickCookiePreferences = _b === void 0 ? function () {
        var _a, _b;
        (_b = (_a = window) === null || _a === void 0 ? void 0 : _a.CookieControl) === null || _b === void 0 ? void 0 : _b.open();
    } : _b;
    var classes = useStyles();
    return (react_1["default"].createElement(core_1.Link, { onClick: function () { return handleClickCookiePreferences(); }, "data-testid": id, key: id, component: "button", className: classes.link }, label));
};
exports.linkDescriptors = [
    {
        id: "legal",
        label: "Legal",
        to: "https://www.magicleap.com/legal",
        render: function (props) { return react_1["default"].createElement(LinkComponent, __assign({}, props)); }
    },
    {
        id: "privacy",
        label: "Privacy",
        to: "https://www.magicleap.com/privacy",
        render: function (props) { return react_1["default"].createElement(LinkComponent, __assign({}, props)); }
    },
    {
        id: "email",
        label: "Email Preferences",
        to: "https://www.magicleap.com/access-preference-center",
        render: function (props) { return react_1["default"].createElement(LinkComponent, __assign({}, props)); }
    },
    {
        id: "cookies",
        label: "Cookie Preferences",
        render: function (props) { return react_1["default"].createElement(CookiePreferences, __assign({}, props)); }
    }
];
var FooterTop = function (_a) {
    var _b = _a.excludeLinks, excludeLinks = _b === void 0 ? [] : _b, handleClickCookiePreferences = _a.handleClickCookiePreferences;
    var classes = useStyles();
    var linkDescriptorsFiltered = exports.linkDescriptors.filter(function (_a) {
        var id = _a.id;
        return !excludeLinks.some(function (excludeId) { return excludeId === id; });
    });
    return (react_1["default"].createElement(core_1.Grid, { container: true, justify: "center", spacing: 2, className: classes.links }, linkDescriptorsFiltered.map(function (_a) {
        var render = _a.render, to = _a.to, id = _a.id, label = _a.label;
        var linkProps = { to: to, id: id, label: label };
        if (id === "cookies") {
            linkProps.handleClickCookiePreferences = handleClickCookiePreferences;
        }
        return (react_1["default"].createElement(core_1.Grid, { item: true, key: id, className: classes.gridItem }, render(linkProps)));
    })));
};
exports.FooterTop = FooterTop;

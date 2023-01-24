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
exports.__esModule = true;
exports.FONT_WEIGHTS = exports.LOMINO_FONT_FAMILY = void 0;
exports.LOMINO_FONT_FAMILY = "'Lomino', 'open-sans', sans-serif";
exports.FONT_WEIGHTS = {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightExtraBold: 900
};
var typography = __assign(__assign({ fontFamily: exports.LOMINO_FONT_FAMILY }, exports.FONT_WEIGHTS), { h1: {
        fontFamily: exports.LOMINO_FONT_FAMILY,
        fontWeight: exports.FONT_WEIGHTS.fontWeightMedium
    }, h2: {
        fontFamily: exports.LOMINO_FONT_FAMILY,
        fontWeight: exports.FONT_WEIGHTS.fontWeightMedium
    }, h3: {
        fontFamily: exports.LOMINO_FONT_FAMILY,
        fontWeight: exports.FONT_WEIGHTS.fontWeightMedium
    }, h4: {
        fontFamily: exports.LOMINO_FONT_FAMILY,
        fontWeight: exports.FONT_WEIGHTS.fontWeightMedium
    }, h5: {
        fontFamily: exports.LOMINO_FONT_FAMILY,
        fontWeight: exports.FONT_WEIGHTS.fontWeightMedium
    }, h6: {
        fontFamily: exports.LOMINO_FONT_FAMILY,
        fontWeight: exports.FONT_WEIGHTS.fontWeightMedium
    }, subtitle1: {
        fontFamily: exports.LOMINO_FONT_FAMILY
    }, subtitle2: {
        fontFamily: exports.LOMINO_FONT_FAMILY
    }, body1: {
        fontFamily: exports.LOMINO_FONT_FAMILY,
        fontWeight: exports.FONT_WEIGHTS.fontWeightLight
    }, body2: {
        fontFamily: exports.LOMINO_FONT_FAMILY,
        fontWeight: exports.FONT_WEIGHTS.fontWeightLight
    }, button: {
        fontFamily: exports.LOMINO_FONT_FAMILY
    }, caption: {
        fontFamily: exports.LOMINO_FONT_FAMILY
    }, overline: {
        fontFamily: exports.LOMINO_FONT_FAMILY
    } });
exports["default"] = typography;

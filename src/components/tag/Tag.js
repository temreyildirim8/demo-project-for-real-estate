"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styled_components_1 = __importDefault(require("styled-components"));
var TranslatedText_1 = __importDefault(require("../translated-text/TranslatedText"));
var TagView = styled_components_1.default(react_native_1.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 26px;\n  padding: 0 10px;\n  background-color: ", ";\n  margin-right: 4px;\n  border-radius: 2px;\n\n  flex-direction: row;\n  align-items: center;\n"], ["\n  height: 26px;\n  padding: 0 10px;\n  background-color: ", ";\n  margin-right: 4px;\n  border-radius: 2px;\n\n  flex-direction: row;\n  align-items: center;\n"])), function (props) { return props.theme.gray; });
var StyledText = styled_components_1.default(function (_a) {
    var buttonType = _a.buttonType, rest = __rest(_a, ["buttonType"]);
    return (react_1.default.createElement(TranslatedText_1.default, __assign({}, rest)));
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 13.5px;\n"], ["\n  color: ", ";\n  font-size: 13.5px;\n"])), function (props) { return props.theme.darkGray3; });
var Tag = function (props) {
    var title = props.title;
    return (react_1.default.createElement(TagView, null,
        react_1.default.createElement(StyledText, { text: "#" + title })));
};
exports.default = Tag;
var templateObject_1, templateObject_2;

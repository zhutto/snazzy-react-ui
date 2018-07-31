"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterContainer = exports.BodyContainer = exports.HeaderContainer = exports.Content = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  width: 100%;\n  height: 100%;\n  background-color: grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  width: 100%;\n  height: 100%;\n  background-color: grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  background-color: white;\n  width: 400px;\n  height: 400px;\n"], ["\n  background-color: white;\n  width: 400px;\n  height: 400px;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  background-color: blue;\n  display: flex;\n  justify-content: start;\n  padding: 10px;\n"], ["\n  background-color: blue;\n  display: flex;\n  justify-content: start;\n  padding: 10px;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: start;\n  padding: 10px;\n"], ["\n  display: flex;\n  justify-content: start;\n  padding: 10px;\n"]);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = (0, _reactEmotion2.default)("div")(_templateObject);
var Content = exports.Content = (0, _reactEmotion2.default)("div")(_templateObject2);
var HeaderContainer = exports.HeaderContainer = (0, _reactEmotion2.default)("div")(_templateObject3);
var BodyContainer = exports.BodyContainer = (0, _reactEmotion2.default)("div")(_templateObject4);
var FooterContainer = exports.FooterContainer = (0, _reactEmotion2.default)("div")(_templateObject3);

// z-index: 5;
// background-color: rbga(1,1,1,0.5);
// width: 100px;
// height: 100px;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
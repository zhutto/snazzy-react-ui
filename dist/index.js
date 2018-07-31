'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = exports.Body = exports.Header = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bool = _propTypes2.default.bool,
    func = _propTypes2.default.func;
var ModalEntry = (_temp = _class = function (_Component) {
  _inherits(ModalEntry, _Component);

  function ModalEntry(props) {
    _classCallCheck(this, ModalEntry);

    var _this = _possibleConstructorReturn(this, (ModalEntry.__proto__ || Object.getPrototypeOf(ModalEntry)).call(this, props));

    _this.toggleMouse = function () {
      _this.setState({ respectMouse: !_this.state.respectMouse });
    };

    _this.toggleModal = function () {
      if (_this.state.respectMouse) {
        _this.props.toggleModal();
      }
    };

    _this.state = {
      respectMouse: true
    };
    return _this;
  }

  _createClass(ModalEntry, [{
    key: 'render',
    value: function render() {
      var isOpen = this.props.isOpen;

      if (!isOpen) return null;

      //on close animation


      return _react2.default.createElement(
        _styles.Container,
        { onClick: this.toggleModal },
        _react2.default.createElement(
          _styles.Content,
          { onMouseEnter: this.toggleMouse, onMouseLeave: this.toggleMouse },
          this.props.children
        )
      );
    }
  }]);

  return ModalEntry;
}(_react.Component), _class.propTypes = {
  isOpen: bool.isRequired,
  toggleModal: func.isRequired
}, _temp);

var Header = exports.Header = function (_Component2) {
  _inherits(Header, _Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _styles.HeaderContainer,
        null,
        this.props.children
      );
    }
  }]);

  return Header;
}(_react.Component);

;

var Body = exports.Body = function (_Component3) {
  _inherits(Body, _Component3);

  function Body() {
    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
  }

  _createClass(Body, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _styles.BodyContainer,
        null,
        this.props.children
      );
    }
  }]);

  return Body;
}(_react.Component);

var Footer = exports.Footer = function (_Component4) {
  _inherits(Footer, _Component4);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _styles.FooterContainer,
        null,
        this.props.children
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = ModalEntry;
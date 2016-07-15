'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CSSClassnames = require('../../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CHART_LAYERS;

var Layers = function (_Component) {
  (0, _inherits3.default)(Layers, _Component);

  function Layers() {
    (0, _classCallCheck3.default)(this, Layers);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Layers).apply(this, arguments));
  }

  (0, _createClass3.default)(Layers, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var height = _props.height;
      var width = _props.width;

      var classes = [CLASS_ROOT];
      var style = (0, _extends3.default)({}, this.props.style);
      if (height) {
        if (typeof height === 'string') {
          classes.push(CLASS_ROOT + '--height-' + height);
        } else {
          style.height = height + 'px';
        }
      }
      if (width) {
        if (typeof width === 'string') {
          classes.push(CLASS_ROOT + '--width-' + width);
        } else {
          style.width = width + 'px';
        }
      }

      return _react2.default.createElement(
        'div',
        { className: classes.join(' '), style: style },
        this.props.children
      );
    }
  }]);
  return Layers;
}(_react.Component);

Layers.displayName = 'Layers';
exports.default = Layers;
;

Layers.propTypes = {
  height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.oneOf(['small', 'medium', 'large'])]),
  width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.oneOf(['small', 'medium', 'large', 'full'])])
};
module.exports = exports['default'];
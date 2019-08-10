"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import controllers and helpers and use it in your route handlers
var routes = _express["default"].Router();

routes.get('/test', function (req, res) {
  res.status(200).json({
    status: 200,
    msg: 'Route module is working perfectly'
  }).end();
});
var _default = routes;
exports["default"] = _default;
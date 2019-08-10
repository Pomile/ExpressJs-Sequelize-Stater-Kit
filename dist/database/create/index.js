"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _createDb = _interopRequireDefault(require("./createDb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var dbName = process.env.NODE_ENV === 'production' ? process.env.DB_NAME : process.env.NODE_ENV === 'development' ? process.env.DEV_DB_NAME : process.env.CI_DB_NAME;
(0, _createDb["default"])(dbName);
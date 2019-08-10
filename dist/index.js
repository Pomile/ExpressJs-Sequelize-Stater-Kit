"use strict";

var _http = _interopRequireDefault(require("http"));

var _debug = _interopRequireDefault(require("debug"));

var _app = _interopRequireDefault(require("./app"));

var _models = _interopRequireDefault(require("./database/models"));

require("@babel/polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var server = _http["default"].createServer(_app["default"]);
/**
 * Normalize a port into a number, string, or false.
 */


var normalizePort = function normalizePort(val) {
  var port = parseInt(val, 10);

  if (typeof port === 'number' && port >= 0) {
    // named pipe
    return port;
  }

  return false;
};
/**
 * Get port from environment and store in Express.
 */


var port = normalizePort(process.env.PORT || '3000');

_app["default"].set('port', port);
/**
 * Event listener for HTTP server "error" event.
 */


var onError = function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? "Pipe ".concat(port) : "Port ".concat(port); // handle specific listen errors with friendly messages

  switch (error.code) {
    case 'EACCES':
      _debug["default"].log("".concat(bind, " requires elevated privileges"));

      process.exit(1);
      break;

    case 'EADDRINUSE':
      _debug["default"].log("".concat(bind, " is already in use"));

      process.exit(1);
      break;

    default:
      throw error;
  }
};
/**
 * Event listener for HTTP server "listening" event.
 */


var onListening =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
              _debug["default"].log("Server is listening on http://localhost:".concat(port, "/"));

              _models["default"].sequelize.sync({
                force: false
              });
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function onListening() {
    return _ref.apply(this, arguments);
  };
}();

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
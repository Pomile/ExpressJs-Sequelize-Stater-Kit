"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _chai = _interopRequireDefault(require("chai"));

require("@babel/polyfill");

var _app = _interopRequireDefault(require("../app"));

var _models = _interopRequireDefault(require("../database/models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var sequelize = _models["default"].sequelize;
var expect = _chai["default"].expect;
describe('TEST SUITE', function () {
  describe('GET /test', function () {
    before(
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return sequelize.authenticate().then(function () {
                console.log('Connection has been established successfully.');
              })["catch"](function (err) {
                console.error('Unable to connect to the database:', err);
              });

            case 2:
              _context.next = 4;
              return sequelize.close();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    it('should test route', function (done) {
      (0, _supertest["default"])(_app["default"]).get('/api/v1/test').set('Accept', 'application/json').expect(200).end(function (err, res) {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.msg).to.equal('Route module is working perfectly');
        done();
      });
    });
  });
});
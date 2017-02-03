'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _algoliasearch = require('algoliasearch');

var _algoliasearch2 = _interopRequireDefault(_algoliasearch);

var _convert = require('magnet-core/convert');

var _convert2 = _interopRequireDefault(_convert);

var _algolia = require('./config/algolia');

var _algolia2 = _interopRequireDefault(_algolia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _convert2.default)(_algoliasearch2.default, {
  namespace: 'algolia',
  params: ['config.applicationId', 'config.apiKey'],

  teardown: 'destroy'
}, _algolia2.default);
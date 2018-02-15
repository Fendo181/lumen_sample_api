'use strict';

var utils = require('../utils/writer.js');
var Authors = require('../service/AuthorsService');

module.exports.authorsGET = function authorsGET (req, res, next) {
  Authors.authorsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsIdDELETE = function authorsIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Authors.authorsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsIdGET = function authorsIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Authors.authorsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsIdPUT = function authorsIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Authors.authorsIdPUT(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsPOST = function authorsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Authors.authorsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

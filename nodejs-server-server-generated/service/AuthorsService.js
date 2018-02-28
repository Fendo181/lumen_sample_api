'use strict';


/**
 * Get all author by id
 *
 * returns Author
 **/
exports.authorsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "github" : "github",
  "twitter" : "twitter",
  "name" : "name",
  "location" : "location",
  "id" : 0,
  "email" : "email",
  "latest_article_published" : "latest_article_published"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete author by id
 * This can only be done by the logged in user.
 *
 * id String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.authorsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get an author by id
 *
 * id String The id that needs to be fetched.
 * returns Author
 **/
exports.authorsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "github" : "github",
  "twitter" : "twitter",
  "name" : "name",
  "location" : "location",
  "id" : 0,
  "email" : "email",
  "latest_article_published" : "latest_article_published"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updated author by id
 * Update Author info
 *
 * id String name that need to be updated
 * body Author Updated user object
 * no response value expected for this operation
 **/
exports.authorsIdPUT = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create an new author
 *
 * body Author Add New Author
 * no response value expected for this operation
 **/
exports.authorsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


'use strict';

angular.module('shopfrontApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });

'use strict';

angular.module('shopfrontApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, DataService) {
    $scope.menu = [{
      'title': 'Shop',
      'link': '/'
    }];

    $scope.cart = DataService.cart;
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

'use strict';

angular.module('shopfrontApp')
  .controller('MainCtrl', function ($scope, $http, $timeout, $routeParams, DataService) {
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    if($routeParams.productId != null) {
    	$scope.product = $scope.store.getProduct($routeParams.productId);
    }

    $timeout(function(){
    	var $affixElement = $('div[data-spy="affix"]');
	    $affixElement.width($affixElement.parent().width()).addClass('affix');
    });
  });


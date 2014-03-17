'use strict';

angular.module('shopfrontApp')
  .controller('MainCtrl', function ($scope, $http, $timeout, $routeParams, DataService) {
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;
    var count = $scope.cart.getTotalCount();

    if($routeParams.productId != null) {
    	$scope.product = $scope.store.getProduct($routeParams.productId);
    }

    $timeout(function(){
    	var $affixElement = $('div[data-spy="affix"]');
	    $affixElement.width($affixElement.parent().width()).addClass('affix');
    });

    $scope.giveProductAlert = function() {
        if ($scope.cart.getTotalCount() > count) {
            console.log('added');
            $("#basket").popover({ content: 'Item added to basket.', placement: 'bottom', trigger: 'manual' });
            $("#basket").popover('show');
            $timeout(function() {
                $("#basket").popover('destroy');
            }, 2000);
        }
    };
});


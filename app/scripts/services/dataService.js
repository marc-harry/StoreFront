'use strict';

angular.module('shopfrontApp')
  .factory('DataService', function () {
	var myStore = new store();
	var myCart = new shoppingCart("AngularStore");

	myCart.addCheckoutParameters("PayPal", "your PayPal merchant account id");
	
	myCart.addCheckoutParameters("Google", "your Google merchant account id ", {
		ship_method_name_1: "Royal Mail Next Day",
		ship_method_price_1: "4.99",
		ship_method_currency_1: "GBP",
		ship_method_name_2: "UPS",
		ship_method_price_2: "15.00",
		ship_method_currency_2: "GBP"
	});

	// enable Stripe checkout
    // note: the second parameter identifies your publishable key; in order to use the 
    // shopping cart with Stripe, you have to create a merchant account with 
    // Stripe. You can do that here:
    // https://manage.stripe.com/register
    myCart.addCheckoutParameters("Stripe", "pk_test_1wApod96vJ39oPUIV8aBxCEi",
        {
            chargeurl: "https://localhost:1234/processStripe.aspx"
        }
    );

	return {
		store: myStore,
		cart: myCart
	};
  });
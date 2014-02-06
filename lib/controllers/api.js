'use strict';

var mongoose = require('mongoose'),
    stripe = require('stripe')('sk_test_IgQrVkSVzmG7bqeaEjeHiHes');


exports.takePayment = function (req, res) {
	var stripeToken = req.body.id;

	var charge = stripe.charges.create({
		amount: req.body.amount, // amount in cents, again
		currency: "gbp",
		card: stripeToken,
		description: "Payment for products"
	}, function(err, charge) {
		if (err && err.type === 'StripeCardError') {
			// The card has been declined
			res.send(400, 'Failed!');
		} else {
			res.send(200, charge);
		}
	});
};
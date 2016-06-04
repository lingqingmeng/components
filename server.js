#!/usr/bin/env node
// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// database ===========================================


// configuration ===========================================
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
var port = process.env.PORT || 8090; // set our port





app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 	

// extra functions =========================================
function isInt(n){
    return Number(n)===n && n%1===0;
}

function toPsqlDoubleArray(a){
	var s = '{';
	for (var i = 0; i < a.length; i++){
		s += '{' + a[i].numUsers + ',' + a[i].price + '}';
		if (i < a.length - 1){
			s += ',';
		}
	}
	s += '}';
	return s;
}

/**
	totalMonthlyActiveUsers: 10000	
	pricingBuckets: [ { numUsers: 0, price: 20}, { numUsers: 1000, price: 10} ]
	=> { charge: 110000, result: "success", message: null }
	TODO: add more tests
*/
function determineCharge(usercount,buckets){
	var charge = 0;
    console.log('buckets',buckets);
	for (var i = buckets.length - 1; i>=0; i--) {
		charge += (usercount - buckets[i].numUsers) * buckets[i].price;
		usercount = buckets[i].numUsers;
	}	
	return charge;
}
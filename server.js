#!/usr/bin/env node
// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var Parser 		   = require("parse-listing");
// database ===========================================


// configuration ===========================================
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
var port = process.env.PORT || 8090; // set our port





//https://jsfiddle.net/Lwsja1j1/
//str result of this fiddle, consider doing it for all files not just directories
var str = ["drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 AMQP", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 AccountServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Achievement", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 AssetManifestServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Battlenet", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 BotClient", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 BrpcTest", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 CharacterProfileServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 CharacterServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 ChatServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 CommerceServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Component", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Configs", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Console", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 ConsoleDevice", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 DB", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Aug  5  2015 Debug", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 GDF", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 GMSupportServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Game", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 GameStats", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 GlobalServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Glue", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Jam", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 JamAutoCode", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 JamClientAutoCode", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 JamProxy", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 JamServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 JamSharedAutoCode", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 LFGServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 LiquidSystem", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 LogClient", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 LogServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Mac", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Magic", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 MarkupProfileServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Message", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 MobileServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Net", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Object", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 ObjectMgrClient", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 ObjectMgrServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 PartyServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 PetBattleServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 ProfileDisplay", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Profiler", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 ProtoBufAutoCode", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Aug  5  2015 Release", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 RenderService", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 RouterServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Script", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 ServerBase", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 ServerLogging", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Social", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 SoundInterface", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Spawn", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 UIUtil", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Ui", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 UserRouter", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 UserServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 WebServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 Win32", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 WorldClient2", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 WorldCommon", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 WorldServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 WowAllAutoCode", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 WowAllServers", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 WowController", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 WowEngine", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 WowError", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 WowErrorServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 WowGameServers", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 WowPerf", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 WowServer", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 WowServices", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 WowSvcs", "drwxrwx---+ 1 Administrators LEGALT2-W7+None      0 Jan  7  2016 ipch"];

app.get("/parser",function (req,res,next){
	Parser.parseEntries(str, function(err, entryArray) {
	    if (err) {res.send(err)}
	    else {
	    	res.json(entryArray);
	    }
	});	
})
 
app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 	

// extra functions refactor into app dir ===================




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
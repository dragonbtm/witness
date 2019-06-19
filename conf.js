/*jslint node: true */
"use strict";


exports.port = null;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;

exports.rpcInterface = '127.0.0.1';
exports.rpcPort = '6611';
exports.webPort = 8081; // dag explorer

exports.storage = 'mysql';

exports.database = {
	host:"localhost",
	name:"witness",
	user:"root",
	password:"root"
}

exports.WS_PROTOCOL = 'ws://';

exports.hub = process.env.testnet ? 'hub1.xxx.com/bb-test' : '127.0.0.1:8286';
exports.deviceName = 'Witness';
exports.permanent_pairing_secret = 'randomstring';
exports.control_addresses = ['DEVICE ALLOWED TO CHAT'];
exports.payout_address = 'WHERE THE MONEY CAN BE SENT TO';

exports.bSingleAddress = true;
exports.THRESHOLD_DISTANCE = 50;
exports.MIN_INTERVAL = 60*1000; // min interval between witnessings in milliseconds
exports.MIN_AVAILABLE_WITNESSINGS = 100;


exports.TIMESTAMPING_INTERVAL = 60 * 1000; // in milliseconds

//出快速度
exports.MIN_INTERVAL = 6000;


exports.initial_witnesses = [
	'WXNM4L4OTGIKSQHMMMBE6TUW6YJ4SHGY',
	'J4LFUWCFCXLWNNCLGMVGQKXUOUULNPDW',
	'DLVXBKXVNSOLGSXVAJBUYQUG5OEGWTV5',
	'JNR2E5BPXI576ZEVR5S5HVTYC6EZNDPW',
	'SLNK5ISPUQRJX2VIMUTU7YHMNTGOWUEC',
	'SDO4KLWIPLLKBWMW5FJSWBCWBHHOC2OI'
];


exports.KEYS_FILENAME = 'keys.json';

console.log('finished witness conf');














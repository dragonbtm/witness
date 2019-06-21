exports.deviceName = 'witness';
exports.permanent_pairing_secret = '0000';
exports.WS_PROTOCOL = 'ws://';
// exports.hub = 'hub1..com/bb';


//exports.hub = '132.148.150.38:8286';
exports.KEYS_FILENAME = 'keys.json';

exports.rpcPort = '6332';
exports.webPort = 8081; // dag explorer
exports.bServeAsHub = false;
exports.bLight = false;

// witness configuration
exports.bSingleAddress = true;
exports.THRESHOLD_DISTANCE = 1;
exports.MIN_AVAILABLE_WITNESSINGS = 100;
exports.TIMESTAMPING_INTERVAL = 60 * 1000; // in milliseconds

//出快速度
exports.MIN_INTERVAL = 6000;


// exports.admin_email='zz634682577@163.com';
// exports.from_email='wenzhengzhang@chenhaninfo.com';
// exports.smtpTransport ="relay";
// exports.smtpUser='wenzhengzhang@chenhaninfo.com';
// exports.smtpPassword='Aa123123';
// exports.smtpRelay='smtp.mxhichina.com';
// exports.smtpPort='25';


exports.initial_witnesses = [
	'WXNM4L4OTGIKSQHMMMBE6TUW6YJ4SHGY',
	'J4LFUWCFCXLWNNCLGMVGQKXUOUULNPDW',
	'DLVXBKXVNSOLGSXVAJBUYQUG5OEGWTV5',
	'JNR2E5BPXI576ZEVR5S5HVTYC6EZNDPW',
	'SLNK5ISPUQRJX2VIMUTU7YHMNTGOWUEC',
	'SDO4KLWIPLLKBWMW5FJSWBCWBHHOC2OI'
];

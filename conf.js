exports.deviceName = 'witness';
exports.permanent_pairing_secret = '0000';
exports.WS_PROTOCOL = 'wss://';
// exports.hub = 'hub1..com/bb';


//exports.hub = '132.148.150.38:8286';
exports.KEYS_FILENAME = 'keys.json';

exports.rpcPort = '6611';
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


exports.admin_email='zz634682577@163.com';
exports.from_email='wenzhengzhang@chenhaninfo.com';
exports.smtpTransport ="relay";
exports.smtpUser='wenzhengzhang@chenhaninfo.com';
exports.smtpPassword='Aa123123';
exports.smtpRelay='smtp.mxhichina.com';
exports.smtpPort='25';


exports.initial_witnesses = [
	'O4JNHW52CF5BDGASQEVLAVZGBMNHYZ2S',
	'QLKAIB33R7AVHABYC5PGER2LLIVH5YE2',
	'IOOOMPPD6FRHTNQBK763EAFUCIRJZYMP',
	'HVDDB5NBWCY4Y2I3ZO673OJO5QD2EPON',
	'4BDRTRHHW4L3EKNCTVYXTKMXDFHQFYTE',
	'3OVSZG2MSJTNPROZXG3QV7DUFYZCR7KV'

];

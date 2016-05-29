var restful = require('node-restful');
var mongoose = restful.mongoose;

var usersSchema = mongoose.Schema({
	device_id : String,
	driver_name : String,
	driver_license_number : String,
	vehicle_type : String,
	vehicle_number : String,
	vehicle_use_type: String,
	vehicle_last_known_location : String,
	vehicle_last_reporting_date : String
});

module.exports = restful.model('users', usersSchema);
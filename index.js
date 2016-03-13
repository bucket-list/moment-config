var moment = require("moment");
var range = require("moment-range");
var timezone = require("moment-timezone");

range.prototype.contains = function contains(other, exclusive) {
	const start = this.start;
	const end = this.end;

	if (other instanceof range) {
		return (start < other.start || (start.isSame(other.start) && !exclusive)) && (end > other.end || (end.isSame(other.end) && !exclusive));
	} else {
		return (start < other || (start.isSame(other) && !exclusive)) && (end > other || (end.isSame(other) && !exclusive));
	}
};

module.exports = moment;
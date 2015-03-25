// just "site.com" or "site.com:port", no "http://"
exports.host = null;

// string to specify this server's ip, or null to listen on any ip
exports.ip = null;

exports.port = 80;

// if set, GA tracking code will be inserted into the bottom of every page
exports.google_analytics_id = null;

// this is used connect to keep session cookies secure. You should change this.
exports.secret = "correct horse battery staple";

// for redis if you're on heroku or using redis-to-go
exports.redistogo_url = "";

// for redis if you're running your own copy
exports.redis_host = "localhost";
exports.redis_port = 6379;
exports.redis_options = null;

const redis = require('redis');
var url = '10.10.11.104'
var port = 6379;
var passwd = 'ebit';
const client = redis.createClient(port, url)
client.auth(passwd)
const hset = (key, value) => {
    client.hset('monitor_live_count', key, value)
}
module.exports = {
    hset
}

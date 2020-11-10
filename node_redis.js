const redis = require('redis');
const url = '10.10.11.104';
const port = 6379;
const passwd = 'ebit';
const client = redis.createClient(port, url)
client.auth(passwd)
const hset = (key, value) => {
    client.hset('monitor_live_count', key, value)
}
module.exports = {
    hset
}

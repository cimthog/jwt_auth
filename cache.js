
const redis = require('redis'),
client = redis.createClient();

client.on('connect', () => console.log("connected to redis server"));
client.on('error',(err)=> console.log(`Error ${err}`));

module.exports = client
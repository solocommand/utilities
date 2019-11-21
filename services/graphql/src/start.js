const redis = require('./redis');
const mongo = require('./mongo');

const { log } = console;

const start = (promise, name, url) => {
  log(`> Connecting to ${name}...`);
  return promise.then((r) => {
    const u = typeof url === 'function' ? url(r) : url;
    log(`> ${name} connected ${u ? `(${u})` : ''}`);
    return r;
  });
};

module.exports = () => Promise.all([
  start(mongo.client.connect(), 'MongoDB core'),
  start(new Promise((resolve, reject) => {
    redis.on('connect', resolve);
    redis.on('error', reject);
  }), 'Redis', () => redis.options.url),
]);

const { cleanEnv, makeValidator } = require('envalid');

const nonemptystr = makeValidator((v) => {
  const err = new Error('Expected a non-empty string');
  if (v === undefined || v === null || v === '') {
    throw err;
  }
  const trimmed = String(v).trim();
  if (!trimmed) throw err;
  return trimmed;
});

module.exports = cleanEnv(process.env, {
  MONGO_DSN: nonemptystr({ desc: 'The default/core MongoDB DSN to connect to.' }),
  REDIS_DSN: nonemptystr({ desc: 'The Redis DSN to connect to.' }),
  TENANT_KEY: nonemptystr({ desc: 'The tenant key. Is used for querying the account information and settings from the core database connection.' }),
});

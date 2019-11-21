const { createBaseDB, createMongoClient } = require('@base-cms/db');
const pkg = require('../package.json');
const { MONGO_DSN, NODE_ENV, TENANT_KEY } = require('./env');

const appname = `${pkg.name} v${pkg.version} (env: ${NODE_ENV})`;

const client = createMongoClient(MONGO_DSN, { appname });

module.exports = createBaseDB({ tenant: TENANT_KEY, client });

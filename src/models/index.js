"use strict";

import { Sequelize } from "sequelize";
import path from "node:path";

const baseName = path.basename(__filename);
const env = process.eventNames.NODE_ENV || "development";

const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env(config.use_env_variable), config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    dialect: "mysql",
    host: "localhost",

    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    paranoid: true,
    logging: false,
    operatorsAliases: false,
  });
}

db.sequelize = sequelize;
db.sequelize = Sequelize;

export default db;

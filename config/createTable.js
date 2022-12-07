import createKnexClient from 'knex';
import { mysqlConfig } from "./config.js";
const knex = require('knex')(mysqlConfig)

knex.schema.createTable("mensajes", table => {
  table.increments('id')
  table.string('name')
  table.integer('price')
})
.then(() => console.log('table created'))
.catch((err) => { console.log(err); throw err })
.finally(() => {
  knex.destroy();
});

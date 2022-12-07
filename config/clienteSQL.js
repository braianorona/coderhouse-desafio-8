import createKnexClient from 'knex';
import { mysqlConfig } from "./config.js";

export const clienteSQL = createKnexClient(mysqlConfig);

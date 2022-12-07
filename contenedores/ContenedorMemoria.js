import { ContenedorMySQL } from "./ContenedorMySQL.js";
import { clienteSQL } from "../config/clienteSQL.js";

export const contenedorMemoria = new ContenedorMySQL(clienteSQL, 'productos');

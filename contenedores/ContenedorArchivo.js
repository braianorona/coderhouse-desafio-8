import { ContenedorMySQL } from "./ContenedorMySQL.js";
import { clienteSQL } from "../config/clienteSQL.js";

export const contenedorArchivo = new ContenedorMySQL(clienteSQL, 'mensajes');

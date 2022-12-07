import {Router} from 'express';
import { contenedorPersonas } from './contenedorPersonas.js';
import { randomUUID } from 'crypto'

export const routerProductos = Router();

routerPersonas.get('/', async (req, res) => {
  res.json(await contenedorPersonas.recuperar());
});

routerPersonas.post('/', async (req, res) => {
  const newPerson = req.body
  newPerson.id = randomUUID()
  await contenedorPersonas.guardar(newPerson);
  res.json(newPerson)
});

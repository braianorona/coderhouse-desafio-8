import {Router} from 'express';
import { contenedorArchivo } from '../contenedores/ContenedorArchivo.js';
import { randomUUID } from 'crypto'

export const routerMensajes = Router();

routerMensajes.get('/', async (req, res) => {
  res.json(await contenedorArchivo.listarAll());
});

routerMensajes.get('/:id', async (req, res) => {
  res.json(await contenedorArchivo.listar(req.params.id));
});

routerMensajes.post('/', async (req, res) => {
  const newPerson = req.body
  newPerson.id = randomUUID()
  await contenedorPersonas.guardar(newPerson);
  res.json(newPerson)
});

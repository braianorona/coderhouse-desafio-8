import express from 'express'
// import { routerMensajes } from '../routers/routerMensajes.js'
// import { routerProductos } from '../routers/routerProductos.js'
import { contenedorArchivo } from '../contenedores/ContenedorArchivo.js'
import { contenedorMemoria } from '../contenedores/ContenedorMemoria.js'
import { createServer } from 'http';
import { Server } from 'socket.io';

export const app = express()

const httpServer = createServer()
const io = new Server(httpServer)

// const productosApi = new contenedorMemoria()
// const mensajesApi = new contenedorArchivo()

// app.use('/api/mensajes', routerMensajes)
// app.use('/api/productos', routerProductos)

io.on('connection', async socket => {
  console.log('nuevo cliente conectado!')

  socket.emit('productos', contenedorMemoria.listarAll());

  socket.on('update', producto => {
    contenedorMemoria.guardar(producto)
    io.sockets.emit('productos', contenedorMemoria.listarAll())
  })

  socket.emit('mensajes', await contenedorArchivo.listarAll())

  socket.on('nuevoMensaje', async mensaje => {
    mensaje.fyh = new Date().toLocaleString()
    await contenedorArchivo.guardar(mensaje)
    io.sockets.emit('mensajes', await contenedorArchivo.listarAll());
  })
})


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))

export class ContenedorMySQL {
  constructor(clienteMysql, tabla) {
    this.cliente = clienteMysql;
    this.tabla = tabla;
  }

  async listar(id) {
    return await this.client(this.tabla).select(id);
  }

  async listarAll() {
    return await this.client(this.tabla).select();
  }

  async guardar(cosa) {
    await this.cliente(this.tabla).insert(cosa);
  }

  async actualizar(elem, id) {
    return await this.client(this.tabla).where('id', id).update(elem, '*')
  }

  async borrar(id) {
    return await this.client(this.tabla).where({ id: parseInt(id)}).del()
  }

  async borrarAll() {
    return await this.client(this.tabla).del()
  }

}

function listarUsuarios() {
  usuario.forEach((usuario, index) => {
  console.log(`
  ID: ${usuario.id}
  Nome: ${usuario.nome}
  Telefones: ${usuario.telefones}
  Email: ${usuario.email}`);
  });
  }

  module.exports = listarUsuarios
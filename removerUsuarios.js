let usuario = require('./usuario');

function removerUsuarios(index) {
  usuario.splice(index, 1);
}

module.exports = removerUsuarios;
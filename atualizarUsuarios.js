let usuario = require('./usuarios')

function atualizarUsuarios(index, novoUsuario) {
  usuario[index] = novoUsuario;
}

module.exports = atualizarUsuarios;